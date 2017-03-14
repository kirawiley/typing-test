//Global variables
var mySentence = 'The dog chased a rabbit across our yard.'
var wrongAnswer = 0
var correctKeys = 1

//Separates letters with spans
for (var i = 0; i < mySentence.length; i++) {
 var $mySentence = document.createElement('span')
 $mySentence.textContent = mySentence[i]
 document.body.appendChild($mySentence)
}

//Underlines current letter
var $firstLetter = document.querySelector('span')
$firstLetter.classList.add('current')

//Changes letter based on user's key press
document.addEventListener('keydown', function (event) {
  if (correctKeys === mySentence.length) {
    showScore()}

    var $current = document.querySelector('.current')
    var $currentCharacter = $current.textContent

//If answer is correct...
    if (event.key === $currentCharacter) {
        correctKeys = correctKeys + 1
        $current.classList.remove('current')
        $current.nextSibling.classList.add('current')
        $current.classList.add('correct')
        }

//If answer is wrong...
    else {
      $current.classList.add('wrong')
      wrongAnswer = wrongAnswer + 1}
})

//Shows the user their score
function showScore () {
  var $score = document.createElement('div')
  if (wrongAnswer === 1) {
    $score.textContent = 'You made' + ' ' + wrongAnswer + ' ' + 'mistake.'
  }
  else if (wrongAnswer === 0) {
    $score.textContent = 'You made no mistakes. Great job!'
  }
  else {
    $score.textContent = 'You made' + ' ' + wrongAnswer + ' ' + 'mistakes.'
  }
  document.body.appendChild($score)
}
