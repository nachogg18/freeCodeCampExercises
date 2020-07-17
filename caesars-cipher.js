function rot13(str) {
  var copyStr = []
  var alfabeto = {'A':'N',
                  'B':'O',
                  'C':'P',
                  'D':'Q',
                  'E':'R',
                  'F':'S',
                  'G':'T',
                  'H':'U',
                  'I':'V',
                  'J':'W',
                  'K':'X',
                  'L':'Y',
                  'M':'Z',
                  'N':'A',
                  'O':'B',
                  'P':'C',
                  'Q':'D',
                  'R':'E',
                  'S':'F',
                  'T':'G',
                  'U':'H',
                  'V':'I',
                  'W':'J',
                  'X':'K',
                  'Y':'L',
                  'Z':'M',
                  }
  for (var word of str.split(" ")) {
    var newWord = ''
    for (var letter of word) {
      var newLetter = undefined
      for (var cod of Object.keys(alfabeto)) {
        if (letter === cod) {
          newLetter = alfabeto[cod]
        }
        
      }

        if (newLetter === undefined) {
          newLetter = letter
        }
      
      newWord += newLetter  
    }
    copyStr.push(newWord)
    
  }
  return copyStr.join(" ")


}

console.log(rot13("SERR CVMMN!"));


