var mySentence = 'The dog chased a rabbit across our yard.'

for (var i = 0; i < mySentence.length; i++) {
 var $mySentence = document.createElement('span')
 $mySentence.textContent = mySentence[i]
 document.body.appendChild($mySentence)
}

var $firstLetter = document.querySelector('span')
$firstLetter.classList.add('current')


var $current = document.querySelector('.current')
var $currentCharacter = $current.textContent

document.addEventListener('keydown', function (event) {
  if (event.key === $currentCharacter) {
    $current.classList.remove('current')
    $current.nextSibling.classList.add('current')
    $current.classList.add('correct')
  }
  else {
    $current.classList.add('wrong')
  }
})
