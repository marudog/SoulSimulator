var imgArray5N = new Array();
imgArray5N[0] = "img/Black_img/Lucy.png";
imgArray5N[1] = "img/Black_img/Tenebris.png";
imgArray5N[2] = "img/Black_img/Beneris.png";
imgArray5N[3] = "img/Black_img/Arua.png";
imgArray5N[4] = "img/Black_img/Lerfenne.png";
imgArray5N[5] = "img/Black_img/GoldLawscar.png";
imgArray5N[6] = "img/Black_img/LunarNox.png";
imgArray5N[7] = "img/Black_img/Poison.png";
imgArray5N[8] = "img/Black_img/Kent.png";
imgArray5N[9] = "img/Black_img/GlutonArmy.png";
imgArray5N[10] = "img/Black_img/BigPuppet.png";
imgArray5N[11] = "img/Black_img/Apocalypse.png";
imgArray5N[12] = "img/Black_img/Eternity.png";
imgArray5N[13] = "img/Black_img/Juggernaut.png";
imgArray5N[14] = "img/Black_img/Pandemonia.png";
imgArray5N[15] = "img/Black_img/Ultimatum.png";
imgArray5N[16] = "img/Black_img/Mirium.png";

var getItem = [
    0, 0, 0, 0,
    0, 0];

var get = false;
var count = 0;
var money = 0;
var point = 0;
var rollR = 0;

function generateRandom(min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}

function preloading(imageArray) {
    let n = imageArray.length;

    for (let i = 0; i < n; i++) {
        let img = new Image();
        img.src = imageArray[i];
    }
}

preloading(imgArray5N);

function showImage(roll) {
    var imgNum = 0;
    var getImgNum = 0;
    var star = 0;
    var hidden = false;
    var len5 = imgArray5N.length - 1;

    document.getElementById("resultImg").innerHTML = "";

    var cnt = 2;

    while (cnt != 0) {

        switch (roll) {
            case 1:
                imgNum = generateRandom(0, 8);
                break;

            case 2:
                imgNum = generateRandom(9, len5);
                break;

            default:
                return;
        }

        document.getElementById("resultImg").innerHTML += '&nbsp&nbsp<img src="' + imgArray5N[imgNum] + '">&nbsp&nbsp';

        // console.log(star + " " + imgNum);

        --cnt ;
    }

    // console.log(point);
}
