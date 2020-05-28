var UGARITIC = 0;
var HEBREW = 1;
var ARABIC = 2;
var PHOENICIAN = 3;
var ARAMAIC = 4;
var SYRIAC = 5;

var abjads = [
  ["𐎀","א","ا","𐤀", "𐡀", "ܐ"],
  ["𐎁","ב","ب","𐤁", "𐡁", "ܒ" ],
  ["𐎂","ג","ج","𐤂", "𐡂", "ܓ" ],
  ["𐎃","ח","خ'","𐤇", "𐡇", "ܚ"],
  ["𐎄","ד","د","𐤃", "𐡃", "ܕ"],
  ["𐎅","ה","ه","𐤄", "𐡄", "ܗ"],
  ["𐎆","ו","و","𐤅", "𐡅", "ܘ"],
  ["𐎇","ז","ز","𐤆", "𐡆", "ܙ"],
  ["𐎈","ח","ح","𐤇", "𐡇", "ܚ"],
  ["𐎉","ט","ط","𐤈", "𐡈", "ܛ"],
  ["𐎊","י","ي","𐤉", "𐡉", "ܝ"],
  ["𐎋","כ","ك","𐤊", "𐡊", "ܟ"],
  ["𐎌","ש","ش","𐤔", "𐡔", "ܫ"],
  ["𐎍","ל","ل","𐤋", "𐡋", "ܠ"],
  ["𐎎","מ","م","𐤌", "𐡌", "ܡ"],
  ["𐎏","ד","د","𐤃", "𐡃", "ܕ" ],
  ["𐎐","נ","ن","𐤍", "𐡍", "ܢ"],
  ["𐎑","ט'","ظ","𐤈", "𐡈", "ܛ" ],
  ["𐎒","ס","س","𐤎", "𐡎", "ܣ" ],
  ["𐎓","ע","ع","𐤏", "𐡏", "ܥ" ],
  ["𐎔","פ","ف","𐤐", "𐡐", "ܦ"],
  ["𐎕","צ","ص","𐤑", "𐡑", "ܨ"],
  ["𐎖","ק","ق","𐤒", "𐡒", "ܩ"],
  ["𐎗","ר","ر","𐤓", "𐡓", "ܪ"],
  ["𐎘","ת'","ث","𐤕", "𐡕", "ܬ"],
  ["𐎙","ע'","غ","𐤏", "𐡏", "ܥ"],
  ["𐎚","ת","ت","𐤕", "𐡕", "ܬ"],
  ["𐎛","אִ","ئ","𐤉", "𐡉", "ܝ"],
  ["𐎜","אֻ","ؤ","𐤅", "𐡅", "ܘ"],
  ["𐎝","שׂ","'س","𐤔", "𐡔", "ܫ"],
  ["𐎟"," "," "," "," "," "]
]

function convert(str,source,dest) {
  str = str.replace(new RegExp('ם', 'g'), 'מ');
  str = str.replace(new RegExp('ן', 'g'), 'נ');
  str = str.replace(new RegExp('ף', 'g'), 'פ');
  str = str.replace(new RegExp('ץ', 'g'), 'צ');
  str = str.replace(new RegExp('ך', 'g'), 'כ');
  abjads.map(x => str = str.replace(new RegExp(x[source],'g'),x[dest]));  
  return str;
}

console.log(convert("שלום עולם",HEBREW,PHOENICIAN));

function load() {
  button = document.getElementById("convert");
  source = document.getElementById("source");
  from = document.getElementById("from");
  to = document.getElementById("to");
  output = document.getElementById("output");
  
  button.onclick = function() {
    output.innerHTML = convert(source.value, from.value, to.value);
  };
}



