// function setup allows us to create our canvas.

function setup() {
// create canvas ( size ) - webgl renders 3d objects.
    createCanvas(710, 400, WEBGL);
  };

  // function draw() allows to draw our shapes and edit the contest of the canvas.
function draw() {
    background(250);
//backgound allows us to change the colour of the canvas's background.
translate(100, 0, 0);
//translate allows us to move the drawn object aroud the canvas using chords.
    normalMaterial();
//normalMaterial is not affected by light and it is often used as a placeholder for debugging.
    cylinder(20, 100);
// cylinder allows us to create a cylinder shape.
translate(-200, 0, 0);
    ellipsoid(50, 20, 20);
// a ellipsoid allows us to create a ellipsoid shape.
};

/* another cool functionallity you could add to these shapes to show their true 3d nature 
would be to add rotate(angle) then "frameCount" plus the speed you want it to rotate at you
could also use millis() (milliseconds).

for example...

rotateZ(frameCount * 0.01); would rotate the Z axis.

this funcation only works in WEBGL with 3d objects.
*/
