let canvas;
let shape="none";
let x,y,radius;
let s;
let w,h;
let fillcolor;
var speechrecognition=window.webkitSpeechRecognition;
var recognition= new speechrecognition();

function listening(){
  recognition.start();
  document.getElementById('status').innerHtml="Listening...Speak Now!!!";
}
recognition.onresult=function(event){
  console.log(event);
  var content=event.results[0][0].transcript.toLowerCase()
  document.getElementById('status').innerHTML="You Said:"+content;
  if(content.includes("circle")){
    shape="Circle";
    x=Number(prompt("x=?"));
    y=Number(prompt("y=?"));
    radius=Number(prompt("radius=?"));
    fillcolor=prompt("What Do You Want Your Shapes Color To Be?")
  }
  if(content.includes("square")){
    shape="Square";
    x=Number(prompt("x=?"));
    y=Number(prompt("y=?"));
    s=Number(prompt("width And height=?"));
    fillcolor=prompt("What Do You Want Your Shapes Color To Be?")
  }
  if(content.includes("rectangle")){
    shape="Rectangle";
    x=Number(prompt("x=?"));
    y=Number(prompt("y=?"));
    w=Number(prompt("width=?"));
    h=Number(prompt("height=?"));
    fillcolor=prompt("What Do You Want Your Shapes Color To Be?")
  }
}
function setup() {
  createCanvas(500, 500);
  canvas=createCanvas(600,400);
  canvas.center();
  background("white")
}

function draw() {
  if (shape=="Circle"){
    fill(fillcolor)
    circle(x,y,radius);
    document.getElementById('status').innerHTML= "Circle Has Been Drawn.";
    shape="none";
  }
 else if (shape=="Square"){
    fill(fillcolor)
    square(x,y,s);
    document.getElementById('status').innerHTML= "Square Has Been Drawn.";
   shape="none";
  }
 else if (shape=="Rectangle"){
   fill(fillcolor)
   rect(x,y,w,h);
    document.getElementById('status').innerHTML= "Rectangle Has Been Drawn.";
   shape="none";
  }
}