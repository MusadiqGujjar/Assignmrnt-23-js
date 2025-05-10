// // Chapter 21 (Changing Case)

// 1: var allLower = userInput.toLowerCase();

// 2: x = x.toLowerCase();

// 3: y = y.toUpperCase();

// 4: var1 = myString.toLowerCase();

// 5: lowerItem = myArray[0].toLowerCase();

// 6: alert(myVar.toUpperCase());

// 7: var cityName = "kaRacHi";
//     var formattedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// // Chapter 22-25 (Strings)

// 1: var sameWords = "captain";
//     var segment = sameWords.slice(1, 3);  // "ap"

// 2: var str = "example";
//     var numChars = str.length;

// 3: var animal = "elephant";
//     var seg = animal.slice(2, 6);  // "epha"

// 4: var message = "Hello world";
//     var lengthOfMessage = message.length;

// 5: var str = "programming";
//     var len = str.length;
//     var result = str.slice(1, len - 3);  // "rogramm"

// 6: var text = "To be or not to be.";
//     var indx = text.indexOf("be");  // 3

// 7: var text = "To be or not to be.";
//     var indx = text.lastIndexOf("be");  // 16

// 8: var text = "Let's go where we go.";
//     var indx = text.lastIndexOf("go");  // e.g., 18

// 9: if (indexNum >= 0 && indexNum < myString.length) {

// 10: var letter = "abcde".charAt(2);  // "c"

// 11: var text = "JavaScript is fun!";
//     var cha = text.charAt(9);  // "r"

// 12: var str = "openAI";
//     var x = str.charAt(str.length - 1);  // "I"

// 13: var cha = input.charAt(4);  // Index 4 is 5th character


// 14: if (myString.charAt(2) === "x") {


// 15: var myString = "hello";
//     var myArray = [];
//     for (var i = 0; i < myString.length; i++) {
//     myArray[i] = myString.charAt(i);
//     }


// 16: var reply = "no problem, no issue";
//     var revisedReply = reply.replace("no", "yes");  // "yes problem, no issue"

// // Chapter 26 (Rounding Numbers)

// 1: var rounded = Math.round(num);

// 2: var roundNum = Math.ceil(origNum);

// 3: var roundNum = Math.floor(origNum);

// 4: var result = Math.round(myNumber);

// 5: var roundedValue = Math.floor(0.5);

// // Chapter 27 (Random Numbers)

// 1: var randomNum = Math.floor(Math.random() * 50) + 1;

// 2: var rand = Math.random();

// 3: var dice = Math.floor(Math.random() * 6) + 1;
//     console.log("You rolled: " + dice);

// 4: var toss = Math.random() < 0.5 ? "Heads" : "Tails";
//     console.log("You got: " + toss);

// // Chapter 28-29 (Converting Strings)

// 1: var num = parseInt("123");

// 2: function convertToInteger(str) {
//     return parseInt(str);
//     }

// 3: var floatNum = parseFloat("3.14");

// 4: function isNumeric(value) {
//     return !isNaN(value) && value.trim() !== "";
//     }

// 5: var str = String(42);
//     // or
//     var str2 = (42).toString();

// 6: function convertToString(num) {
//     return num.toString();
//     }

// 7: var intNum = parseInt("3.14");  // Result: 3

// // Chapter 30 (Controlling the Length of Decimals)

// 1: var newNum = num.toFixed(4);

// 2: if (num.toFixed(2).length > 4)

// 3: var preciseNum = 3.1415926535;
//     alert(preciseNum.toFixed(2));

// 4: var preciseNum = 3.1415926535;
//     alert(preciseNum.toFixed(2));