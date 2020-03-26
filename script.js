const newQuoteBtnPatrick= document.getElementById('quote-patrick');
const newQuoteBtnSpongebob= document.getElementById('quote-spongebob');

newQuoteBtnPatrick.addEventListener('click', getQuotePatrick);
newQuoteBtnSpongebob.addEventListener('click', getQuoteSpongebob);

function getQuotePatrick() {
  console.log("newQuoteBtnPatrick was clicked");
  let randomNumber = Math.floor(Math.random() * (patrickQuotes.length));
  document.getElementById('quote-display-patrick').innerHTML = patrickQuotes[randomNumber];
}

function getQuoteSpongebob() {
  console.log("newQuoteBtnSpongebob was clicked");
  let randomNumber = Math.floor(Math.random() * (spongebobQuotes.length));
  document.getElementById('quote-display-spongebob').innerHTML = spongebobQuotes[randomNumber];
}

let patrickQuotes = [
  'The inner machinations of my mind are an enigma.',
  'Is mayonnaise an instrument?',
  'I can\'t see my forehead!',
  'Sometimes we have to go deep inside ourselves to solve our problems.',
  'I guess hibernation is the opposite of beauty sleep!',
  'Can I have everybody’s attention?… I have to use the bathroom.',
  'Knowledge cannot replace friendship.',
  'Once upon a time there was an ugly barnacle. He was so ugly that everyone died. The end!',
  'I wumbo, you wumbo, he she we wumbo.',
  'Dumb people are always blissfully unaware of how dumb they really are.'
]

let spongebobQuotes = [
  'I\'m ugly and I\'m proud!',
  'F is for friends who do stuff together!',
  'All I know is fine dining and breathing.',
  'Ravioli, ravioli. Give me the formuoli.',
  'If you believe in yourself, with a tiny pinch of magic all your dreams can come true!',
  'You don’t need a license to drive a sandwich.',
  'I’ll have you know that I stubbed by toe last week and only cried for 20 minutes.',
  'I know of a place where you never get harmed. A magical place with magical charm. Indoors. Indoors. Indoors.',
  'With imagination, you can be anything you want.',
  'No one can change a person, but someone can be a reason for that person to change.',
  'Good people don’t rip other people’s arms off.',
  'Excuse me, sir, but you’re sitting on my body, which is also my face.',
  'Well, it’s no secret that the best thing about a secret is secretly telling someone your secret, thereby adding another secret to their secret collection of secrets, secretly.',
  'Always follow your heart, unless your heart is bad with directions.',
  'Oh well, I guess I’m not wearing any pants today!',
  'You never really know the true value of a moment, until it becomes a memory.',
  'If I were to die right now in a fiery explosion due to the carelessness of a friend…. Then it would just be alright.',
  'The best time to wear a striped sweater is all the time.',
  'Can I be excused for the rest of my life?',
  'Remember, licking doorknobs is illegal on other planets!'
]
