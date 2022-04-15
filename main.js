function preload() {}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function draw() {
  image(video, 0, 0, 300, 300);
}

function take_snapshot() {
  save("me.png");
}

function modelLoaded()
{
    console.log("poseNet Model is successfully loaded")
}

function gotPoses(results)
{
  if (results.length > 0) {
    console.log(results)
    console.log("lipx = " + results[0].pose.lip.x)
    console.log("lipy = " + results[0].pose.lip.y);
  }