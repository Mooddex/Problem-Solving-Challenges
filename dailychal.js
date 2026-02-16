
//------
hasDuplicate(nums) {
      return new Set(nums).size !== nums.length
    }
//----------------
function bingo(ticket, win) {
  let miniWins = 0;
  for (let [str, code] of ticket) {
    if (str.split('').some(char => char.charCodeAt(0) === code)) {
      miniWins++;
    }
  }
  return miniWins >= win ? 'Winner!' : 'Loser!';
}

//--------
function solution(str) {
  return str.replace(/([A-Z])/g, ' $1');
}

//---------
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
  }
//------
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
//-----------
function oddOrEven(array) {
   //enter code here
if (array.length===0) {return "even"}
else{
let total= array.reduce((c,s)=>c+=s)
return total %2===0?"even": "odd"

}

}
//-----------
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    
//------
function opposite(number) {
  //your code here
return -number
}
//---------------
function highAndLow(numbers){
  // ...
  let nNumbers = numbers.split(" ").map(Number)
 let highest = Math.max(...nNumbers)
 let lowest= Math.min(...nNumbers)
 return `${highest} ${lowest}`;
}
//----------------
function tribonacci(signature,n){
  //your code here
  if(n<=3){ return signature.slice(0,n) };
  let result = [...signature] ;
  
  for ( i=3 ; i<n ; i++ ){
    let next = result[i - 1] + result[i - 2] + result[i - 3];
    result.push(next);
  }
    return result ;
  
}
//--------
const binaryArrayToNumber = arr => {
  // your code
  return arr.reduce( (sum , cur)  => sum*2 + cur ,0 ) ;
};
//------
function maps(x){
 return x.map( (e) => e*2 )
}
//--------
function getCount(str) {
  return str
    .split('')
      .filter(x=> x=== 'a'||x=== 'e'||x=== 'i'||x=== 'o'||x=== 'u').join('').length
  
}
//--------------
function noSpace(x){
return x.split(' ').join('')
}
//-----------
function numberToString(num) {
  // Return a string of the number here!
  return num+''
}
//-----------------
function alphabetPosition(text) {
  return text 
  .toLowerCase()
  .split('')
  .filter(c => c >= ('a') && c <= ('z') )
  .map(c => c.charCodeAt(0)-96 )
  .join(' ')
}
//--------------------
function spinWords(string){
  //TODO Have fun :)

return  string
  .split(' ')
  .map( ( e )=> e.length >= 5? e.split('').reverse().join('') :  e )
  .join(' ')
}
//--------------
function arrayDiff(a, b) {
  return a.filter(n => !b.includes(n));
}
//----------------------------------
function likes(names) {
  // TODO
  let newSen ;
  if(names.length===0){
    return 'no one likes this'
  }else if(names.length===1){
    return `${names[0]} likes this`
  }else if(names.length===2){
    return `${names[0]} and ${names[1]} like this`
  }else if(names.length===3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }else if(names.length>3){
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
}
//----------------------------------------
const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);
// Expected output: "Character code 113 is equal to q"

// -------------------
function validateBase(num, base) {
  return num.toUpperCase().split('').every(char => {
    let value;
    if (char >= '0' && char <= '9') {
      value = parseInt(char, 10);
    }
    else if (char >= 'A' && char <= 'Z') {
      value = char.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    }
    else {
      return false;
    }
    return value < base;
  });
}

//----------------------------------------------
function duplicateEncode(word){
  word = word.toLowerCase()
 return word.split('').map((c, _, arr)=>{
    return arr.filter(x=> x===c ).length >1 ? ')':'(' ;
}).join('') 
}  


// get the word
//divide it 
//find out if the car is reapeted
//replace withh ) if it is not
//replace with ) if it is (compare it with each eleminte in the array)
//out a new str with )( only

//-----------------------------------------
function frame(balls) {
  const blz = { R: 1, Y: 2, G: 3, Bn: 4, Be: 5, P: 6, Bk: 7 };

  if (balls.includes("W")) return "Foul";

  let i = 0;
  let score = 0;

  while (i < balls.length) {
    let color = '';

    if (i + 1 < balls.length && blz[balls.slice(i, i + 2)]) {
      color = balls.slice(i, i + 2);
      i += 2;
    } 
    else if (blz[balls[i]]) {
      color = balls[i];
      i += 1;
    } 
    else {
      i += 1;
      continue;
    }
    let countStr = '';
    while (i < balls.length && !isNaN(balls[i])) {
      countStr += balls[i];
      i++;
    }

    let count = countStr ? parseInt(countStr) : 1;
    score += blz[color] * count;
  }

  return score > 147 ? 'invalid data' : score;
}


// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
 let addBinary =  (a,b)=>(a+b).toString(2) 

//  If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
function dnaStrand(dna){
 return dna.split('').map((l) =>{
    if(l==='A')  return 'T' 
     if(l==='T') return 'A'
     if(l==='C') return 'G'
     if(l==='G') return 'C'
  } ).join('')
  
  
}
//--------------------------------------------------
function getMiddle(str){
   let count = str.length/2
  if(str.length %2 ===0){
  return str[count-1]+str[count]
  }else{
    return str[Math.floor(str.length / 2)]
  }
}
//-------------------------------------------------------------
function dnaStrand(dna){
 return dna.split('').map((l) =>{
    if(l==='A')  return 'T' 
     if(l==='T') return 'A'
     if(l==='C') return 'G'
     if(l==='G') return 'C'
  } ).join('')
  
  
}
//--------------------------------------------------------------------------
function frame(balls) {
  if (/W/.test(balls)) return 'Foul'
  let score = 0
  balls.replace(/([A-Z][a-z]?)(\d*)/g, (m, color, count) => {
    count = count || 1
    score += blz[color] * count
  })
  if (score > 147) return 'invalid data'
  return score
}
//-------------------------------------------
//https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript
function solution(number) {
  if (number <= 0) return 0;

  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

//--------------------------------------------------------
function wave(str) {
  let final = [];
  
  for(i = 0 ; i < str.length ; i++ ){
    if (str[i] === ' ') continue ;
    
    let char = str.split('')
    char[i] = char[i].toUpperCase();;
    final.push (char.join(''))
    
  }
  return final ;
  }

//=====================================================================
  function sumTwoSmallestNumbers(numbers) {  
  // Code here
 let newArr = numbers.slice().sort((a, b) => a - b);
  let total = newArr[0]+ newArr[1];
  return total
}

// ---------------------------------------------------------
function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}
//----------------------------------------------------------
// another solution 
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
// ------------------
function insertDash(num) {
   //code me
return  num.toString().split('').map((n , i , arr)=>
  n  %2 && arr[i+1]%2 ?   n+ '-':  n ).join('')
}
//------------------------------------------- 
function positiveSum(arr) {
 return arr.filter(n=>n>=0).reduce((acc,c) => acc+=c ,0 )
      
}
//----------------------------
var capitals = function (word) {
	// Write your code here
return  word.split('').map((c ,i)=> c===c.toUpperCase() ? i : -1)
  .filter((i)=> i!==-1 ) ;
};
// -----------------------------
function toNumberArray(stringarray){
return  stringarray.map( (a , i)=> Number(a) )
}
// -------------------------------------
