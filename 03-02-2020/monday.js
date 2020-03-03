
function getRandomNum(){
    return Math.ceil(Math.random() * Math.ceil(6));
}



function switchPictures() {
    var pictureToSwitch = document.getElementById("pictureOne");
    var pictureToSwitch2 = document.getElementById("pictureTwo");
    var x = getRandomNum();
    var y = getRandomNum();
    console.log("in switch picture function");
    //console.log("RandomNumber = " + getRandomNum());
    if(x == 1) {
        pictureToSwitch.src = "one.png";
    } else if(x == 2) {
        pictureToSwitch.src = "two.png";
    } else if(x == 3) {
        pictureToSwitch.src = "three.png";
    } else if(x == 4) {
        pictureToSwitch.src = "four.png";
    } else if(x == 5) {
        pictureToSwitch.src = "five.png";
    } else if(x == 6) {
        pictureToSwitch.src = "six.png";
    }

    if(y == 1) {
        pictureToSwitch2.src = "one.png";
    } else if(y == 2) {
        pictureToSwitch2.src = "two.png";
    } else if(y == 3) {
        pictureToSwitch2.src = "three.png";
    } else if(y == 4) {
        pictureToSwitch2.src = "four.png";
    } else if(y == 5) {
        pictureToSwitch2.src = "five.png";
    } else if(y == 6) {
        pictureToSwitch2.src = "six.png";
    }
}