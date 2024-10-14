var kelime = "deneme kelimesi"
var kelimeDizisi = kelime.split("");
var kelimeKutusu = document.getElementById("kelimeKutusu");
let a = 0;
let kontrol = 0;
var dogruSesi = new Audio("sesler/dogru.mp3");
var yanlisSesi = new Audio("sesler/yanlis.mp3");
var kazandinSesi = new Audio("sesler/kazandin.mp3");
var kaybettinSesi = new Audio("sesler/kaybettin.mp3");


function tikla (tiklanan_id){
    for(let i = 0; i < kelimeUzunlugu; i++){
        
        if(kelimeDizisi[i] == String(tiklanan_id)){
            dogruSesi.play();
            kelimeKutusu.children[i].innerHTML = kelimeDizisi[i].toUpperCase();
            document.getElementById(tiklanan_id).style.background = "rgb(28, 233, 28)";
            document.getElementById(tiklanan_id).disabled = true;
            kontrol++;
            if(kontrol == kelime.length){
                document.getElementById("sol").innerHTML = '<h1 class"deneme">KAZANDIN</h1> <br> <button class="yenidenDene>Yeniden Oyna</button>' 
                kazandinSesi.play();
                document.getElementById("klavye").innerHTML = '<button class="yenidenDene" id="yenidenDene" onclick="yenidenDene()">YENİDEN OYNA</button>'
            }  
        }
        
    }
 var index = kelime.indexOf(tiklanan_id);
if(index == -1){
    
   document.getElementById(tiklanan_id).disabled = true;
   
   if(a == 0){
    yanlisSesi.play();
    document.getElementById("adam").innerHTML = '<img src="resimler/hangman-1.svg" alt=""></img> '
   }
   else if (a ==1){
    yanlisSesi.play();
    document.getElementById("adam").innerHTML = '<img src="resimler/hangman-2.svg" alt=""></img>'
   }
   else if (a ==2){
    yanlisSesi.play();
    document.getElementById("adam").innerHTML = '<img src="resimler/hangman-3.svg" alt=""></img>'
   }
   else if(a == 3){
    yanlisSesi.play();
    document.getElementById("adam").innerHTML = '<img src="resimler/hangman-4.svg" alt=""></img>'
   }
   else if(a == 4){
    yanlisSesi.play();
    document.getElementById("adam").innerHTML = '<img src="resimler/hangman-5.svg" alt=""></img>'
   }
   else if(a == 5){
    yanlisSesi.play();
    document.getElementById("adam").innerHTML = '<img src="resimler/hangman-6.svg" alt=""></img>'
   }
   else{
    document.getElementById("sol").innerHTML = '<h1 class="winOrLose">KAYBETTIN</h1> <br> <img src="resimler/lost.gif" alt="" class="kayipKazanmaEkrani"></img> <button class="yenidenDene>Yeniden Oyna</button>' 
    kaybettinSesi.play();
    for(let i = 0; i < kelimeUzunlugu; i++){
        kelimeKutusu.children[i].innerHTML = kelimeDizisi[i].toUpperCase();
        
    }
    document.getElementsByClassName("klavyeTuslari").disabled = true;
    document.getElementById("klavye").innerHTML = '<button class="yenidenDene" id="yenidenDene" onclick="yenidenDene()">YENİDEN DENE</button>'
   }
  
   a++;
 }


}

let kelimeUzunlugu = kelime.length;
for(let a = 0; a< kelimeUzunlugu; a++){
    if(kelime[a] == " "){
        const kelimeCizgisi = document.createElement("div");
        kelimeCizgisi.classList.add("bosluk");
        kelimeKutusu.appendChild(kelimeCizgisi);
        kontrol++;
    }
    else{
        const kelimeCizgisi = document.createElement("div");
        kelimeCizgisi.classList.add("cizgi");
        kelimeKutusu.appendChild(kelimeCizgisi);
        kelimeCizgisi.innerHTML = "_"
}
}

function yenidenDene(){
    window.location.reload()
}


