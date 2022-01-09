window.onload = function() {
    //heads
    var robothead = new Image();
    var robotheadnum = Math.floor(Math.random() * 6) + 1; // 6 num of images i have, change for more heads
    var robotheadname = "./images/head" + robotheadnum + ".png";
    robothead.src = robotheadname;

    robothead.onload = function() {
        buildrobot();
    }

    //eyes
    var roboteye = new Image();
    var roboteyenum = Math.floor(Math.random() * 2) + 1; // 2 num of images i have, change for more heads
    var roboteyename = "./images/eye" + roboteyenum + ".png";
    roboteye.src = roboteyename;

    roboteye.onload = function() {
        buildrobot();
    }

    //nose
    var robotnose = new Image();
    var robotnosenum = Math.floor(Math.random() * 6) + 1; // 6 num of images i have, change for more heads
    var robotnosename = "./images/nose" + robotnosenum + ".png";
    robotnose.src = robotnosename;

    robotnose.onload = function() {
        buildrobot();
    }

    //mouth
    var robotmouth = new Image();
    var robotmouthnum = Math.floor(Math.random() * 2) + 1; // 6 num of images i have, change for more heads
    var robotmouthname = "./images/mouth" + robotmouthnum + ".png";
    robotmouth.src = robotmouthname;

    robotmouth.onload = function() {
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
        //draw nose
        ctx.drawImage(robotnose, ((500 - robotnose.width) / 2), 150);
        //draw mouth
        ctx.drawImage(robotmouth, ((500 - robotmouth.width) / 2), 325);

    }
}