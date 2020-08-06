const getRandomArray = (length, min, max) => {
    const randomArray =[];
    for(i=0; i<length; i++){
        randomArray.push(Math.floor(Math.random()* max + min));
    } return randomArray;
}

const getModa = (...numbers) => {
    return numbers.sort((a, b) =>
    numbers.filter(v => v === a).length -
    numbers.filter(v => v === b).length
    ).pop();
}

const getAverage = (...numbers) => {
    let sum = numbers.reduce((a, b) => a + b, 0);
    let result = sum / numbers.length;
    return result;
}


const getMedian = (...numbers) => {
    numbers.sort((a, b) => a - b);
    if (numbers.length % 2 === 0) {
        return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    } else {
        return numbers[(numbers.length - 1) / 2];
    }
}

const filterEvenNumbers = (...numbers) => {
    let result = numbers.filter(el => el % 2 !== 0);
    return result;
}

const countPositiveNumbers = (...numbers) => {
    let positiveNumbers = numbers.filter(v => v > 0).length;
    return positiveNumbers;
}

const getDividedByFive = (...numbers) => {
    return numbers.filter(el => el % 5 === 0)
}

const badWords = ["fuck", "shit"];

function replaceBadWords(string) {

  let arr = string.split(" ");
  const swap = new RegExp(badWords.join("|"));
  arr = arr.map((word) => word.replace(swap, "****"));
  return arr.join(" ");
}

function divideByThree(word) {
    const threeLetter = [];
    for (let i = 0; i < word.length; i += 3) {
      if (3 > word.length - i) {
        threeLetter.push(word.slice(i));
      } else {
        threeLetter.push(word.slice(i, i + 3));
      }
    }
    return threeLetter;
  };

function permute(string) {
    function recur(string, prefix) {
        if (string.length === 0) {
            return [prefix];
        } else {
            var out = [];
            for (var i = 0; i < string.length; i++) {
                var pre = string.substring(0, i);
                var post = string.substring(i + 1);
                out = out.concat(recur(pre + post, string[i] + prefix));
            }
            return out;
        }
    }
    var distinct = {};
    recur(string, "").forEach(function(result) {
        distinct[result] = true;
    });
    return Object.keys(distinct);
}



document.getElementById('RandomArray').innerHTML = "Функция1 - " + getRandomArray(15,1,100);
document.getElementById('getModa').innerHTML = "Функция2 -  " + getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
document.getElementById('getAverage').innerHTML = "Функция3 - " + getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
document.getElementById('getMedian').innerHTML = "Функция4 - " + getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
document.getElementById('filterEvenNumbers').innerHTML = "Функция5 - " + filterEvenNumbers(1, 2, 3, 4, 5, 6);
document.getElementById('countPositiveNumbers').innerHTML = "Функция6 - " + countPositiveNumbers(1, -2, 3, -4, -5, 6);
document.getElementById('getDividedByFive').innerHTML = "Функция7 - " + getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
document.getElementById('replaceBadWords').innerHTML = "Функция8 - " +replaceBadWords("Are you fucking kidding, stupid piece of shit?");
document.getElementById('divideByThree').innerHTML = "Функция9 - " + divideByThree("LegionCommander".toLowerCase());
document.getElementById('permute').innerHTML = "Функция10 - " + permute("man");
