require("weapp-adapter.js");

var subLoadFinish = false;
const loadBasePacks = () => {
    if (wx) {
        var list = ['GameData', 'js', 'libs', 'Lwg', 'Views'];
        const temp = () => {
            const name = list.shift();
            if (name) {
                const loadTask = wx.loadSubpackage({
                    name: name,
                    success: (res) => {
                        console.log('分包加载成功=', name);
                        temp();
                    },
                    fail: (res) => {
                        console.log('分包加载失败=', name);
                        list.unshift(name);
                        setTimeout(temp, 1000);
                    }
                });
            } else {
                subLoadFinish = true;
                if ((typeof swan !== 'undefined') && (typeof swanGlobal !== 'undefined')) {
                    require("swan-game-adapter.js");
                    require("libs/laya.bdmini.js");
                } else if (typeof wx !== "undefined") {
                    require("weapp-adapter.js");
                    require("libs/laya.wxmini.js");
                }
                window.loadLib = require;
                require("index.js");
            }
        };
        temp();
    } else {
        subLoadFinish = true;
        if ((typeof swan !== 'undefined') && (typeof swanGlobal !== 'undefined')) {
            require("swan-game-adapter.js");
            require("libs/laya.bdmini.js");
        } else if (typeof wx !== "undefined") {
            require("weapp-adapter.js");
            require("libs/laya.wxmini.js");
        }
        window.loadLib = require;
        require("index.js");
    }
}

// ------------------------------------------------------------
// ---------------------------方法三----------------------------
// ------------------------------------------------------------

var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec2 a_TexCoord;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '  v_TexCoord = a_TexCoord;\n' +
    '}\n';

var FSHADER_SOURCE =
    '#ifdef GL_ES\n' +
    'precision mediump float;\n' +
    '#endif\n' +
    'uniform sampler2D u_Sampler;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    '  gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
    '}\n';

const VERTICES = new Float32Array([
    -1, 1, 0.0, 0.0,
    -1, -1, 0.0, 1.0,
    1, 1, 1.0, 0.0,
    1, -1, 1.0, 1.0,
]);

var INITENV = false;
var TEXTURE, USAMPLE, IMAGE;

function initShaders(gl, vshader, fshader) {
    var program = createProgram(gl, vshader, fshader);
    if (!program) {
        console.log('Failed to create program');
        return false;
    }

    gl.useProgram(program);
    gl.program = program;

    return true;
}

function createProgram(gl, vshader, fshader) {
    // Create shader object
    var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
    var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);
    if (!vertexShader || !fragmentShader) {
        return null;
    }

    // Create a program object
    var program = gl.createProgram();
    if (!program) {
        return null;
    }

    // Attach the shader objects
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    // Link the program object
    gl.linkProgram(program);

    // Check the result of linking
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        var error = gl.getProgramInfoLog(program);
        console.log('Failed to link program: ' + error);
        gl.deleteProgram(program);
        gl.deleteShader(fragmentShader);
        gl.deleteShader(vertexShader);
        return null;
    }
    return program;
}

function loadShader(gl, type, source) {
    // Create shader object
    var shader = gl.createShader(type);
    if (shader == null) {
        console.log('unable to create shader');
        return null;
    }

    // Set the shader program
    gl.shaderSource(shader, source);

    // Compile the shader
    gl.compileShader(shader);

    // Check the result of compilation
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        var error = gl.getShaderInfoLog(shader);
        console.log('Failed to compile shader: ' + error);
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function initVertexBuffers(gl, vertices) {
    var verticesTexCoords = vertices || new Float32Array([
        // Vertex coordinates, texture coordinate
        -1, 1, 0.0, 0.0,
        -1, -1, 0.0, 1.0,
        1, 1, 1.0, 0.0,
        1, -1, 1.0, 1.0,
    ]);

    var n = 4; // The number of vertices

    // Create the buffer object
    var vertexTexCoordBuffer = gl.createBuffer();
    if (!vertexTexCoordBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }

    // Bind the buffer object to target
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, verticesTexCoords, gl.STATIC_DRAW);

    var FSIZE = verticesTexCoords.BYTES_PER_ELEMENT;
    //Get the storage location of a_Position, assign and enable buffer
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log('Failed to get the storage location of a_Position');
        return -1;
    }
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
    gl.enableVertexAttribArray(a_Position);  // Enable the assignment of the buffer object

    // Get the storage location of a_TexCoord
    var a_TexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord');
    if (a_TexCoord < 0) {
        console.log('Failed to get the storage location of a_TexCoord');
        return -1;
    }
    // Assign the buffer object to a_TexCoord variable
    gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
    gl.enableVertexAttribArray(a_TexCoord);  // Enable the assignment of the buffer object

    return n;
}

function initTextures(gl, n, imgPath) {
    var texture = gl.createTexture(); // Create a texture object
    if (!texture) {
        console.log('Failed to create the texture object');
        return [null, null, null, false];
    }

    // Get the storage location of u_Sampler
    var u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler');
    if (!u_Sampler) {
        console.log('Failed to get the storage location of u_Sampler');
        return [null, null, null, false];
    }
    var image = wx.createImage();  // Create the image object
    if (!image) {
        console.log('Failed to create the image object');
        return [null, null, null, false];
    }
    // Register the event handler to be called on loading an image
    image.onload = function () { loadTexture(gl, n, TEXTURE, u_Sampler, image); };
    // Tell the browser to load an image
    image.src = imgPath;
    return [texture, u_Sampler, image, true];
}

function loadTexture(gl, n, texture, u_Sampler, image) {
    // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // Flip the image’s y axis
    // Enable texture unit0
    gl.activeTexture(gl.TEXTURE0);
    // Bind the texture object to the target
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Set the texture parameters
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    // Set the texture image
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

    // Set the texture unit 0 to the sampler
    gl.uniform1i(u_Sampler, 0);

    gl.clear(gl.COLOR_BUFFER_BIT);   // Clear <canvas>

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n); // Draw the rectangle
}

function InitGLEnv(imgPath, gl, vertices) {
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return [-1];
    }

    // Initialize shaders
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to intialize shaders.');
        return -1;
    }

    // Set the vertex information
    var n = initVertexBuffers(gl, vertices);
    if (n < 0) {
        console.log('Failed to set the vertex information');
        return -1;
    }

    // Specify the color for clearing
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    // Set texture
    var ret = true;
    var teture, u_sample, image;
    [teture, u_sample, image, ret] = initTextures(gl, n, imgPath);
    if (!ret) {
        console.log('Failed to intialize the texture.');
        return -1;
    }
    return [teture, u_sample, image, ret];
}

var isFirsDrawImg = true;
var gl = null;
var vertices;

function drawImg(imgPath, gl) {
    if (!INITENV) {
        var r = 0;
        [TEXTURE, USAMPLE, IMAGE, r] = InitGLEnv(imgPath, gl, VERTICES);
        if (r < 0) {
            return;
        }
        INITENV = true;
    }
    var n = initVertexBuffers(gl, VERTICES);
    if (n < 0) {
        console.log('Failed to set the vertex information');
        return;
    }
    loadTexture(gl, n, TEXTURE, USAMPLE, IMAGE);
}

function render() {
    if (!subLoadFinish) {
        drawImg("Init/Logo/img_rectangle_14.png", gl);
        requestAnimationFrame(render);
    }
}

var gl = canvas.getContext('webgl');
const data = wx.getSystemInfoSync();
if (data.system.indexOf('Android') != -1) {
    drawImg("Init/Logo/img_rectangle_14.png", gl);
}
else {
    drawImg("Init/Logo/img_rectangle_14.png", gl);
    requestAnimationFrame(render);
}
loadBasePacks();
