# _Roboger's Neighborhood_

#### _This project takes a number inputted by the user and returns a response depending on the number._


#### By _**Adrian Camacho**_

## Technologies Used :floppy_disk:

* _HTML_
* _CSS_
* _VS code_
* _Bootstrap_
* _JavaScript_
* _JQuery 3.6.0_

## Description :pencil:

_This application asks the user to input a number and gives a response depending on the number. If the number includes 1, it returns "Beep!". If it includes 2, it returns "Boop!". Lastly, If it includes 3, it returns "Won't you be my neighbor?". The exceptions are written from most important to least important. 3 is the most important and 1 is the least. The application uses a `for` loop to loop through an `array` and check if these conditions are met._

## Specs :pushpin:

Describe: `roboBop()`

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: `roboBop("0")`
Expected Output: `["0"]`

Test: "It should return an array with 0 to index of inputted number"
Code: `roboBop("3")`
Expected Output: `["0", "1", "2", "3"]`

Test: "It should return an array with "Beep!" in place of numbers that include "1"
Code: `roboBop("3")`
Expected Output: `["0", "Beep!", "2", "3"]`

Test: "It should return an array with "Boop!" in place of numbers that include "2"
Code: `roboBop("3")`
Expected Output: `["0", "Beep!", "Boop!", "3"]`

Test: "It should return an array with "Boop!" in place of numbers that include "2"
Code: `roboBop("3")`
Expected Output: `["0", "Beep!", "Boop!", "Won't you be my neighbor?"]`


## Setup/Installation Requirements :triangular_ruler:

* Clone this repo: `git clone https://github.com/chonnessey/robogie.git`
* Navigate to directory `cd survey`
* Open file into a text editor of your choosing.
* Open `index.html` in your browser.
* Input a number in the application to see your results!


## Known Bugs :bug:

* _No Known Bugs._ 

## License :guardsman:

MIT &copy; 2021 _Adrian Camacho_

## Contact Information :mailbox:

_Adrian Camacho: adriancamacho18@gmail.com_
