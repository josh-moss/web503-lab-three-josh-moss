// function setup allows us to set up our canvas.
function setup() {
// createCanvas allows us to setup our drawing board and give it a size.
    createCanvas(710, 400);
    noStroke();
// noStroke() removes the outline on the shape.
}

function draw() {
// function draw allows us to start rendering our content we want on our webpage.
    background(255);
// background allows us to set our desired colour for our canvas. In this case it is white.
    translate(200, 200);
// translate specify's the area you want the obejct.
    rotate(35, 0);
// rotate angle
    quad(76, 62, 172, 40, 138, 126, 60, 152);
// quad allows us to create a quad shape.
    fill(0, 0, 225);
        // fill = Red, Green, Blue.
// fill allows us to fill the colour with a specifc RGB input.

}

/* a little prblem i had to over come doing this task was making sure most of the functions 
that were changing the aspects of the shapes needed to be ran before the shape was drawn 
otherwise it threw a error and didnt show the shape. */