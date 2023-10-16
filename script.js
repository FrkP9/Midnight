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
  
