var mySentence = 'The dog chased a rabbit across our yard.'

for (var i = 0; i < mySentence.length; i++) {
 var $mySentence = document.createElement('span')
 $mySentence.textContent = mySentence[i]
 document.body.appendChild($mySentence)
}

var $firstLetter = document.querySelector('span')
$firstLetter.classList.add('current')
