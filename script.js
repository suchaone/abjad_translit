var UGARITIC = 0;
var HEBREW = 1;
var ARABIC = 2;
var PHOENICIAN = 3;

var abjads = [
  ["𐎀","א","ا","𐤀"],
  ["𐎁","ב","ب","𐤁"],
  ["𐎂","ג","ج","𐤂"],
  ["𐎃","ח","خ'","𐤇'"],
  ["𐎄","ד","د","𐤃"],
  ["𐎅","ה","ه","𐤄"],
  ["𐎆","ו","و","𐤅"],
  ["𐎇","ז","ز","𐤆"],
  ["𐎈","ח","ح","𐤇"],
  ["𐎉","ט","ط","𐤈"],
  ["𐎊","י","ي","𐤉"],
  ["𐎋","כ","ك","𐤊"],
  ["𐎌","ש","ش","𐤔"],
  ["𐎍","ל","ل","𐤋"],
  ["𐎎","מ","م","𐤌"],
  ["𐎏","ד","د","𐤍"],
  ["𐎐","נ","ن","𐤎"],
  ["𐎑","ט'","ظ","𐤈"],
  ["𐎒","ס","س","𐤔"],
  ["𐎓","ע","ع","𐤏"],
  ["𐎔","פ","ف","𐤐"],
  ["𐎕","צ","ص","𐤑"],
  ["𐎖","ק","ق","𐤒"],
  ["𐎗","ר","ر","𐤓"],
  ["𐎘","ת'","ث","𐤕"],
  ["𐎙","ע'","غ","𐤏"],
  ["𐎚","ת","ت","𐤕"],
  ["𐎛","אִ","ئ","𐤉"],
  ["𐎜","אֻ","ؤ","𐤅"],
  ["𐎝","שׂ","'س","𐤔"],
  ["𐎟"," "," "," "]
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



