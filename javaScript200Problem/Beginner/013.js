for (var i =0; i < 10; i++){
    console.log(i + '번째 반복 문장 입니다.');
}

var city = ['고양', "과천", "광주", "부산"];

for (var j = 0; j< city.length; j++){
    if (!city[j]) continue;
    console.log(j + "번째 실행입니다.");
    if (city[j] === "과천"){
        console.log("저의 고향" + city[j]);
        break;
    }
}

for (var item in city){
    console.log("도시 이름 : " + city[item]);
}