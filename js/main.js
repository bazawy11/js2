// window.prompt("who are you");

var quotes = [
    { author: "Leo Tolstoy", quote: "Muhammad has always been standing higher than the Christianity. He does not consider god as a human being and never makes himself equal to God. Muslims worship nothing except God and Muhammad is his Messenger. There is no any mystery and secret in it." },
    { author: " Yann Martel", quote: "I challenge anyone to understand Islam, its spirit, and not to love it. It is a beautiful religion of brotherhood and devotion." },
    { author: "Al-Ghazzali", quote: "Declare your jihad on thirteen enemies you cannot see -egoism, arrogance, conceit, selfishness, greed, lust, intolerance, anger, lying, cheating, gossiping and slandering. If you can master and destroy them, then you will be read to fight the enemy you can see." },
    { author: "Saddam Hussein", quote: "Women make up one half of society. Our society will remain backward and in chains unless its women are liberated, enlightened and educated" },
    { author: "Noam Chomsky", quote: "It's not radical Islam that worries the US -- it's independence" },
    { author: "Imam Al-Ghazali", quote: "The happiness of the drop is to die in the river" },
    { author: "Hasan Al-Basri", quote: "The world is 3 days: As for yesterday, it has vanished along with all that was in it. As for tomorrow, you may never see it. As for today, it is yours, so work on it." },
    { author: "Zain Hashmi", quote: "Happiness comes from helping others, by being with others, and by sharing, even if it's only a smile." },
    { author: "Muhammad Ali Jinnah", quote: "Democracy is in the blood of the Muslims, who look upon complete equality of mankind, and believe in fraternity, equality, and liberty." },
    { author: "Zain Hashmi", quote: "Small good decisions will lead you to the glorious path of success." },

];

var rNum;

function getRandomInt(lenght) {
  return Math.floor(Math.random() * lenght);
}

function getQuote(quotes) {
      var num = getRandomInt(quotes.length);

  if (num != rNum) {

document.getElementById("quote").innerHTML=`<p class="container  display-5" id="quote">  "${quotes[num].quote}"  </p>`
document.getElementById("author").innerHTML=`<p class="lead fst-italic" id="author">  -- ${quotes[num].author}  </p>`

    rNum = num;
  } else {
  var num = getRandomInt(quotes.length);
  }
  
  
}
 
// getQuote(quotes);