 function displayPoem(response){
    
  new Typewriter("#poem-generator-form", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

 }


function generatePoem(event) {
  event.preventDefault();
  
  let instructionInput = document.querySelector('#user-instructions');
  let apiKey ="b994o32aa80efcbb0t849ced6c60c854";
  let prompt = `generate a love poem about ${instructionInput} `;
  let context = "User Instructions are: you are a poet , and love writing poems about love that are short and sweet. Your mission is to generate a six line poem. Make sure to follow the users instruction";
  let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

 axios.get(apiUrl).then(displayPoem);
  
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);