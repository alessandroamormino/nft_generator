window.onload = function() {
    //heads
    var robothead = new Image();
    var robotheadnum = Math.floor(Math.random() * 6) + 1; // 6 num of images i have, change for more heads
    var robotheadname = "head" + robotheadnum + ".png";
    robothead.src = robotheadname;

    robothead.onload = function() {
        buildrobot();
    }

    //eyes
    var roboteye = new Image();
    var roboteyenum = Math.floor(Math.random() * 2) + 1; // 2 num of images i have, change for more heads
    var roboteyename = "eye" + roboteyenum + ".png";
    roboteye.src = roboteyename;

    roboteye.onload = function() {
        buildrobot();
    }

    function buildrobot() {
        //create a canvas for drawing the image
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = 500;
        canvas.height = 500;

        //draw head
        ctx.drawImage(robothead, ((500 - robothead.width) / 2), 50);
        //draw eyes
        ctx.drawImage(roboteye, ((500 - roboteye.width) / 2), 25);

    }
}