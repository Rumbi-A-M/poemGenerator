let poemGenerator = document.getElementById("#poemGen");
poemGenerator.addEventListener('submit', generatePoem);

function generatePoem(event){
    event.preventDefault();

    new Typewriter('#poemResult', {
  strings: ['La tombe dit à la rose'],
  autoStart: true,
});

}