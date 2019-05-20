let recorder, soundFile, font;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var button8;
var button9;
var button10;
var button11;
var button12;
var button13;
var button14;
var button15;
var button16;
var button17;
var button18;
var button19;
var button20;
var button21;
var button22;


function preload() {
  snare1 = loadSound('./assets/beats/snare/snare1.wav');
  snare2 = loadSound('./assets/beats/snare/snare1.wav');
  snare3 = loadSound('./assets/beats/snare/snare3.wav');
  loop1 = loadSound('./assets/beats/loop/loop1.wav');
  loop2 = loadSound('./assets/beats/loop/loop2.wav');
  loop3 = loadSound('./assets/beats/loop/loop3.wav');
  kick1 = loadSound('./assets/beats/kick/kick1.wav');
  kick2 = loadSound('./assets/beats/kick/kick2.wav');
  kick3 = loadSound('./assets/beats/kick/kick3.wav');
  hatz1 = loadSound('./assets/beats/hatz/hatz1.wav');
  hatz2 = loadSound('./assets/beats/hatz/hatz2.wav');
  hatz3 = loadSound('./assets/beats/hatz/hatz3.wav');
  cymbz1 = loadSound('./assets/beats/cymbz/cymbalz1.wav');
  cymbz2 = loadSound('./assets/beats/cymbz/cymbalz2.wav');
  cymbz3 = loadSound('./assets/beats/cymbz/cymbalz3.wav');
  crash1 = loadSound('./assets/beats/crash/crash1.wav');
  crash2 = loadSound('./assets/beats/crash/crash2.wav');
  crash3 = loadSound('./assets/beats/crash/crash3.wav');
  eight0eight1 = loadSound('./assets/beats/808/8081.wav');
  eight0eight2 = loadSound('./assets/beats/808/8082.wav');
  eight0eight3 = loadSound('./assets/beats/808/8083.wav');
  font = loadFont("./assets/dosis.ttf");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(196, 196, 196);
  noStroke();


  //create empty sound file
  soundFile = new p5.SoundFile();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect something to the recorder
  recorder.setInput();

  button1 = createButton("snare 1");
  button1.position(width / 25, height / 25);
  button1.mousePressed(snare1P);
  button1.style("font-family", "Dosis");
  button1.style("font-size", "13px");

  button2 = createButton("snare 2");
  button2.position(width / 25, height / 10);
  button2.mousePressed(snare2P);
  button2.style("font-family", "Dosis");
  button2.style("font-size", "13px");

  button3 = createButton("snare 3");
  button3.position(width / 25, height / 6.3);
  button3.mousePressed(snare3P);
  button3.style("font-family", "Dosis");
  button3.style("font-size", "13px");

  button4 = createButton("loop 1");
  button4.position(width / 6, height / 25);
  button4.mousePressed(loop1P);
  button4.style("font-family", "Dosis");
  button4.style("font-size", "13px");

  button5 = createButton("loop 2");
  button5.position(width / 6, height / 10);
  button5.mousePressed(loop2P);
  button5.style("font-family", "Dosis");
  button5.style("font-size", "13px");

  button6 = createButton("loop 3");
  button6.position(width / 6, height / 6.3);
  button6.mousePressed(loop3P);
  button6.style("font-family", "Dosis");
  button6.style("font-size", "13px");

  button7 = createButton("kick 1");
  button7.position(width / 3.5, height / 25);
  button7.mousePressed(kick1P);
  button7.style("font-family", "Dosis");
  button7.style("font-size", "13px");

  button8 = createButton("kick 2");
  button8.position(width / 3.5, height / 10);
  button8.mousePressed(kick2P);
  button8.style("font-family", "Dosis");
  button8.style("font-size", "13px");

  button9 = createButton("kick 3");
  button9.position(width / 3.5, height / 6.3);
  button9.mousePressed(kick3P);
  button9.style("font-family", "Dosis");
  button9.style("font-size", "13px");

  button10 = createButton("hatz 1");
  button10.position(width / 2.5, height / 25);
  button10.mousePressed(hatz1P);
  button10.style("font-family", "Dosis");
  button10.style("font-size", "13px");

  button11 = createButton("hatz 2");
  button11.position(width / 2.5, height / 10);
  button11.mousePressed(hatz2P);
  button11.style("font-family", "Dosis");
  button11.style("font-size", "13px");

  button12 = createButton("hatz 3");
  button12.position(width / 2.5, height / 6.3);
  button12.mousePressed(hatz3P);
  button12.style("font-family", "Dosis");
  button12.style("font-size", "13px");

  button13 = createButton("cymbz 1");
  button13.position(width / 1.9, height / 25);
  button13.mousePressed(cymbz1P);
  button13.style("font-family", "Dosis");
  button13.style("font-size", "13px");

  button14 = createButton("cymbz 2");
  button14.position(width / 1.9, height / 10);
  button14.mousePressed(cymbz2P);
  button14.style("font-family", "Dosis");
  button14.style("font-size", "13px");

  button15 = createButton("cymbz 3");
  button15.position(width / 1.9, height / 6.3);
  button15.mousePressed(cymbz3P);
  button15.style("font-family", "Dosis");
  button15.style("font-size", "13px");

  button16 = createButton("crash 1");
  button16.position(width / 1.5, height / 25);
  button16.mousePressed(crash1P);
  button16.style("font-family", "Dosis");
  button16.style("font-size", "13px");

  button17 = createButton("crash 2");
  button17.position(width / 1.5, height / 10);
  button17.mousePressed(crash2P);
  button17.style("font-family", "Dosis");
  button17.style("font-size", "13px");

  button18 = createButton("crash 3");
  button18.position(width / 1.5, height / 6.3);
  button18.mousePressed(crash3P);
  button18.style("font-family", "Dosis");
  button18.style("font-size", "13px");

  button19 = createButton("808 1");
  button19.position(width / 1.25, height / 25);
  button19.mousePressed(eight0eight1P);
  button19.style("font-family", "Dosis");
  button19.style("font-size", "13px");

  button20 = createButton("808 2");
  button20.position(width / 1.25, height / 10);
  button20.mousePressed(eight0eight2P);
  button20.style("font-family", "Dosis");
  button20.style("font-size", "13px");

  button21 = createButton("808 3");
  button21.position(width / 1.25, height / 6.3);
  button21.mousePressed(eight0eight3P);
  button21.style("font-family", "Dosis");
  button21.style("font-size", "13px");




  button22 = createButton("stop recording");
  button22.position(width / 1.95, height / 3.5);
  button22.mousePressed(stop);
  button22.style("font-family", "Dosis");
  button22.style("font-size", "13px");
 
  textAlign(CENTER);
  rectMode(CENTER); 
  textFont(font);
  textSize(20);
  text("Once you click a button, your song will automatically start recording. Simply toggle the different buttons to play different sounds and create your own music. When you're finished, press the 'Stop Recording' button and your song will be saved!", width/2, height/1.5, 650, 200);

}

function draw() {

}

function mousePressed() {
  recorder.record(soundFile);
}

function stop() {
  recorder.stop(); // stop recorder, and send the result to soundFile
  saveSound(soundFile, 'mySong.wav'); // save file
}

function snare1P() {
  snare1.play()
}

function snare2P() {
  snare2.play()
}

function snare3P() {
  snare3.play()
}

function loop1P() {
  loop1.play()
}

function loop2P() {
  loop2.play()
}

function loop3P() {
  loop3.play()
}

function kick1P() {
  kick1.play()
}

function kick2P() {
  kick2.play()
}

function kick3P() {
  kick3.play()
}

function hatz1P() {
  hatz1.play()
}

function hatz2P() {
  hatz2.play()
}

function hatz3P() {
  hatz3.play()
}

function cymbz1P() {
  cymbz1.play()
}

function cymbz2P() {
  cymbz2.play()
}

function cymbz3P() {
  cymbz3.play()
}

function crash1P() {
  crash1.play()
}

function crash2P() {
  crash2.play()
}

function crash3P() {
  crash3.play()
}

function eight0eight1P() {
  eight0eight1.play()
}

function eight0eight2P() {
  eight0eight2.play()
}

function eight0eight3P() {
  eight0eight3.play()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(196);
}