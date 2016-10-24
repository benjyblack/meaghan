// var cards = [
// 	theFool= {
// 		card:
// 		image:
// 		meaning1: ,
// 		meaning2: ,
// 		meaning3: ,
// 		meaning4: ,
// 	},
// 	theMagician = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theHighPriestess = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theEmpress = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theEmperor = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theHierophant = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theLovers = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theChariot = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	strength = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theHermit = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	wheelOfFortune = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	justice = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theHangedMan = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	death = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	temperance = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theDevil = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theTower = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theStar = {
// 		image: ,
// 		meaning:
// 	},
// 	theMoon = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theSun = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	judgement = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// 	theWorld = {
// 		card: ,
// 		image: ,
// 		meaning:
// 	},
// ]


var colors = [
  one = {
    color: 'red',
    age: 'one',
    meaningOne: 'book',
    meaningTwo: 'car',
    meaningThree: 'fun',
  },
  two = {
    color: 'orange',
    age: 'two',
    meaningOne: 'train' ,
    meaningTwo: 'cycle',
    meaningThree: 'boat',
  },
  three = {
    color: 'yellow',
    age: 'three',
    meaningOne: 'plane' ,
    meaningTwo: 'dog',
    meaningThree: 'cat',
  },
  four = {
    color: 'green',
    age: 'four',
    meaningOne: 'bird',
    meaningTwo: 'rat',
    meaningThree: 'mouse',
  },
  five = {
    color: 'blue',
    age: 'five',
    meaningOne: 'horse',
    meaningTwo: 'farm',
    meaningThree: 'barn',
  },
  six = {
    color: 'violet',
    age: 'six',
    meaningOne: 'cow',
    meaningTwo: 'ferret',
    meaningThree: 'donkey',
  },
  seven = {
    color: 'purple',
    age: 'seven',
    meaningOne: 'chinchilla',
    meaningTwo: 'burger',
    meaningThree: 'pizza',
  },
  eight = {
    color: 'indigo',
    age: 'eight',
    meaningOne: 'pasta',
    meaningTwo: 'meatball',
    meaningThree: 'pepperoni',
  },
  nine = {
    color: 'pink',
    age: 'nine',
    meaningOne: 'boy',
    meaningTwo: 'girl',
    meaningThree: 'baby',
  },
  ten = {
    color: 'black',
    age: 'ten',
    meaningOne: 'adult',
    meaningTwo: 'developer',
    meaningThree: 'fire',
  },
  eleven = {
    color: 'white',
    age: 'eleven',
    meaningOne: 'earth',
    meaningTwo: 'wind',
    meaningThree: 'air',
  },
  twelve = {
    color: 'gold',
    age: 'twelve',
    meaningOne: 'parachute',
    meaningTwo: 'balloon',
    meaningThree: 'ball',
  },
  thirteen = {
    color: 'brown',
    age: 'thirteen',
    meaningOne: 'gun',
    meaningTwo: 'bullet',
    meaningThree: 'arrow',
  },
  fourteen = {
    color: 'silver',
    age: 'fourteen',
    meaningOne: 'crossbow',
    meaningTwo: 'beer',
    meaningThree: 'pumpkin',
  },
  fifteen = {
    color: 'bronze',
    age: 'fifteen',
    meaningOne: 'star trek',
    meaningTwo: 'walking dead',
    meaningThree: 'game of thrones',
  },
  sixteen = {
    color: 'turquoise',
    age: 'sixteen',
    meaningOne: 'camera',
    meaningTwo: 'oatmeal',
    meaningThree: 'banana',
  }
]

$(document).ready(function() {
  //function to randomize objects
  function shuffle(array) {
    for(var i = 0; i < array.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (array.length - i));

      var temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    };
    return array;
  };

  //var shuffledArray = shuffle(colors);
  populateShuffledArray(shuffle(colors));

  //loop through each randomized array item, and append it to the DOM


  function populateShuffledArray(shuffledArray){
    $('.container').html("");
    var HTML = "";
    shuffledArray.forEach(function(arrayItem){
      HTML +=
        `<div class="card" data-age="${arrayItem.age}">
	  		<div class="front">
		  		<p>${arrayItem.color}</p>
	  		</div>
	  		<div class="back">
	  			${arrayItem.age}
	  		</div>
	  	</div>
	  	`
    });


    $('.container').append(HTML);
  }

  //have shuffle button randomize deck
  $('button.shuffle').on('click', function() {
    populateShuffledArray(shuffle(colors));
  });

  //Have the user pick 3 options - push the objects into a new array
  var selectedArray = [];

  $('.container .card').on('click', function() {
    if (selectedArray.length >= 3) {
      console.log('3 items already chosen, returning');
      return;
    } else {
      $(this).addClass('clicked');

      var clickedCardAge = $(this).attr('data-age');
      // Find the clicked card in our list
      var associatedCard = colors.find(function (color) {
        return color.age === clickedCardAge;
      });

      // Only add if not already added
      if (!selectedArray.includes(associatedCard)) {
        console.log(`Adding ${associatedCard} to selected array`);
        selectedArray.push(associatedCard);
      } else {
        console.log(`Array already contains ${associatedCard}, will not add again`);
      }

      // 3 cards have been chosen?
      if (selectedArray.length === 3) {
        console.log('3 cards have been chosen, will show meanings now');

        // clear all cards
        $('.card').fadeOut();
        giveCardReading(selectedArray);
      }
    }

    $('button.shuffle').css('display', 'none');
    console.log(selectedArray);
  });

  function giveCardReading(selectedArray){
    // add each card from selected array, with the given meanings
    selectedArray.forEach(function(arrayItem) {
      $('.container').append(`<div class="card"">
	  		<div class="front">
		  		<p>${arrayItem.meaningOne}</p>
	  		</div>
	  	</div>
	  	`);
    });
  }
});
