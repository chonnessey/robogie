// Business Logic


function roboBop(number) {
  let robogerArray = [];
  for (let i = 0; i <= number; i++) {
    const index = [i].toString();
    robogerArray.push(index)
    if(index.includes("3")) {
      robogerArray.splice(i, 1, "Won't you be my neighbor?")
    } else if(index.includes("2")) {
      robogerArray.splice(i, 1, "Boop!")
    } else if(index.includes("1")) {
      robogerArray.splice(i, 1, "Beep!")
    } else {
      robogerArray[i]
    }
  }
  return robogerArray;
}



// UI Logic

$(document).ready(function() {
  $("#roboger").submit(function(event) {
    event.preventDefault();
    const userNumber = $("#input").val();
    let robogerArray = roboBop(userNumber)
    
    $("#result").text(robogerArray);
  })
  $("#reverse").click(function() {
    let reverseBop = robogerArray.reverse();
    $("#reverse-result").text(reverseBop)
  })
})
