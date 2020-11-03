  /* EXERCISE 1 (EXAMPLE)
            Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
            */

  function area(l1, l2) {
  	return l1 * l2;
  }

  /* EXERCISE 2
      Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
      */

  function crazySum(n1, n2) {
  	if (n1 == n2)
  		return n1 * 6 //(n1 + n1) * 3
  	else
  		return n1 + n2

  	//return n1 == n2 ? n1 * 3 : n1 + n2
  }

  /* EXERCISE 3
  Write a function "crazyDiff" that computes the
  absolute difference between a given number and 19.
  Returns triple their absolute difference if
  the specified number is greater than 19.
  */

  function crazyDiff(n1) {
  	if (n1 > 19)
  		return Math.abs(n1 - 19) * 3

  	return Math.abs(n1 - 19)

  	// return n1 > 19 ? Math.abs(n1 - 19) * 3 : Math.abs(n1 - 19)
  }


  /* EXERCISE 4
  Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
  */

  function boundary(N) {
  	//n = parseInt(prompt('Give me a num bro'))
  	if (N >= 20 && N <= 100 || N === 400) {
  		return true
  	} else {
  		return false
  	}

  	//return (N >= 20 && N <= 100 ||N === 400)
  }


  /* WRITE YOUR CODE HERE */

  /* EXERCISE 5
  Write a function "strivify" which accepts a string S.
  Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
  */

  function strivify(S) {
  	// "Strive is a school"
  	// [Strive, is, a, school]
  	// ---^

  	arr = S.split(" ");
  	if (arr[0] == "Strive") {
  		return S;
  	} else {
  		return false;
  	}
  }

  function strivify(S) {
  	//indexOf is returning the position in the string in which the String you are searching begins
  	//If the string you are searching is not in the whole string, it returns -1

  	if (S.indexOf("Strive") == 0) { //if it starts with Strive
  		return S
  	} else {
  		return "Strive" + S
  	}

  	return S.indexOf("Strive") == 0 ? S : "Strive" + S
  }

  // function strivify(userString){
  //     switch(userString){
  //         case "S":
  //             return userString+"trive";
  //             break;
  //         case "Strive":
  //         case "STRIVE":
  //             return userString;
  //         default:
  //             {
  //                 if (userString.indexOf("Strive") == 0 || userString.indexOf("STRIVE") == 0){
  //                     return userString;
  //                 } else {
  //                     return console.log('String not accpeted. Try again with "S" or "Strive" or "STRIVE"');
  //                 };
  //             }
  //     }
  // };


  /* WRITE YOUR CODE HERE */

  /* EXERCISE 6
    Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
    HINT: Module Operator
    */

  function check3and7(number) {
  	if (number % 3 == 0) {
  		return "It'/s a multiple of 3";
  	} else if (number % 7 == 0) {
  		return "It is a multiple of 7";
  	} else {
  		return "Not a multiple of 3 or 7";
  	}
  }


  /* WRITE YOUR CODE HERE */

  /* EXERCISE 7
    Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
    */

  function reverseString(text) {
  	return text
  		.split("")
  		.reverse()
  		.join("");
  }

  function reverseString(str) {
  	var newString = "";
  	for (var i = str.length - 1; i >= 0; i--) {
  		newString = newString + str[i];
  	}
  	return newString;
  }



  /* WRITE YOUR CODE HERE */

  /* EXERCISE 8
    Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
    */

  function upperFirst(text) {
  	var wordPieces = text.split(" "); //splitting the words on the space
  	for (var i = 0; i < wordPieces.length; i++) { //for each word of the sentence
  		var word = wordPieces[i].charAt(0).toUpperCase(); //it's making the uppercase of the first letter
  		wordPieces[i] = word + wordPieces[i].substr(1); //replacing it
  	}
  	return wordPieces.join(" "); //rejoin the several words
  }

  /* WRITE YOUR CODE HERE */

  /* EXERCISE 9
  Write a function "cutString" to create a new string without the first and last character of a given string.
  */

  function cutString(myStr) {
  	var newStrWord = myStr.substr(1).slice(0, -1);
  	return newStrWord;
  }

  cutString("soft");


  /* WRITE YOUR CODE HERE */

  /* EXERCISE 10
  Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
  */

  function giveMeRandom(n) {
  	//var n = prompt('Give me a num bro\'')
  	var firstArray = Array.from({
  		length: n
  	}, () => Math.floor(Math.random() * n));
  	return (firstArray)
  }

  function giveMeRandom(n) {
  	var arryNumbers = [];
  	for (var i = 0; i < n; i++) {
  		arryNumbers.push(Math.floor(Math.random() * 11));
  	}
  	return arryNumbers;
  }
