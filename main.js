video = "";
status = "";
txtObjectName = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function preload() {
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 380);
    translate(width, 0); // move to far corner
    scale(-1.0, 1.0);
    image(video, 0, 0, 480, 380);
}

function startVideo() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("statusOfObject").innerHTML = "Status: Object Detecting";
    txtObjectName = document.getElementById("txtObjectName").value;
    console.log(txtObjectName); 
}

function modelLoaded() {
    console.log("Model is Loaded!");
    status = true;
}