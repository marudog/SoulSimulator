var imgArray = new Array();
imgArray[0] = "img/Chuseok_img/Ticket.png";             // 형상선택권 0.5
imgArray[1] = "img/Chuseok_img/HeroTagTransferAttack.png";      // 공격형 히어로 태그 선택권 Ⅰ 0.2
imgArray[2] = "img/Chuseok_img/HeroTagTransferDefense.png";     // 방어형 히어로 태그 선택권 Ⅰ 1.2
imgArray[3] = "img/Chuseok_img/HeroTagTransferACC.png";         // 액세서리 히어로 태그 선택권 I
imgArray[4] = "img/Chuseok_img/TeraBroachBox.png";              // 통합 테라 브로치 큐브 1
imgArray[5] = "img/Chuseok_img/EnergyConverter_10.png";                 // 에너지 컨버터 10개 패키지 1
imgArray[6] = "img/Chuseok_img/EnergyConverter_5.png";                 // 에너지 컨버터 5개 패키지 2
imgArray[7] = "img/Chuseok_img/EnergyConverter_3.png";                 // 에너지 컨버터 3개 패키지 3
imgArray[8] = "img/Chuseok_img/QBD.png";                        // 강화 파괴 방지 장치
imgArray[9] = "img/Chuseok_img/HighAkashicRecordTransfer.png";  // 비화의 고급 아카식 레코드 전송기 5
imgArray[10] = "img/Chuseok_img/SLimitedARTransfer.png";         // 비화의 히든 아카식 레코드 전송기 5
imgArray[11] = "img/Chuseok_img/AkashicRecordTransfer.png";      // 비화의 아카식 레코드 전송기 14
imgArray[12] = "img/Chuseok_img/ATKBroachTransfer.png";          // 공격형 통합 브로치 전송기 13
imgArray[13] = "img/Chuseok_img/DEFBroachTransfer.png";         // 방어형 통합 브로치 전송기 13
imgArray[14] = "img/Chuseok_img/FunBroachTransfer.png";         // 기능형 통합 브로치 전송기 13
imgArray[15] = "img/Chuseok_img/TagTransferAttack.png";         // 공격형 태그 전송기 13
imgArray[16] = "img/Chuseok_img/TagTransferDefense.png";        // 방어형 태그 전송기 13
imgArray[17] = "img/Chuseok_img/TagTransferACC.png";            // 고등급 액세서리 태그 전송기 13

var getItem = [
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
    1, 4, 4,
    30,
    10, 20, 30,
    46,
    55, 55, 105,
    105, 105, 105,
    105, 105, 105
];

var ItemPerC = [
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

for (i = 1; i < ItemPerC.length; ++i)
{
    ItemPerC[i]  = ItemPerC[i - 1] + ItemPer[i - 1] ;
    // console.log("ItemPerC" + [i] + " : " + ItemPerC[i]);
}

document.getElementById("money").innerHTML = money;

function generateRandom(min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}

function showImage(roll) {
    money += roll * 900 ;
    seed = 0;
    imgNum = 0;
    rollC = 0;

    document.getElementById("resultImg").innerHTML = "";

    while (roll != 0) {
        seed = generateRandom(0, 1000);
        var itemper = 0

        for (i = 0; i < getItem.length ; ++i)
        {
            if (i != 0)
            {
                itemper = ItemPerC[i] ;
            }

            if (seed >= itemper && seed < ItemPerC[i + 1])
            {
                imgNum = i ;
                break ;
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
