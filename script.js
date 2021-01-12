document.addEventListener("DOMContentLoaded", function () {
    var imgHeight = 300;
    var imgWidth = 300;
    var img = document.getElementById("demo");
    img.style.display = "none";
    var imgPos = getRandomPosition();
    mySound = document.getElementById("audio")
    mySound.style.display = "none";
    mySound.loop = true;
    mySound.volume = 0.1;
    mySound.playbackRate = 2.0;
    longestDis = calculateEuDis([0,0],[window.innerWidth,window.innerHeight]) 
    mySound.play();
    mySound.playback
    notFoundImg = true;
    window.addEventListener('mousemove', function (e) {
        var mousPos = [e.x, e.y]
        mySound.volume = 1- calculateEuDis(mousPos,imgPos)/longestDis;
        // console.log('x :' + e.x + ' ' + 'y:' + e.y);
        if (isHoverOverImg(mousPos, imgPos) && notFoundImg) {
           
            notFoundImg = false;
            img.style.display = "block";
            console.log("find")
            mySound.loop = false;
            mySound.playbackRate = 1.0;
            mySound.play();
            setTimeout(() => { mySound.play(); }, 1000);
        }
    });



    console.log(imgPos)

    function calculateEuDis(pos1,pos2){
        return (Math.sqrt( Math.pow(pos1[0] - pos2[0],2) + Math.pow(pos1[1] - pos2[1],2) ))
    }

    function getRandomPosition() {
        var x = window.innerHeight - imgHeight;
        var y = window.innerWidth - imgWidth;
        console.log({ x, y })
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        console.log({ randomX, randomY })
        return [randomX, randomY];
    }
    function isHoverOverImg(mousPos, imgPos) {
        if (mousPos[0] >= imgPos[0] & mousPos[0] <= imgPos[0] + imgHeight) {
            if (mousPos[1] >= imgPos[1] & mousPos[1] <= imgPos[1] + imgWidth) {
                return true;
            }
        }
        return false;
    }

    document.getElementById("demo").style.top = imgPos[1] + "px";
    document.getElementById("demo").style.left = imgPos[0] + "px";







});

