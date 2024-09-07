const b = document.querySelector('body');
let i = 0;
const changer = ()=>{
 i++;
 let bgImages = [
  'url("icons/bg.png")',
  'https://steamuserimages-a.akamaihd.net/ugc/1673610360171378633/F063BB13044020A4439E53CBC665EA6EB9A72654/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
  'url("icons/archons.png")',
 ];
 b.style.backgroundImage = bgImages[i];
};
setInterval(changer(), 60000);