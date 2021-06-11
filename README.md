Describe: roboBop()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: roboBop("0")
Expected Output: ["0"]

Test: "It should return an array with 0 to index of inputted number"
Code: roboBop("3")
Expected Output: ["0", "1", "2", "3"]

Test: "It should return an array with "Beep!" in place of numbers that include "1"
Code: roboBop("3")
Expected Output: ["0", "Beep", "2", "3"]