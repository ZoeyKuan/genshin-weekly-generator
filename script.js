// start of index's js
let charaList = ["Albedo", "Aloy", "Amber", "Ayaka", "Ayato", "Barbara", "Beidou", "Bennett", "Baizhu", "Candace", "Childe", "Chongyun", "Collei", "Cyno", "Charlotte", "Chevreuse", "Diluc", "Diona", "Dori", "Dehya", "Eula", "Faruzan", "Fischl", "Furina", "Ganyu", "Gorou", "Heizou", "Hu Tao", "Itto", "Jean", "Kaeya", "Kazuha", "Keqing", "Klee", "Kiara", "Kaveh", "Kokomi", "Kuki Shinobu", "Layla", "Lisa", "Mika", "Mona", "Navia", "Nahida", "Nilou", "Ningguang", "Noelle", "Qiqi", "Raiden", "Razor", "Rosaria", "Sara", "Sayu", "Shenhe", "Sucrose", "Thoma", "Tighnari", "Traveller", "Venti", "Wanderer", "Wriothesley", "Xiangling", "Xiao", "Xingqiu", "Xinyan", "Xianyun", "Yae Miko", "Yanfei", "Yelan", "Yoimiya", "Yun Jin", "Yao Yao", "Gaming", "Zhongli"];

let bossList = ["Guardian of Apep's Oasis", "Azhdaha", "Magatsu Mitake Narukami no Mikoto", "Childe", "Everlasting Lord of Arcane Wisdom", "La Signora", "Andrius", "All-Devouring Narwhal"];

let debuffList = ["No Burst", "No Artifacts", "No Food", "3 Star weapon", "Can't use e skill", "Double debuff"];

let cryoList = ["Aloy", "Ayaka", "Eula", "Ganyu", "Qiqi", "Shenhe", "Wriothesley", "Charlotte", "Chongyun", "Diona", "Freminet", "Kaeya", "Layla", "Mika", "Rosaria"];

let html;

document.querySelector("#characterCounter").innerHTML = "Characters left: " + charaList.length;
document.querySelector("#bossCounter").innerHTML = "Bosses left: " + bossList.length;
document.querySelector("#cryoCounter").innerHTML = "Cryos left: " + cryoList.length;

// saving current round's items
let currentRoundItems = {}; // round count will be the key

let generatedItemsList = [];
// let chara1A = ""; let chara2A = ""; let chara1B = ""; let chara2B = ""; let boss = ""; 
// let debuffItem1; let debuffItem2; let cryo1; let cryo2; let dice;
// end of saving current round's items

let roundCount = 1;

function removeResultDisplay() {
 document.querySelector(".unused").style.display = "none";
}

function updateCounters() {
 document.getElementById("characterCounter").innerHTML = "Characters left: " + charaList.length;
 document.getElementById("bossCounter").innerHTML = "Bosses left: " + bossList.length;
 document.getElementById("cryoCounter").innerHTML = "Cryo left: " + cryoList.length;
}

function displayRoundCount() {
 document.getElementById("roundCounterbtn").style.display = "inline";
 yes = `Clear and proceed to next round`;
 document.getElementById("roundCounterbtn").innerHTML = yes;
 idk = `<p>Round ${roundCount} of Genshin weekly</p>`;
 document.querySelector("#roundCountDisplay").innerHTML = idk;
}

function displayTeamA() {
 chara1A = charaList[Math.floor(Math.random() * charaList.length)];
 chara2A = charaList[Math.floor(Math.random() * charaList.length)];
 html = `<p>Team A: ${chara1A} & ${chara2A}</p>`;

 // to make the content visible after 'deletion'
 document.querySelector(".unused").style.display = "block";

 document.querySelector('#teamA').innerHTML = html;
 charaList.splice(chara1A, 1); charaList.splice(chara2A, 1);
 // unhiding the quotation marks at the same time as generating the teams
 document.getElementById("picdisplay").style.display = "inline";
 document.getElementById("picdisplay1").style.display = "inline";

 displayRoundCount();
 updateCounters();
}

function displayTeamB() {
 chara1B = charaList[Math.floor(Math.random() * charaList.length)];
 chara2B = charaList[Math.floor(Math.random() * charaList.length)];

 wow = `<p>Team B: ${chara1B} & ${chara2B}</p>`;
 document.getElementById("teamdisplay").className = "unused";
 document.querySelector(".unused").style.display = "block";

 document.querySelector('#teamB').innerHTML = wow;
 charaList.splice(chara1B, 1); charaList.splice(chara2B, 1);
 document.getElementById("picdisplay").style.display = "inline";
 document.getElementById("picdisplay1").style.display = "inline";

 displayRoundCount();
 updateCounters();
}

function genBoss() {

 boss = bossList[Math.floor(Math.random() * bossList.length)];
 howtoKill = [
  'Punch', 'F***', 'Kill', 'Dropkick', 'Abusing', 'Fight'
 ];
 html = `<p>${howtoKill[Math.floor(Math.random() * howtoKill.length)]} ${boss}</p>`;

 // to make the content visible after 'deletion'
 document.getElementById("teamdisplay").className = "unused";
 document.querySelector(".unused").style.display = "block";

 document.querySelector('#boss').innerHTML = html;
 bossList.splice(boss, 1);
 document.getElementById("picdisplay").style.display = "inline";
 document.getElementById("picdisplay1").style.display = "inline";

 displayRoundCount();
 updateCounters();
}

function genDebuff() {

 debuffItem1 = debuffList[Math.floor(Math.random() * debuffList.length)];
 debuffItem2 = debuffList[Math.floor(Math.random() * debuffList.length)];
 html = `<p>Debuff for member 1: ${debuffItem1}<br>
    Debuff for member 2: ${debuffItem2}</p>`;

 // to make the content visible after 'deletion'
 document.getElementById("teamdisplay").className = "unused";
 document.querySelector(".unused").style.display = "block";

 document.querySelector('#debuff').innerHTML = html;
 debuffList.splice(debuffItem1, 1); debuffList.splice(debuffItem2, 1);
 document.getElementById("picdisplay").style.display = "inline";
 document.getElementById("picdisplay1").style.display = "inline";

 displayRoundCount();
 updateCounters();
}

function genCryo() {

 cryo1 = cryoList[Math.floor(Math.random() * cryoList.length)];
 cryo2 = cryoList[Math.floor(Math.random() * cryoList.length)];
 html = `<p>Cryo for member 1: ${cryo1}.<br>Cryo for member 2: ${cryo2}.</p>`;

 // to make the content visible after 'deletion'
 document.getElementById("teamdisplay").className = "unused";
 document.querySelector(".unused").style.display = "block";

 document.querySelector('#cryo').innerHTML = html;
 cryoList.splice(cryo1, 1); cryoList.splice(cryo2, 1);
 document.getElementById("picdisplay").style.display = "inline";
 document.getElementById("picdisplay1").style.display = "inline";

 displayRoundCount();
 updateCounters();
}

function genD20() { // for some reason dice roll's output like the '3' cannot be read
 dice = Math.floor(Math.random() * 21);
 html = `<p>You rolled ${dice}!!!!</p>`;

 document.getElementById("teamdisplay").className = "unused";
 document.querySelector(".unused").style.display = "block";

 document.querySelector('#d20').innerHTML = html;
 document.getElementById("picdisplay").style.display = "inline";
 document.getElementById("picdisplay1").style.display = "inline";

 displayRoundCount();
 updateCounters();
}

// this is the function and the button that clears, adds current gen items, and updates the round
function roundCounter() {
 // addToPrevGens();
 roundCount++;
 document.getElementById("roundCountDisplay").innerHTML =
  `<p>Round ${roundCount} of Genshin Weekly`;
 removeResultDisplay();
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