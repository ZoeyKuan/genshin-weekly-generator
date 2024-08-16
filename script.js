// start of index's js
let charaList = ["Albedo", "Aloy", "Amber", "Ayaka", "Ayato", "Barbara", "Beidou", "Bennett", "Baizhu", "Candace", "Childe", "Chongyun", "Collei", "Cyno", "Charlotte", "Chevreuse", "Diluc", "Diona", "Dori", "Dehya", "Eula", "Faruzan", "Fischl", "Furina", "Ganyu", "Gorou", "Heizou", "Hu Tao", "Itto", "Jean", "Kaeya", "Kazuha", "Keqing", "Klee", "Kiara", "Kaveh", "Kokomi", "Kuki Shinobu", "Layla", "Lisa", "Mika", "Mona", "Navia", "Nahida", "Nilou", "Ningguang", "Noelle", "Qiqi", "Raiden", "Razor", "Rosaria", "Sara", "Sayu", "Shenhe", "Sucrose", "Thoma", "Tighnari", "Traveller", "Venti", "Wanderer", "Wriothesley", "Xiangling", "Xiao", "Xingqiu", "Xinyan", "Xianyun", "Yae Miko", "Yanfei", "Yelan", "Yoimiya", "Yun Jin", "Yao Yao", "Gaming", "Zhongli"];

let bossList = ["Guardian of Apep's Oasis", "Azhdaha", "Magatsu Mitake Narukami no Mikoto", "Childe", "Everlasting Lord of Arcane Wisdom", "La Signora", "Andrius", "All-Devouring Narwhal"];

let debuffList = ["No Burst", "No Artifacts", "No Food", "3 Star weapon", "Can't use e skill", "Double debuff"];

let cryoList = ["Aloy", "Ayaka", "Eula", "Ganyu", "Qiqi", "Shenhe", "Wriothesley", "Charlotte", "Chongyun", "Diona", "Freminet", "Kaeya", "Layla", "Mika", "Rosaria"];

// saving current round's items
const quotation = document.getElementsByClassName('picdisplay');
let html = '';
let currentRoundItems = []; // round count will be the key
let roundCount = 1;
let genItemsList = [];
// end of saving current round's items

let randoChara = (listtt)=>{
 var rni = Math.floor(Math.random() * listtt.length);
 const randEl = listtt[rni];
 listtt.splice(rni, 1);
 return randEl;
};

function updateCounters() {
 document.getElementById("characterCounter").innerHTML = "Characters left: " + charaList.length;
 document.getElementById("bossCounter").innerHTML = "Bosses left: " + bossList.length;
 document.getElementById("cryoCounter").innerHTML = "Cryo left: " + cryoList.length;
}

function genPossib(label, listName, reps){
 var content = '';
 for (i=0;i<reps;i++){
  // label would be like 'Team A: '
  if (reps > 1){
   content += randoChara(listName) + ' & ';
   if (i == reps-1)
    { content = content.slice(0, content.length-3); }
  } else { content = randoChara(listName); }
 }
 var h = '<p>'+ label + content+'</p>';
 genItemsList.push(h);
 displayGenshinWeekly();
}

function displayGenshinWeekly() {
 console.log(genItemsList);
 var longstr = '';
 for (e=0; e<genItemsList.length;e++){
  longstr += genItemsList[e];
 }
 html = longstr;
 document.querySelector(".unused").style.display = "block";
 document.querySelector('#jenshin-weekly').innerHTML = longstr;
 quotation[0].style.display = "inline";
 quotation[1].style.display = "inline";
 idk = `<p>Round ${roundCount} of Genshin weekly</p>`;
 document.querySelector("#roundCountDisplay").innerHTML = idk;
 updateCounters();
}

// this is the function and the button that clears, adds current gen items, and updates the round
function roundCounter() {
 // addToPrevGens();
 roundCount++;
 document.getElementById("roundCountDisplay").innerHTML =
  `<p>Round ${roundCount} of Genshin Weekly`;
 document.querySelector(".unused").style.display = "none";
}

// function addToPrevGens(){
//     if (dice == null) {
//         currentRoundItems[roundCount] = {
//             "teamACharas": [chara1A, chara2A,],
//             "teamBCharas": [chara1B, chara2B],
//             "boss": boss,
//             "debuff": [debuffItem1, debuffItem2],
//             "cryos": [cryo1,cryo2]
//         };
//     } else {
//         currentRoundItems[roundCount] = {
//             "teamACharas": [chara1A, chara2A,],
//             "teamBCharas": [chara1B, chara2B],
//             "boss": boss,
//             "debuff": [debuffItem1, debuffItem2],
//             "cryos": [cryo1,cryo2],
//             "diceroll": dice,
//         };
//     }

//     // adding local storage here so that next page we can see the previous generations
//     var myObject = JSON.stringify(currentRoundItems);
//     localStorage.setItem('myObject', myObject);
//     // maybe add the round counter here? so that i can
//     // 1) continue the round count here
//     // 2) print out all object as many times as the total rounds
// }

//testing button
function ttest() {
 console.log(currentRoundItems);

 // getting the items from localstorage
 var huh = localStorage.getItem('myObject');
 var myObject = JSON.parse(huh);
 console.log("local storage sht is " + myObject[1]); // is undefined or object Object
 console.log(myObject[1]["characters"]); // for some reason able to recall these items if theres a key value
}

// start of viewGens.html's js