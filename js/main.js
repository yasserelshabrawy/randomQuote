var random1 = document.getElementById("random1");
var random2 = document.getElementById("random2");

var arr = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  { quote: "“So many books, so little time.”", author: "― Frank Zappa" },
  {
    quote: "“A room without books is like a body without a soul.””",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
];

function clickBtn() {
    var random = arr[Math.floor(Math.random() * arr.length)];
    random1.innerHTML = random.quote;
    random2.innerHTML = random.author;

}
