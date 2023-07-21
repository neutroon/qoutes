var qouteBtn = document.getElementById("qoute-btn");
var qouteArea = document.getElementById("qoute-area");

var qoutes = [
  "“Be yourself; everyone else is already taken.”<br>― Oscar Wilde",
  "“So many books, so little time.”<br>― Frank Zappa",
  "“A room without books is like a body without a soul.”<br>― Marcus Tullius Cicero",
  "“You only live once, but if you do it right, once is enough.”<br>― Mae West",
  "“Be the change that you wish to see in the world.”<br>― Mahatma Gandhi",
  "“If you tell the truth, you don't have to remember anything.”<br>― Mark Twain",
];
var checkRepeat = [];
getQoute();
function getQoute() {
  var random = Number((Math.random() * 5).toFixed());

  if (checkRepeat[checkRepeat.length - 1] == random) {
      console.log("repeated");
      random -= 1;
      if (random == -1) {
          console.log("Opps -1 is here");
          random += 2;
        }
    }
    
    checkRepeat.push(random);
    console.log(random);
    
    qouteArea.innerHTML = qoutes[random];
}
