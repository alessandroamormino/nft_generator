window.onload = function() {
    //heads
    var robothead = new Image();
    var robotheadnum = Math.floor(Math.random() * 6) + 1; // 3 num of images i have, change for more heads
    var robotheadname = "head" + robotheadnum + ".png";
    robothead.src = robotheadname;

    robothead.onload = function() {
        buildrobot();
    }

    function buildrobot() {
        //create a canvas for drawing the image
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = 400;
        canvas.height = 400;

        //draw head
        ctx.drawImage(robothead, ((400 - robothead.width) / 2), 0);

    }
}