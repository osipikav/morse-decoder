const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let dec = "";

  for (let i = 0; i < expr.length; i += 10) {
    let l = expr.substr(i, 10);
    dec = dec + decLetter(l);
  }
  function decLetter(l) {
    if (l === "**********") return " ";
    let el = "";
    for (let i = 0; i < l.length; i += 2) {
      let code = l.substr(i, 2);
      if (code == "10") {
        el = el + ".";
      }
      if (code == "11") {
        el = el + "-";
      }
    }
    return MORSE_TABLE[el];
  }
  return dec;
}

module.exports = {
  decode,
};
