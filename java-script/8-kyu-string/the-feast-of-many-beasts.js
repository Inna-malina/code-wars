// (feast("great blue heron", "garlic naan"), true)
// ("brown bear", "bear claw"), false)

function feast(beast, dish) {
  let beastFirst = beast[0];
  let beastLast = beast[beast.length-1];

  let dishFirst = dish[0];
  let dishLast = dish[dish.length-1];

  if(beastFirst==dishFirst && beastLast==dishLast){
    console.log(true);
  }
  else{
    console.log(false);
  }
}

feast("great blue heron", "garlic naae");