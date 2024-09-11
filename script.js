// start of index's js
let charaList = ["Albedo", "Aloy", "Amber", "Ayaka", "Ayato", "Barbara", "Beidou", "Bennett", "Baizhu", "Candace", "Childe", "Chongyun", "Collei", "Cyno", "Charlotte", "Chevreuse", "Diluc", "Diona", "Dori", "Dehya", "Eula", "Faruzan", "Fischl", "Furina", "Ganyu", "Gorou", "Heizou", "Hu Tao", "Itto", "Jean", "Kaeya", "Kazuha", "Keqing", "Klee", "Kiara", "Kaveh", "Kokomi", "Kuki Shinobu", "Layla", "Lisa", "Mika", "Mona", "Navia", "Nahida", "Nilou", "Ningguang", "Noelle", "Qiqi", "Raiden", "Razor", "Rosaria", "Sara", "Sayu", "Shenhe", "Sucrose", "Thoma", "Tighnari", "Traveller", "Venti", "Wanderer", "Wriothesley", "Xiangling", "Xiao", "Xingqiu", "Xinyan", "Xianyun", "Yae Miko", "Yanfei", "Yelan", "Yoimiya", "Yun Jin", "Yao Yao", "Gaming", "Zhongli"];

let bossList = ["Guardian of Apep's Oasis", "Azhdaha", "Magatsu Mitake Narukami no Mikoto", "Childe", "Everlasting Lord of Arcane Wisdom", "La Signora", "Andrius", "All-Devouring Narwhal"];

let debuffList = ["No Burst", "No Artifacts", "No Food", "3 Star weapon", "Can't use e skill", "Double debuff"];

let cryoList = ["Aloy", "Ayaka", "Eula", "Ganyu", "Qiqi", "Shenhe", "Wriothesley", "Charlotte", "Chongyun", "Diona", "Freminet", "Kaeya", "Layla", "Mika", "Rosaria"];
// export{charaList, bossList, debuffList, cryoList};

// saving current round's items
const quotation = document.getElementsByClassName('picdisplay');
let html = '';
let currentRoundItems = []; // round count will be the key
let roundCount = 1;
let genItemsList = [];
// end of saving current round's items

const alrdyGenerated = ()=>{
 const data = JSON.parse(localStorage.getItem('alrdyGenerated'));
 const prev = JSON.parse(localStorage.getItem('prevRounds'));
 console.log('huh?', prev)
 if (data != undefined) {
  charaList = data.chara;
  bossList = data.boss;
  debuffList = data.debuff;
  cryoList = data.cryo;
  currentRoundItems = prev;
  roundCount = prev.length + 1;
  updateCounters();
 } else return 'No previous generations';
 return data;
};
alrdyGenerated();

const randoChara = (listtt) => {
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
document.addEventListener('DOMContentLoaded', updateCounters);
function genPossib(label, listName, reps) {
 var content = '';
 for (i = 0; i < reps; i++) {
  // label would be like 'Team A: '
  if (reps > 1) {
   content += randoChara(listName) + ' & ';
   if (i == reps - 1) { content = content.slice(0, content.length - 3); }
  } else { content = randoChara(listName); }
 }
 let conv = Array.from(label);
 let id = conv.splice(label.indexOf(' '), 1, '-');
 var h = '<p class="'+ id +'">'+ label + content + '</p>';
 genItemsList.push(h);
 displayGenshinWeekly();
}

function displayGenshinWeekly() {
 console.log(genItemsList);
 var longstr = '';
 for (e = 0; e < genItemsList.length; e++) { longstr += genItemsList[e]; }
 document.querySelector(".unused").style.display = "block";
 document.querySelector('#jenshin-weekly').innerHTML = longstr;
 html = longstr;
 quotation[0].style.display = "inline";
 quotation[1].style.display = "inline";
 idk = `<p>Round ${roundCount} of Genshin weekly</p>`;
 document.querySelector("#roundCountDisplay").innerHTML = idk;
 updateCounters();
}

// clears + updates round + stores current round
function roundCounter() {
 genItemsList = [];
 currentRoundItems.push(html);
 localStorage.setItem('prevRounds', JSON.stringify(currentRoundItems));
 html = '';
 let savingCurrentCounters = {
  chara: charaList,
  boss: bossList,
  debuff: debuffList,
  cryo: cryoList
 };
 localStorage['alrdyGenerated'] = JSON.stringify(savingCurrentCounters);
 document.querySelector(".unused").style.display = "none";
 roundCount++;
 document.getElementById("roundCountDisplay").innerHTML =
  `<p>Round ${roundCount} of Genshin Weekly`;
}

if (bossList.length < 1) {
 window.location.href = 'viewGens.html';
 alert('You have reached the end of Genshin Weekly. ')
}

document.addEventListener('click', ()=>{
 if (roundCount > 8) {
  window.location.href = 'viewGens.html';
  alert('You have reached the end of Genshin Weekly. ')
 }
})
