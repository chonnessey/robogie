// Business Logic

function roboBop(number) {
  let robogerArray = [];
  // const inputNumber = number.split(' ');
  for (let i = 0; i <= number; i++) {
    const index = [i].toString();
    robogerArray.push(index)
    if(index.includes("1")) {
      robogerArray.splice(i, 1, "Beep!")
    }
  }
}

// UI Logic
