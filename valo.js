const agents = [
  { name: "Reyna", image: "agent images/Reyna_icon.webp", voiceline: "voicelines/reyna.mp3" },
  { name: "Raze", image: "agent images/Raze_icon.webp", voiceline: "voicelines/raze.mp3" },
  { name: "Omen", image: "agent images/Omen_icon.webp", voiceline: "voicelines/omen.mp3" },
  { name: "Sova", image: "agent images/Sova_icon.webp", voiceline: "voicelines/sova.mp3" },
  { name: "Chamber", image: "agent images/Chamber_icon.webp", voiceline: "voicelines/chamber.mp3" },
  { name: "Brimstone", image: "agent images/Brimstone_icon.webp", voiceline: "voicelines/brimstone.mp3" },
  { name: "Neon", image: "agent images/Neon_icon.webp", voiceline: "voicelines/neon.mp3" },
  { name: "Iso", image: "agent images/Iso_icon.webp", voiceline: "voicelines/iso.mp3" },
  { name: "KAYO", image: "agent images/KAYO_icon.webp", voiceline: "voicelines/kayo.mp3" },
  { name: "Astra", image: "agent images/Astra_icon.webp", voiceline: "voicelines/astra.mp3" },
  { name: "Killjoy", image: "agent images/Killjoy_icon.webp", voiceline: "voicelines/killjoy.mp3" },
  { name: "Cypher", image: "agent images/Cypher_icon.webp", voiceline: "voicelines/cypher.mp3" },
  { name: "Breach", image: "agent images/Breach_icon.webp", voiceline: "voicelines/breach.mp3" },
  { name: "Harbor", image: "agent images/Harbor_icon.webp", voiceline: "voicelines/harbor.mp3" },
  { name: "Viper", image: "agent images/Viper_icon.webp", voiceline: "voicelines/viper.mp3" },
  { name: "Sage", image: "agent images/Sage_icon.webp", voiceline: "voicelines/sage.mp3" },
  { name: "Yoru", image: "agent images/Yoru_icon.webp", voiceline: "voicelines/yoru.mp3" },
  { name: "Skye", image: "agent images/Skye_icon.webp", voiceline: "voicelines/skye.mp3" },
  { name: "Gekko", image: "agent images/Gekko_icon.webp", voiceline: "voicelines/gekko.mp3" },
  { name: "Phoenix", image: "agent images/Phoenix_icon.webp", voiceline: "voicelines/phoenix.mp3" },
  { name: "Deadlock", image: "agent images/Deadlock_icon.webp", voiceline: "voicelines/deadlock.mp3" },
  { name: "Jett", image: "agent images/Jett_icon.webp", voiceline: "voicelines/jett.mp3" },
  { name: "Fade", image: "agent images/Fade_icon.webp", voiceline: "voicelines/fade.mp3" },
];

window.addEventListener('DOMContentLoaded', () => {
  const mainDiv = document.querySelector('.main');
  agents.forEach((agent, idx) => {
    const agentDiv = document.createElement('div');
    agentDiv.className = `${agent.name.toLowerCase()} agent`;
    agentDiv.id = idx + 1;
    agentDiv.innerHTML = `<img src="${agent.image}">`;
    mainDiv.appendChild(agentDiv);
  });
});

const breach = document.querySelector('.breach');
breach.addEventListener('click', function(){
    const breachSound = new Audio('voicelines/breach.mp3');
    breachSound.play();
});

const chamber = document.querySelector('.chamber');
chamber.addEventListener('click', function(){
    const chamberSound = new Audio('voicelines/chamber.mp3');
    chamberSound.play();
});

const omen = document.querySelector('.omen');
omen.addEventListener('click', function(){
    const omenSound = new Audio('voicelines/omen.mp3');
    omenSound.play();
});

const brimstone = document.querySelector('.brimstone');
brimstone.addEventListener('click', function(){
    const brimstoneSound = new Audio('voicelines/brimstone.mp3');
    brimstoneSound.play();
});

const cypher = document.querySelector('.cypher');
cypher.addEventListener('click', function(){
    const cypherSound = new Audio('voicelines/cypher.mp3');
    cypherSound.play();
});

const harbor = document.querySelector('.harbor');
harbor.addEventListener('click', function(){
    const harborSound = new Audio('voicelines/harbor.mp3');
    harborSound.play();
});

const reyna = document.querySelector('.reyna');
reyna.addEventListener('click', function(){
    const reynaSound = new Audio('voicelines/reyna.mp3');
    reynaSound.play();
});

const sage = document.querySelector('.sage');
sage.addEventListener('click', function(){
    const sageSound = new Audio('voicelines/sage.mp3');
    sageSound.play();
});

const gekko = document.querySelector('.gekko');
gekko.addEventListener('click', function(){
    const gekkoSound = new Audio('voicelines/gekko.mp3');
    gekkoSound.play();
});

const phoenix = document.querySelector('.phoenix');
phoenix.addEventListener('click', function(){
    const phoenixSound = new Audio('voicelines/phoenix.mp3');
    phoenixSound.play();
});

const kayo = document.querySelector('.kayo');
kayo.addEventListener('click', function(){
    const kayoSound = new Audio('voicelines/kayo.mp3');
    kayoSound.play();
});

const iso = document.querySelector('.iso');
iso.addEventListener('click', function(){
    const isoSound = new Audio('voicelines/iso.mp3');
    isoSound.play();
});

const yoru = document.querySelector('.yoru');
yoru.addEventListener('click', function(){
    const yoruSound = new Audio('voicelines/yoru.mp3');
    yoruSound.play();
});

const killjoy = document.querySelector('.killjoy');
killjoy.addEventListener('click', function(){
    const killjoySound = new Audio('voicelines/killjoy.mp3');
    killjoySound.play();
});

const sova = document.querySelector('.sova');
sova.addEventListener('click', function(){
    const sovaSound = new Audio('voicelines/sova.mp3');
    sovaSound.play();
});

const fade = document.querySelector('.fade');
fade.addEventListener('click', function(){
    const fadeSound = new Audio('voicelines/fade.mp3');
    fadeSound.play();
});

const raze = document.querySelector('.raze');
raze.addEventListener('click', function(){
    const razeSound = new Audio('voicelines/raze.mp3');
    razeSound.play();
});