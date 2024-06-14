
  // LOAD ALL DATA BEFORE THE OTHER JAVASCRIPTS

  // getting the items from localstorage
  var huh = localStorage.getItem('myObject');
  var myObject = JSON.parse(huh);
  console.log("local storage sht is "+ myObject[1]);
  var html = '';

  dummy = {
    1: {
        "teamACharas": ["Cyno", "Tighnari"],
        "teamBCharas": ["Qiqi", "Kaeya"],
        "boss": "Everlasting Lord of Arcane Wisdom",
        "debuff": ["Can't use e skill", "No Artifacts"],
        "cryos": [null, null],
        "diceroll": dice,
    }
  };

  // loads all the arrays
  function loadAllArrays() {
    for (i in dummy.length){
      // load all the dictionaries
    }
  }

  // loads all the characters in team A
  function loadTeamA(randoList) {
    for (let i = 0; i < randoList; i++) {
      
    }
  }

  loadTeamA(dummy[1]["teamAcharas"]);

  function dummyfun() {
    for (let i = 0; i < dummyData[1]["characters"].length; i++) {
      console.log(i);
      console.log(dummyData[1]["characters"][i]);
    }
    // for (let i = 0; i < dummyData[1].length; i++) {
    //   console.log(i);
    //   console.log(dummyData[1][i]);
    // };
  }

  var yes = `Round <span id="round">${a}</span><br>
    Team A: <span id="teamA">${a}</span><br>
    Team B: <span id="teamB">${a}</span><br>
    Boss: <span id="boss">${a}</span><br>
    Debuff: <span id="debuffA">${a}</span> <span id="debuffB">${a}</span><br><br>`;

  // var teamA = "team A: " + myObject[1]["characters"][0] + ", " + myObject[1]["characters"][1];
  // document.querySelector('#displayingAllRounds').innerHTML = teamA;
  // localstorage.removeItem('myObject');