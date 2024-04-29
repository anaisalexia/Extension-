// load the json file with all the facts
import data from './data.json' assert { type: 'json' };

// chose a random number corresponding to a fact
var len_data = Object.keys(data).length ;
var rndInt = randomInteger(0, len_data - 1);
console.log(rndInt);

// Select the fact, question, choices ...
var fact = data[rndInt];
var len_choices = Object.keys(fact.Choices).length;
var choices = fact.Choices;
var answer = fact.Answer;

// Display the question
var html_p_question = document.getElementById("id_question");
html_p_question.textContent = fact.Question;

// Display the button with the choices
var html_p_choice = document.getElementById("id_choice");

for (let i = 0; i < len_choices  ; i++) {
  var button_choice = document.createElement("BUTTON");
  button_choice.textContent = choices[i];
  button_choice.setAttribute("class","c_button_choice");
  button_choice.setAttribute("name","button_choice_"+i);

  // Add event listener
  button_choice.addEventListener("click", function () {
    verify_choice(i);
  });

  let li = document.createElement('li');
  li.appendChild(button_choice);
  html_p_choice.appendChild(li);
  


  // html_p_choice.appendChild(button_choice);
  // html_p_choice.append("<br>")
}
// +: randomise the choice order

function verify_choice(nb_button){
  // get the button
  let clicked_button = document.getElementsByName("button_choice_"+nb_button)[0];
  let txt = document.getElementById("id_answer");


  if (clicked_button.textContent === answer) {
    txt.textContent = clicked_button.textContent + " : Correct Answer !" ;

  } else {
    txt.textContent = clicked_button.textContent + ": Wrong Answer, the correct answer was " + answer;
  }

  let txt_explanation = document.getElementById("id_explanation");
  txt_explanation.textContent = fact.Facts;
}


function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

