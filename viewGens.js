const data = JSON.parse(localStorage.getItem('prevRounds'));
let loaded = () => {
 let str = '';
 for (e=0; e<data.length; e++){
  round = e+1;
  str += '<div class="notes"><p>Round '+ round.toString() + '</br>' + data[e] + '</p></div>';
  console.log(str)
 }
 return str;
};

const all = document.getElementById('displayingAllRounds');
all.innerHTML = loaded();