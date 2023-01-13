var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var raqete1 = createSprite(390,200,10, 100);
raqete1.shapeColor = rgb(0, 0, 255);

var raqete2 = createSprite(10, 200, 10, 100);
raqete2.shapeColor = rgb(255,0,0);

var bola1 = createSprite(200, 200, 20, 20);
bola1.shapeColor = rgb(100,100,100);

function draw() {
  
  background("white");
  drawSprites();
  bola1.bounceOff(topEdge);
  bola1.bounceOff(bottomEdge);
  bola1.bounceOff(raqete1);
  bola1.bounceOff(raqete2);
  raqete2.y = bola1.y;
  raqete1.y = bola1.y;
  for(var num=0;num<400;num = num+20){ 
    line(200,num,200,num+10);
  }
  if (keyDown("space")) {
    bola1.velocityY = -3;
    bola1.velocityX = 5;
  }
  }
createEdgeSprites();

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
