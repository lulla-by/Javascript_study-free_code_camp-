const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
  //get random number between 0 - 3
  const randomeNumber = Math.floor(getRandomeNumber());
  console.log(randomeNumber);
  document.body.style.backgroundColor = colors[randomeNumber];
  color.textContent = colors[randomeNumber]

})

function getRandomeNumber() {
  return Math.random()*colors.length;
}