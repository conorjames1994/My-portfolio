


let nextButton = document.getElementById('next');
let backButton = document.getElementById('back');


let reviewArray = ['"Very useful" -Kelly', '"Helpful" - Ryan', '"5* from me"- Sarah', '"Took too long"- Mary', '"Helped a lot"-Dave', '"Good"-Robert', '"Average"-charlotte'];

let i = 0;

const next = (nextButton) => {
  i++;
  let insert = reviewArray[i];
  document.getElementById('jsinsert').innerHTML = insert;
  
}


const back = (backButton) => {
  if(i === 0){
    let insert = reviewArray[i];
  document.getElementById('jsinsert').innerHTML = insert;
    return i

  }
  else if (i > 0){
    i--;
    let insert = reviewArray[i];
  document.getElementById('jsinsert').innerHTML = insert;
  
  }
}









nextButton.addEventListener('click', next);
backButton.addEventListener('click', back)
document.getElementById('jsinsert').innerHTML = insert;


