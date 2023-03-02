difference = 0;

rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotPoses);
}

function modelloaded()
{
    console.log("Model has loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log(difference);
    }
}

function draw()
{
    background("#6C91C2");
    document.getElementById("font_size").innerHTML = difference + "px";
    textSize(difference);
    fill("#FFE787");
    text("DISHAN",50,400);
}