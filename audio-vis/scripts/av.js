window.onload = function() {

  var file = document.getElementById("thefile");
  var audio = document.getElementById("audio");
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

  file.onchange = function() {
    var files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    var img1=new Image();
    img1.src="images/try2.jpg";

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);
      pattern1=ctx.createPattern(img1,'repeat');
      ctx.fillStyle = pattern1;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        var b = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var r = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    audio.play();
    renderFrame();
  };
};
