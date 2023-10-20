const phrases = [
    "Midnight - Aromas e Sabores",
    "Midnight - Café e Reflexões",
    "Midnight - Café o elixir da vida.",
    // Adicione quantas frases desejar
  ];
  
  let index = 0;
  
  function updateTitle() {
    document.title = phrases[index];
    index = (index + 1) % phrases.length;
  }
  
  setInterval(updateTitle, 4000); // Altere o intervalo de exibição conforme necessário (em milissegundos)
  


   // Referenciar o vídeo, o áudio e as imagens
   const video = document.getElementById("video-bg");
   const audio = document.getElementById("background-audio");
   const playImage = document.getElementById("play-image");
   const pauseImage = document.getElementById("pause-image");

   // Adicionar um ouvinte de evento para a imagem de "Play"
   playImage.addEventListener("click", function() {
       video.play(); // Iniciar o vídeo
       audio.play(); // Iniciar o áudio
       // Trocar visibilidade das imagens
       playImage.style.display = "none";
       pauseImage.style.display = "inline";
   });

   // Adicionar um ouvinte de evento para a imagem de "Pause"
   pauseImage.addEventListener("click", function() {
       video.pause(); // Pausar o vídeo
       audio.pause(); // Pausar o áudio
       // Trocar visibilidade das imagens
       pauseImage.style.display = "none";
       playImage.style.display = "inline";
   });