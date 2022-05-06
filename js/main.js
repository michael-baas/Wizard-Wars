
// Harry Potter Game

// Character Class
class Character{
  constructor(name){
    this._name = name;
    this._stats = {}
    this._xp = 20;
  }
  get name(){
    console.log(this._name)
    return this._name
  }
  get stats(){
    console.log(this._stats)
    return this._stats
  }
  get xp(){
    console.log(this._xp)
    return this._xp
  }
  set xpChange(xpDifference){
    this._xp += xpDifference
    console.log(this._xp)
    
  }
}

// Muggle Characters 
class Muggle extends Character{
  constructor(name, inTheKnow){
    this.name = name;
    
  }
  
}
// Wizard Characters 
class Wizard extends Character{
  constructor(name,mageClass){
    super(name)
    this._mageClass = mageClass
    let wand = "basic mage wand"
    this._inventory = {wand}
  }
  get inventory(){
    console.log(this._inventory)
  }
  castSpell1(victim){
    victim.xpChange = 10
  }
  castSpell2(victim){
    victim.xpChange = 10
  }
  castSignatureMove(){
    console.log('Avada Kadavra');
  }
  attack(vic){
  vic.xpChange = + this._xpMultiplier
  console.log(vic.xp)
  console.log('You defeated your opponent')
  return `XP: ${vic.xp}`
}
}
// Bad guyz
class DeathEater extends  Wizard {
  constructor(name, mageClass){
    super(name, mageClass)
    this._xpMultiplier = 50
  }
  set xpChange(xpDifference){
    xpDifference *= 1.5
    this._xp += xpDifference
    console.log(this._xp)
  }
  castSpell1(victim){
    victim.xpChange = 10
  }
  castSpell2(victim){
    victim.xpChange = 20
  }
  castSignatureMove(){
    // Deatheater move
  }
}
//Good guyz
class Dumbledorians extends Wizard {
  constructor(name, mageClass){
    super(name, mageClass)
    this._xpMultiplier = 70
  }
  castSpell1(victim){
    victim.xpChange = 10
  }
  castSpell2(victim){
    victim.xpChange = 20
  }
  castSignatureMove(victim){
    // Dumbledorians move
    
  }
}

const harryPotter = new Dumbledorians("Harry Potter","Novice")
const bellatrix = new DeathEater("Bellatrix LeStrange","Master")

let bellaXP = document.querySelector("#bellatrixXP")
let harryXP = document.querySelector("#harryXP")


let wand = document.querySelector("#wand")
wand.addEventListener('click', () => {
bellaXP.textContent = bellatrix.attack(harryPotter)
harryXP.textContent = harryPotter.attack(bellatrix)
})

document.getElementById("bellatrix").addEventListener("click", (e) => {
  flip(e)
  
})


document.getElementById("harry").addEventListener("click",flip)


document.querySelector(".fa-battle-net").addEventListener("click",fight)
document.querySelector(".fa-feather").addEventListener("click",fight)
document.querySelector(".fa-bolt-lightning").addEventListener("click",fight)

document.querySelector(".fa-tornado").addEventListener("click",fight)
document.querySelector(".fa-hurricane").addEventListener("click",fight)
document.querySelector(".fa-skull").addEventListener("click",fight)

let direction = 1 // this will tell us which direction to apply the XP
function flip(e) {
  
  let attacker = e.target
  
  /*if (attacker == document.getElementById("bellatrix")) {
    //
    direction = -1
    //document.getElementById('wand').style["transform"] = "rotateY(180deg)"
  }
  else {
    direction = 1
    //document.getElementById('wand').style["transform"] = "rotate(0)"
  }*/
  document.getElementById("wand").style["-webkit-transform"] = `scaleX(${direction})`;
  document.getElementById("wand").style["transform"] = `scaleX(${direction})`;
}

// wand can rotate based on the exact XP each character has (or rather their difference)
// or we can have wands that are a meter rather than displayed numbers of XP

function fight(elem){
  let spell = elem.target
  if (spell.classList.contains("harrySpell")) {
    direction = -1
  }
  else if (spell.classList.contains("bellaSpell")) {
    direction = 1
  }
  if (spell == document.querySelector(".fa-feather")) {
    console.log("feather baby")
  }
  else if (spell == document.querySelector(".fa-battle-net")) {
    console.log("battle net")
  }
  else if (spell == document.querySelector(".fa-bolt-lightning")) {
    console.log("Harry's signature move")
  }
  else if (spell == document.querySelector(".fa-tornado")) {
    console.log("Bella spun a tornado")
  }
  else if (spell == document.querySelector(".fa-hurricane")) {
    console.log("You spin me right round baby right round")
  }
  else if (spell == document.querySelector(".fa-skull")) {
    console.log("AVADA KADAVRA")
  }
  flip(spell)
}
