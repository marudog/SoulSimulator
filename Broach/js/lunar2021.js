var imgArray = new Array();
imgArray[0] = "img/lunar_img/PackageBox.png";             // 우화의 전율 선택권 패키지
imgArray[1] = "img/lunar_img/Akashic5.png";             // 비화의 아카식 선택권 [5성] Ⅰ
imgArray[2] = "img/lunar_img/HeroTagTransferAttack.png";      // 공격형 히어로 태그 선택권 Ⅰ 0.2
imgArray[3] = "img/lunar_img/HeroTagTransferDefense.png";     // 방어형 히어로 태그 선택권 Ⅰ 1.2
imgArray[4] = "img/lunar_img/HeroTagTransferACC.png";         // 액세서리 히어로 태그 선택권 I
imgArray[5] = "img/lunar_img/TeraBroachBox.png";              // 통합 테라 브로치 큐브 1
imgArray[6] = "img/lunar_img/EnergyConverter_10.png";                 // 에너지 컨버터 10개 패키지 1
imgArray[7] = "img/lunar_img/EnergyConverter_5.png";                 // 에너지 컨버터 5개 패키지 2
imgArray[8] = "img/lunar_img/EnergyConverter_3.png";                 // 에너지 컨버터 3개 패키지 3
imgArray[9] = "img/lunar_img/Spoid.png";                        // 랜덤 스포이드 3개 패키지
imgArray[10] = "img/lunar_img/HighAkashicRecordTransfer.png";  // 비화의 고급 아카식 레코드 전송기 5
imgArray[11] = "img/lunar_img/SLimitedARTransfer.png";         // 비화의 히든 아카식 레코드 전송기 5
imgArray[12] = "img/lunar_img/AkashicRecordTransfer.png";      // 비화의 아카식 레코드 전송기 14
imgArray[13] = "img/lunar_img/ATKBroachTransfer.png";          // 공격형 통합 브로치 전송기 13
imgArray[14] = "img/lunar_img/DEFBroachTransfer.png";         // 방어형 통합 브로치 전송기 13
imgArray[15] = "img/lunar_img/FunBroachTransfer.png";         // 기능형 통합 브로치 전송기 13
imgArray[16] = "img/lunar_img/TagTransferAttack.png";         // 고등급 공격형 태그 전송기 Ⅱ 13
imgArray[17] = "img/lunar_img/TagTransferDefense.png";        // 고등급 방어형 태그 전송기 Ⅱ 13
imgArray[18] = "img/lunar_img/TagTransferACC.png";            // 고등급 액세서리 태그 전송기 1 13

var getItem = [
    0,
    0,
    0, 0, 0,
    0,
    0, 0, 0,
    0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
];

var ItemPer = [
    10,
    2,
    2, 4, 4,
    30,
    10, 20, 30,
    38,
    55, 55, 105,
    105, 105, 105,
    105, 105, 110
];

var ItemPerC = [
    0,
    0,
    0,
    0, 0, 0,
    0,
    0, 0, 0,
    0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
];

var money = 0;
var rollC = 0;
var moneyN = 0;
var seed = 0;
var imgNum = 0;

for (i = 0; i < getItem.length; ++i) {
    document.getElementById("item_" + (i + 1)).innerHTML = getItem[i];
}

for (i = 1; i < ItemPerC.length; ++i) {
    ItemPerC[i] = ItemPerC[i - 1] + ItemPer[i - 1];
    // console.log("ItemPerC" + [i] + " : " + ItemPerC[i]);
}

document.getElementById("money").innerHTML = money;

function generateRandom(min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}

function showImage(roll) {
    money += roll * 900;

    switch (roll) {
        case 30:
            roll += 1;
            break;

        case 50:
            roll += 5;
            break;

        case 100:
            roll += 10;
            break;

        default:
            break;
    }


    seed = 0;
    imgNum = 0;
    rollC = 0;

    document.getElementById("resultImg").innerHTML = "";

    while (roll != 0) {
        seed = generateRandom(0, 1000);
        var itemper = 0

        for (i = 0; i < getItem.length; ++i) {
            if (i != 0) {
                itemper = ItemPerC[i];
            }

            if (seed >= itemper && seed < ItemPerC[i + 1]) {
                imgNum = i;
                break;
            }
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
    document.getElementById("money").innerHTML = money;
}
