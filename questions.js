// Questionnaire
const img = document.createElement("img");
const myGifi = document.querySelector("#questions");
const submit = document.querySelector("#sub");

function result() {
  let score = 0;
  if (document.getElementById("correct1").checked) {
      score++;
    }
    
    if (document.getElementById("correct2").checked) {
  score++;
}

if (document.getElementById("correct3").checked) {
    score++;
}
if (score != 3) {
    img.src =
    "https://img.wattpad.com/a65341935db3ccb076d0d62d254bb7dd65ab2386/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f47556e506c3236527638304279773d3d2d3434343035333231322e313464333637376466666263373264373938303636383733303030342e676966?s=fit&w=720&h=720";
    
    myGifi.innerHTML = " Essai de nouveau";
    myGifi.style.color = "aliceblue";
    myGifi.appendChild(img);
  setTimeout(function () {
      window.location.href = "./questions.html";
    }, 4000);
} else if ((score = 3)) {
    img.src = "https://c.tenor.com/zVsoLH3HoQcAAAAC/applaudissement-clap.gif";
    
    myGifi.innerHTML = "Bravo";
    myGifi.style.color = "aliceblue";
    myGifi.appendChild(img);
    setTimeout(function () {
        window.location.href = "./questions.html";
    }, 4000);
}
console.log("your score is:" + score);
}