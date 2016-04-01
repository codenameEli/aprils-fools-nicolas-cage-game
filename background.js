var poolOfNicks = [
  {
    imageUrl: '/images/nick-cage-1.jpg',
    question: "I'm one of those guys where the more coffee I drink, the more stunts I do, the more relaxed I get.",
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-4.jpg',
    question: "I've always had a soft spot for comic books.",
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-9.jpg',
    question: "Do you think I could borrow that dress sometime?",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-5.jpg',
    question: 'Every great story seems to begin with a snake.',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-7.jpg',
    question: 'I want to always find new ways of reinventing myself.',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-8.jpg',
    question: 'I try not to be proud. I try to actively attack pride.',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-10.jpg',
    question: "There's this movie I wanted to see and my mom said I couldn't go by myself.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-11.jpg',
    question: "I put the STD in STUD, all I need is U...",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-12.jpg',
    question: 'DON’T BE FRIGHTENED! I’m here to help!',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-13.jpg',
    question: "I wanna live in your socks so I can be with you every step of the way.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-14.jpg',
    question: "Does this rag smell like chloroform to you?",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-15.jpg',
    question: 'I picked two things I really like and put them together. Frankenstein and Cadillacs.',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-16.jpg',
    question: "You look much more attractive in person than you do through my telescope.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-17.jpg',
    question: "You gotta be tired coz you been runnin through my mind all day.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-2.jpg',
    question: "Superman is an American myth. Like the English have Shakespeare.",
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-18.jpg',
    question: "Are you a corn field, because I'm stalking you.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-19.jpg',
    question: "Just say yes now and I won't have to spike your drink.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-20.jpg',
    question: 'How, in the name of Zeus’ butthole, did you get out of your cell?',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-21.jpg',
    question: 'Y’know, I can eat a peach for hours.',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-22.jpg',
    question: "I killed your crush so we can be together forever",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-23.jpg',
    question: 'What are these iguanas doing on my coffee table?',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-24.jpg',
    question: "Just call me baby, cause I wanna be inside you for the next 9 months",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-25.jpg',
    question: "The last time I saw a body like yours, I was burying it in my basement",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-26.jpg',
    question: 'This is fight night and IIIIII aaaaaaaam the kiiiiiiiing!',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-27.jpg',
    question: "Promise not to call the cops when we hang out?",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-3.jpg',
    question: "Without tooting my own horn - I think it's a masterpiece.",
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-28.jpg',
    question: "You look to classy for pickup lines, thats why I have roofies.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-29.jpg',
    question: "Can I read your t-shirt in braille.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-30.jpg',
    question: 'Pink underwear works. Pink underwear works.',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-31.jpg',
    question: "I'm throwing a house party....and the only person invited is you",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-32.jpg',
    question: "I find your lack of nudity disturbing",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-33.jpg',
    question: "Hey, is it just me, or are we destined to be married?",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-6.jpg',
    question: "I know what it's like to meet someone you admire and have them be a complete jerk.",
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-34.jpg',
    question: "I like my coffee like I like my women...sealed in an air tight bag in the freezer",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-35.jpg',
    question: 'I’m gonna steal the Declaration of Independence!',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-36.jpg',
    question: "There's a tornado, quick into my basement",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-37.jpg',
    question: "If your feeling down, remember, I'll feel you back up",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-38.jpg',
    question: "If I'd follow you home, would you keep me?",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-39.jpg',
    question: "I want to take your skin off and wear it as my own",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-40.jpg',
    question: "I have a van out the back and there is free candy in it.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-41.jpg',
    question: 'Those toenails dry yet, sweetheart? We got some dancin’ to do.',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-42.jpg',
    question: "I only thought about you once today--I just never stopped.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-43.jpg',
    question: "I'm kind of new to this environment... can you show me the way to your apartment/house?",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-44.jpg',
    question: "I've had quite a bit to drink, and you're beginning to look pretty good.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-48.jpg',
    question: 'I’ll be taking these Huggies and whatever cash ya got.',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-45.jpg',
    question: "Shall I wait for you in my car or will the closet suffice?",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-46.jpg',
    question: "You're so good lookin' I'd drink your bath water.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-47.jpg',
    question: "You're like a dictionary - you add meaning to my life!",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-49.jpg',
    question: 'Put… the bunny… back… in the box.',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-50.jpg',
    question: "You must have wished upon a star cause today is your lucky day!",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-51.jpg',
    question: "Are you the energizer bunny cause you just keep going and going through my mind ",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-52.jpg',
    question: "Do you want fries with that shake!",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-53.jpg',
    question: "Are you a private eye? Because it seems like you're watching me.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-54.jpg',
    question: "Are you a copper ? Because I cu in my dreams !",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-55.jpg',
    question: "Good thing I brought my library card, cause I’m checking you out.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-61.jpg',
    question: 'I never disrobe before gunplay.',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-56.jpg',
    question: "What’s your favorite game? Mine’s called Following You Without You Knowing.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-57.jpg',
    question: "I wish I could sew myself to you",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-58.jpg',
    question: "You remind me of my sister. In a romantic way.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-59.jpg',
    question: "My favorite color is clear. That way I can always see you.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-60.jpg',
    question: "I love you more than my jar of fingers.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-62.jpg',
    question: 'Well, today’s your lucky day, ’cause I brought an eagle.',
    isCageQuote: true,
  },
  {
    imageUrl: '/images/nick-cage-63.jpg',
    question: "You smell like trash. May I take you out?",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-64.jpg',
    question: "You have the cutest smile when you sleep.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-65.jpg',
    question: "I want to chew your food for you.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-66.jpg',
    question: "You remind me of Pokemon. I wanna pikkachu. I also want to keep you in a giant plastic ball in my basement.",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-67.jpg',
    question: "How much money do you want for your old toothbrush?",
    isCageQuote: false,
  },
  {
    imageUrl: '/images/nick-cage-68.jpg',
    question: "I want to put your Q-tips up my nose and go to sleep.",
    isCageQuote: false,
  },
];
var lsKeys = {
  index: 'aprilFoolsIndex',
  results: 'aprilFoolsResults',
}
var notificationIds = {
  question: 'questionNotification',
  results: 'resultsNotification',
  gameover: 'gameoverNotification',
}

function setLocalStorageIndex(i) {
  localStorage.setItem( lsKeys.index, i );
}

function getLocalStorageIndex() {
  return Number( localStorage.getItem( lsKeys.index ) );
}

function getNextNick(index) {
  return poolOfNicks[index];
}

function getNextQuote(index) {
  return quotes[index];
}

function getNumberOfItems() {
  return poolOfNicks.length;
}

function initNewGame() {
  setLocalStorageIndex(0);
  initResults();
}

function getNickCage() {
  var index = getLocalStorageIndex();
  var limit = getNumberOfItems();
  var nickCage = {};

  nickCage = poolOfNicks[index];
  return nickCage;
}

function initResults() {
  var cleanRecord = JSON.stringify( {correct: 0, incorrect: 0} );

  localStorage.setItem(lsKeys.results, cleanRecord);
}

function getResults() {
  var results = localStorage.getItem(lsKeys.results);

  if ( results == null ) {

    initResults();
  }

  return JSON.parse( localStorage.getItem(lsKeys.results) );
}

function addAnswerToResults(correct) {
  var results = getResults();

  if ( correct == true ) {
    results.correct += 1;
  } else {
    results.incorrect += 1;
  }

  localStorage.setItem(lsKeys.results, JSON.stringify( results ) );
}

function recordResult(userAnswer) {
  var nickCage = getNickCage();
  var correctAnswer = nickCage.isCageQuote;

  addAnswerToResults( userAnswer == correctAnswer );
}

function showResultsNotification() {
  var notificationId = notificationIds.results;
  var results = getResults();
  var answered = results.correct + results.incorrect;
  var totalQuestions = getNumberOfItems();
  var progress = Math.floor( (answered/totalQuestions) * 100 );

  if ( progress == 100 ) {
    showGameOverNotification();
    initNewGame();
    return;
  }

  chrome.notifications.create(notificationId, {
      type: 'progress',
      // requireInteraction: true,
      progress: progress,
      iconUrl: 'icon.jpg',
      title: "Here are your results so far!",
      message: 'You got ' + results.correct + ' correct and ' + results.incorrect + ' incorrect\n\out of a total of ' + totalQuestions,
      buttons: [
        {
          title: 'Keep Going!',
          iconUrl: '/yes.png'
        },
      ],
  });
}

function showGameOverNotification() {
  var notificationId = notificationIds.gameover;
  var results = getResults();
  var answered = results.correct + results.incorrect;
  var totalQuestions = getNumberOfItems();
  var progress = Math.floor( (answered/totalQuestions) * 100 );

  chrome.notifications.create(notificationId, {
      type: 'image',
      // requireInteraction: true,
      iconUrl: 'icon.jpg',
      title: "You've had your fill of Cage today!",
      imageUrl: '/gameover.jpg',
      message: results.correct + ' correct and ' + results.incorrect + ' incorrect!' + '\nTotal score of ' + progress + '%',
      buttons: [
        {
          title: 'Start Over!',
          iconUrl: '/yes.png'
        },
      ],
  });
}

function handleQuestionButtonClicked(buttonIndex) {
  var index = getLocalStorageIndex();
  var userAnswer = false;

  if ( buttonIndex == 0 ) {
    userAnswer = true;
  }

  recordResult(userAnswer);

  chrome.notifications.clear(notificationIds.question); // returns true;

  setLocalStorageIndex(index+1);

  showResultsNotification();
}

function handleResultsButtonClicked(buttonIndex) {
  chrome.notifications.clear(notificationIds.results, function(wasCleared) {
    show();
  });
}

function handleGameOverButtonClicked(buttonIndex) {
  chrome.notifications.clear(notificationIds.gameover, function(wasCleared){
    initNewGame();
    show();
  });
}

var onButtonClickedCallback = function (notificationId, buttonIndex) {

  if ( notificationId == notificationIds.question ) {
    handleQuestionButtonClicked(buttonIndex)
  }

  if ( notificationId === notificationIds.results ) {
    handleResultsButtonClicked(buttonIndex)
  }

  if ( notificationId === notificationIds.gameover ) {
    handleGameOverButtonClicked(buttonIndex)
  }
}

function showQuestion() {
  var notificationId = notificationIds.question;
  var nickCage = getNickCage();

  chrome.notifications.create(notificationId, {
      type: 'image',
      // requireInteraction: true,
      iconUrl: 'icon.jpg',
      title: nickCage.question,
      imageUrl: nickCage.imageUrl,
      message: 'Did I say this? 21 of them I did..',
      buttons: [
        {
          title: 'Absolutely, Nick Cage!',
          iconUrl: '/yes.png'
        },
        {
          title: "No, Nick wouldn't say that..",
          iconUrl: '/no.png'
        }
      ],
  });
}

function show() {
  var index = getLocalStorageIndex();
  var limit = getNumberOfItems();

  if ( index == null ) {
    initNewGame();
  }

  if ( index <= limit ) {
    showQuestion();
  }
}

function isAprilFools() {

  var d = new Date();
  var currentMonth = d.getMonth() + 1;
  var currentDay = d.getDate();
  var currentHour = d.getHours();
  var currentMinutes = d.getMinutes();

  if ( currentMonth == 4 && currentDay == 1  && currentHour >= 9 && currentMinutes >= 00 ) {
    initAprilFoolsJoke();
  } else {
    return false;
  }
}

var aprilFoolsIntervalId = initAprilsFoolCheck();

function clearAprilFoolsCheck() {
  clearInterval(aprilFoolsIntervalId)
}

function initAprilFoolsJoke() {
  console.log(clearAprilFoolsCheck());
  clearAprilFoolsCheck();

  setInterval(function() {
    show();
  }, 900000);
}


function initAprilsFoolCheck() {
  if (window.Notification) {
    return setInterval(function() {
      isAprilFools();
    }, 18000);
  }
}

chrome.notifications.onButtonClicked.addListener(onButtonClickedCallback);
// Conditionally initialize the options.
if (!localStorage.isInitialized) {
  localStorage.isActivated = true;   // The display activation.
  localStorage.frequency = 1;        // The display frequency, in minutes.
  localStorage.isInitialized = true; // The option initialization.
}