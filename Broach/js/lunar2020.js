var imgArray = new Array();
imgArray[0] = "img/lunar_img/CostumePackage.png";             // 만금의 형상 0.5
imgArray[1] = "img/lunar_img/Akashic5.png";                   // 관측자의 아카식 선택권 [5성] 0.1
imgArray[2] = "img/lunar_img/HeroTagTransferAttack.png";      // 공격형 히어로 태그 선택권 Ⅰ 0.2
imgArray[3] = "img/lunar_img/HeroTagTransferDefense.png";     // 방어형 히어로 태그 선택권 Ⅰ 1.2
imgArray[4] = "img/lunar_img/TeraBroachBox.png";              // 통합 공격형 테라 브로치 큐브 1
imgArray[5] = "img/lunar_img/TeraBroachBox.png";              // 통합 방어형 테라 브로치 큐브 1
imgArray[6] = "img/lunar_img/TeraBroachBox.png";              // 통합 기능형 테라 브로치 큐브 1
imgArray[7] = "img/lunar_img/PackageBox.png";                 // 에너지 컨버터 3개 패키지 1
imgArray[8] = "img/lunar_img/PackageBox.png";                 // 에너지 컨버터 2개 패키지 2
imgArray[9] = "img/lunar_img/PackageBox.png";                 // 에너지 컨버터 1개 패키지 3
imgArray[10] = "img/lunar_img/AkashicRecordTransfer.png";      // 관측자의 아카식 레코드 전송기 14
imgArray[11] = "img/lunar_img/HighAkashicRecordTransfer.png";  // 관측자의 고급 아카식 레코드 전송기 5
imgArray[12] = "img/lunar_img/SLimitedARTransfer.png";         // 관측자의 히든 아카식 레코드 전송기 5
imgArray[13] = "img/lunar_img/ATKBroachTransfer.png";          // 공격형 통합 브로치 전송기 13
imgArray[14] = "img/lunar_img/DEFBroachTransfer.png";         // 방어형 통합 브로치 전송기 13
imgArray[15] = "img/lunar_img/FunBroachTransfer.png";         // 기능형 통합 브로치 전송기 13
imgArray[16] = "img/lunar_img/TagTransferAttack.png";         // 공격형 태그 전송기 13
imgArray[17] = "img/lunar_img/TagTransferDefense.png";        // 방어형 태그 전송기 13

var getItem = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0];

var money = 0;
var rollC = 0;
var moneyN = 0;
var seed = 0;
var imgNum = 0;

for (i = 0; i < getItem.length; ++i) {
    document.getElementById("item_" + (i + 1)).innerHTML = getItem[i];
}

document.getElementById("money").innerHTML = money;

function generateRandom(min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}

function showImage(roll) {
    moneyN = roll;
    seed = 0;
    imgNum = 0;
    rollC = 0 ;

    document.getElementById("resultImg").innerHTML = "";

    while (roll != 0) {
        seed = generateRandom(0, 1000);

        if (seed >= 0 && seed < 5) {
            imgNum = 0;
        }
        else if (seed < 6) {
            imgNum = 1;
        }
        else if (seed < 8) {
            imgNum = 2;
        }
        else if (seed < 20) {
            imgNum = 3;
        }
        else if (seed < 30) {
            imgNum = 4;
        }
        else if (seed < 40) {
            imgNum = 5;
        }
        else if (seed < 50) {
            imgNum = 6;
        }
        else if (seed < 60) {
            imgNum = 7;
        }
        else if (seed < 80) {
            imgNum = 8;
        }
        else if (seed < 110) {
            imgNum = 9;
        }
        else if (seed < 250) {
            imgNum = 10;
        }
        else if (seed < 300) {
            imgNum = 11;
        }
        else if (seed < 350) {
            imgNum = 12;
        }
        else if (seed < 480) {
            imgNum = 13;
        }
        else if (seed < 610) {
            imgNum = 14;
        }
        else if (seed < 740) {
            imgNum = 15;
        }
        else if (seed < 870) {
            imgNum = 16;
        }
        else if (seed < 1000) {
            imgNum = 17;
        }
        else {
            return;
        }

        getItem[imgNum] += 1;

        document.getElementById("resultImg").innerHTML += '&nbsp <img src="' + imgArray[imgNum] + '"> &nbsp';

        rollC += 1;

        if (rollC % 5 == 0) {
            document.getElementById("resultImg").innerHTML += '<br>';
        }

        roll -= 1;
    }

    for (i = 0, max = getItem.length; i < max; ++i) {
        document.getElementById("item_" + (i + 1)).innerHTML = getItem[i];
    }

    switch (moneyN) {
        case 1:
            money += 900;
            break;

        case 10:
            money += 9900;
            break;

        case 30:
            money += 25600;
            break;

        case 50:
            money += 40500;
            break;
    }

    document.getElementById("money").innerHTML = money;
}
