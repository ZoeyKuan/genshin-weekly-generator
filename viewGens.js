const data = JSON.parse(localStorage.getItem('prevRounds'));
let loaded = () => {
 let str = '';
 for (e=0; e<data.length; e++){
  round = e+1;
  str += '<p>Round '+ round.toString() + '</p>' + data[e] + '</br>';
  console.log(str)
 }
 return str;
};

const all = document.getElementById('displayingAllRounds');
all.innerHTML = loaded();