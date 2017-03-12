/*  shout(string) receives one argument and returns it in all caps: */
function shout(string) {
  return (string).toUpperCase()
}

/*  whisper(string) receives one argument and returns it in all lowercase:*/
function whisper(string) {
  return (string).toLowerCase()
}

/*  logShout(string) calls console.log() its one argument in all caps:*/

function logShout(string) {
  console.log(shout(string))
}

// logWhisper(string) calls console.log() its one argument in all lowercase:
function logWhisper(string) {
    console.log(whisper(string))
}

// /*  sayHiToGrandma(string) returns "I can't hear you!" if `string` is lowercase:
function sayHiToGrandma(string) {
  if (string == string.toUpperCase()) {
    return ('YES INDEED!')
  }
  else if (string == string.toLowerCase()) {
    return ("I can\'t hear you!")
  }
  else if (string == "I love you, Grandma.") {
    return ("I love you, too.")
  }
  }
