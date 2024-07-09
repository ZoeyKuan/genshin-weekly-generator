
  // LOAD ALL DATA BEFORE THE OTHER JAVASCRIPTS

  // getting the items from localstorage
  const huh = localStorage.getItem('myObject');
  let myObject = JSON.parse(huh);
  // console.log("local storage sht is "+ myObject[1]);
  let html = '';

  // reminder to set the null as ''
  // reminder to set localstorage's object as object holding array of many other objects
  const dummy = {
    1: {
        "teamACharas": ["Cyno", "Tighnari"],
        "teamBCharas": ["Qiqi", "Kaeya"],
        "boss": "Everlasting Lord of Arcane Wisdom",
        "debuff": ["Can't use e skill", "No Artifacts"],
        "cryos": ['', ''],
        "diceroll": 21,
    },
    2: {
      "teamACharas": ["Cyno", "Tighnari"],
      "teamBCharas": ["Qiqi", "Kaeya"],
      "boss": "Everlasting Lord of Arcane Wisdom",
      "debuff": ["Can't use e skill", "No Artifacts"],
      "cryos": ['', ''],
      "diceroll": 4,
  }
  };

  document.getElementById('dum').addEventListener('click', loadAllArrays);

  // loads all the arrays
  function loadAllArrays() {
    // for (var i in dummy){
    //   // load all the dictionaries
    //   console.log(i);
    // }
    for(i=1;i<3;i++){
      console.log(dummy[i]);
      // console.log(dummy[2]);
    }
  }

  // loads all the characters in team A
  function loadTeamA(randoList) {
    for (let i = 0; i < randoList; i++) {
      
    }
  }

  loadTeamA(dummy[1]["teamAcharas"]);

  // var yes = `Round <span id="round">${a}</span><br>
  //   Team A: <span id="teamA">${a}</span><br>
  //   Team B: <span id="teamB">${a}</span><br>
  //   Boss: <span id="boss">${a}</span><br>
  //   Debuff: <span id="debuffA">${a}</span> <span id="debuffB">${a}</span><br><br>`;

  // var teamA = "team A: " + myObject[1]["characters"][0] + ", " + myObject[1]["characters"][1];
  // document.querySelector('#displayingAllRounds').innerHTML = teamA;
  // localstorage.removeItem('myObject');