$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
     //


    // TODO 2 - Create Platforms

createPlatform(200,550,100,10000)
createPlatform(550,550,50,10)
createPlatform(720,650,40,10)
createPlatform(950,520,40,10)
createPlatform(800,400,40,10)
createPlatform(200,290,500,10)
createPlatform(225,160,500,10)
createPlatform(800,100,10,100)
createPlatform(800,200,400,10)
createPlatform(1350,265,100,8)
    // TODO 3 - Create Collectables
    createCollectable("diamond",1335,250)
    createCollectable("diamond",450,240)
    createCollectable("diamond",480,700)
    createCollectable("diamond",950,450)
    createCollectable("diamond",810,150)
    // TODO 4 - Create Cannons
    createCannon("right",800,1)
    createCannon("top",200,1)
    createCannon("left",235,1500)
createCannon("right",227,1500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
