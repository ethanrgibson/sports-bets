

// SECTION State

let bank = 100

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

const teamAssignment = [1, 2]

// !SECTION


// SECTION Logic

function team1Skill() {

  let team1Skill = 0

  for (let i = 0; i < players.length; i++) {
    const playerSkill = players[i];
    if (playerSkill.teamNumber == 1) {
      team1Skill += playerSkill.skill
    }
  }
  return team1Skill
}

function team2Skill() {

  let team2Skill = 0

  for (let i = 0; i < players.length; i++) {
    const playerSkill = players[i];
    if (playerSkill.teamNumber == 2) {
      team2Skill += playerSkill.skill
    }
  }
  return team2Skill
}


function betTeam1(moneyDown) {

  if (team1Skill() < team2Skill()) {
    bank -= moneyDown
  }
  else { bank += moneyDown }

  drawBank()

}


function generateRandomTeams() {

  const teamAssignmentIndex = Math.floor(Math.random() * teamAssignment.length)
  const teamAssignmentNumber = teamAssignment[teamAssignmentIndex]
  return teamAssignmentNumber


}

// !SECTION



// SECTION Draw

function drawTeam1() {

  let emojis = ''

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == 1) {
      emojis += player.emoji
    }
  }

  reassignTeamNumber()

  const team1ContainerElem = document.getElementById('team1')
  team1ContainerElem.innerText = emojis

}
function drawTeam2() {
  let emojis = ''

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == 2) {
      emojis += player.emoji
    }
  }

  reassignTeamNumber()

  const team1ContainerElem = document.getElementById('team2')
  team1ContainerElem.innerText = emojis
}

function drawBank() {

  const bankElem = document.getElementById('bank')
  bankElem.innerText = bank.toString()
}



function reassignTeamNumber() {

  for (let i = 0; i < players.length; i++) {
    const randomTeam = players[i];
    randomTeam.teamNumber = generateRandomTeams()
  }

}



// !SECTION

drawTeam1()
drawTeam2()
drawBank()