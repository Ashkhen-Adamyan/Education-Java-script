let teaVolume = 200;
console.log("вы налили себе" + teaVolume + "мл чая");

while (teaVolume > 0) {
  teaVolume -= 10;

  console.log("в чашке осталось" + teaVolume + "мл чая");
}
console.log("вы выпили весь чай");
