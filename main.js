nose_x=0;
nose_y=0;

right_wristX=0;
left_wristX=0;

difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,70);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#ff03dd');
    fill('#0af00d');
    stroke('#000000');
    square(nose_x,nose_y,difference);

}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("noseX = "+ nose_x+"noseY = "+nose_y);
    right_wristX = results[0].pose.rightWrist.x;
    left_wristX = results[0].pose.leftWrist.x;
    difference = left_wristX-right_wristX;
    }
}
