const firstWeaponFirstPerson = "Knife";
const secondWeaponFirstPerson = "Shield";
const attackFirstPerson = () =>
  console.log(
    firstPerson.name + " " + "Fight knife! Defend yourself with a shield!"
  );

const weaponSecondPerson = "pistols";
const attackSecondPerson = () =>
  console.log(secondPerson.name + " " + "Fight pistol!");

const firstPerson = {
  name: "Vova Meat",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: [firstWeaponFirstPerson, secondWeaponFirstPerson],
  attack: attackFirstPerson,
};

const secondPerson = {
  name: "Tanya",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: [weaponSecondPerson],
  attack: attackSecondPerson,
};

const createPlayer = (player, characteristicPerson) => {
  const $player1 = document.createElement("div")
  $player1.classList.add(player)

  const $progressbar = document.createElement("div")
  $progressbar.classList.add("progressbar")

  const $character = document.createElement("div")
  $character.classList.add("character")

  const $nameFirstPlayer = document.createElement('div')
  $nameFirstPlayer.innerText = characteristicPerson.name
  $nameFirstPlayer.classList.add("name")

  const $lifeFirstPlayer = document.createElement('div')
  $lifeFirstPlayer.classList.add("life")
  $lifeFirstPlayer.style.width = `${characteristicPerson.hp}%`

  const $imgFirstPlayer = document.createElement('img')
  $imgFirstPlayer.src = characteristicPerson.img



  const $root = document.querySelector(".root")
  $root.appendChild($player1)
  $player1.appendChild($progressbar)
  $progressbar.appendChild($lifeFirstPlayer)
  $progressbar.appendChild($nameFirstPlayer)
  $player1.appendChild($character)
  $character.appendChild($imgFirstPlayer)
}

createPlayer(player = 'player1', firstPerson);
createPlayer(player = 'player2', secondPerson);


