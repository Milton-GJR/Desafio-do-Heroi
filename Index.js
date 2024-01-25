let nome = "Playmobil"
let expXp = 2500
let nivel
if (expXp < 1001)
 {nivel = "Ferro"}
 else if (expXp < 2001)
   {nivel = "Bronze"}
   else if (expXp < 5001)
   {nivel = "Prata"}
   else if (expXp < 7001)
   {nivel = "Ouro"}
   else if (expXp < 8001)
   {nivel = "Platina"}
   else if (expXp < 9001)
   {nivel = "Ascendente"}
   else if (expXp < 10001)
   {nivel = "Imortal"}
   else{nivel = "Radiante"}
console.log("O Herói de nome " + nome + " está no nível " + nivel)