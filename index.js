names = ["blue", "red", "med"]
function whosPaying(names) {
    var numberPerson = names.length;
    var personPosition = Math.floor(Math.random() * numberPerson);
    var perSon = names[personPosition]
    
    alert(perSon + " is going to buy lunch today!")
  }
 
  
  var led = [];
  var med = (9);
  function output() {
      led.push(med);
      led ++
  }
  output();
  alert(led);
  var fed = ["azeez", "lekan", "mad", "get"];
  gef = prompt("your name");
  if (fed.includes(gef)) {
      alert("welcome " + gef )
  } else {
      alert("sorry");
  }
      
  var tweet1 = prompt ("my tweet");
  alert("you currently have " + tweet1.length + " and you are left with " + (280 - tweet1.length) + " characters")
  var tweet2 = prompt ("my tweet 2")
  alert(tweet2.slice(0,12))
  alert(tweet2.toUpperCase());
  var name1 = prompt("what is your name user")
  alert("Welcome " + name1.toUpperCase().slice(0,1) + name1.toLowerCase().slice(1,name1.length))
  prompt("hope you had a nice night")
  alert("That's good to know")
  var dogAge = prompt("how old is your dog User")
  humanAge = (dogAge - 2) * 4 + 21 
  alert("your dog is " + humanAge + " year's old in human age, User")
  var x = prompt("")
  alert(x++)
  alert(x)