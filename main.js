
status="";
objects=[];

function setup(){
canvas = createCanvas(380 , 380);
canvas.center();
video=createCapture(VIDEO);
video.size(380 , 380);
video.hide();
objector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status: detecting objects";
}

function draw(){
image(video,0,0,380,380);
if(status!=""){
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="status:objects detected";
document.getElementById("noob").innerHTML="no. of objects detected"+objects.length;
fill("purple");
percent= floor(objects[i].confidence*100);
text(objects[i].label+" "+ percent +"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("black");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
console.log("rectangles drawn");
}
}

}

function modelLoaded(){
console.log("modelLoaded");
status=true;
objector.detect(video, gotResult);
}

function gotResult(error, results){
if(error){
console.log(error);
}
console.log(results);
objects=results;
}