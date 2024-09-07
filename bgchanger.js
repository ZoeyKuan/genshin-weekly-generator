const b = document.querySelector('body');
let i = 0;
let changer = ()=>{
 let bgImages = [
  'icons/bg.png',
  'https://steamuserimages-a.akamaihd.net/ugc/1673610360171378633/F063BB13044020A4439E53CBC665EA6EB9A72654/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
  'icons/archons.png',
  'icons/goob.png',
  'icons/alb.png',
 ];
 b.style.backgroundImage = 'url("' + bgImages[i]+'")';
 console.log('changed bg', i)
 if (i == bgImages.length - 1) return i=0;
 i++;
};
var idk = setInterval(changer, 60000);
//60000