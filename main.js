var mySentence = 'The dog chased a rabbit across our yard.'

for (var i = 0; i < mySentence.length; i++) {
 var $mySentence = document.createElement('span')
 $mySentence.textContent = mySentence[i]
 document.body.appendChild($mySentence)
}

var $firstLetter = document.querySelector('span')
$firstLetter.classList.add('current')


document.addEventListener('keydown', function (event) {
  var $current = document.querySelector('.current')
  var $currentCharacter = $current.textContent

  if (event.key === $currentCharacter) {
    $current.classList.remove('current')

  if ($current.nextSibling.nodeType === 1){
    $current.nextSibling.classList.add('current')
    $current.classList.add('correct')
    }
  else {
  
    }
  }

  else {
    $current.classList.add('wrong')
  }
})
