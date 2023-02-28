function defineSuit(card) {
  if(card.includes('♣')==true){
    return 'clubs';
  }
    if(card.includes('♦')==true){
    return 'diamonds';
  }
    if(card.includes('♥')==true){
    return 'hearts';
  }
    if(card.includes('♠')==true){
    return 'spades';
  }
}