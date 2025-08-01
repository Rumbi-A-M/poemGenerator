let poemGenerator = document.getElementById("#poemGen");
poemGenerator.addEventListener('submit', generatePoem);

function generatePoem(event){
    event.preventDefault();

    new Typewriter('#poem', {
  strings: ['Hello', 'World'],
  autoStart: true,
});

}