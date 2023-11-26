song=""
function preload(){
    song=loadSound("music.mp3")
}
function setup(){
    canvas=createCanvas(550,550)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,550,550)
}
function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function modelloaded(){
    console.log("posenetisinitialized")
}
function gotposes(results){
    if (results.length>0) {
        console.log(results)
        leftwrist_x=results[0].pose.leftWrist.x
        leftwrist_y=results[0].pose.leftWrist.y
        rightwrist_x=results[0].pose.rightWrist.x
        rightwrist_y=results[0].pose.rightWrist.y
        console.log(leftwrist_x,leftwrist_y,rightwrist_x,rightwrist_y)
    }
}