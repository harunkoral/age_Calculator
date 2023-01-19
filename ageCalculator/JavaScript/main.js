var adet = prompt("Kaç isim girilecek")
var GirilenAd = []
var GirYas = []

for(let i = 0;i <= adet;i++){
  if(i < adet){
    var isim = prompt("İsim gir ")
    GirilenAd.push(isim) 
    }   
    if( isim === ''){
      console.log("İsim girmediniz")
      break
    }   
}

for(let j = 0; j <= adet;j++){
  if(j < adet){
    var yas = prompt("Yaş gir ")
    GirYas.push(yas)
  }
}

for(let x = 0; x < adet;x++){
  var es = GirilenAd[x]
  var se = GirYas[x]
  console.log(`${es} yaşı ${se}`)
}

GirYas.sort(function(a,b){return a - b})



console.log("En küçük Yas = ",GirYas[0])
console.log("En büyük yaş =",GirYas[GirYas.length-1])
console.log(GirilenAd)