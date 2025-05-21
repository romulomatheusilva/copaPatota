const votosFinal = {
    cfc: 0,
    estressados: 0,
    chupisco: 0,
    monobola: 0
  };
  
  function votarFinal(time) {
    votosFinal[time]++;
    atualizarResultado();
    salvarLocalStorage();
  }
  
  function atualizarResultado() {
    document.getElementById('final-cfc').textContent = votosFinal.cfc;
    document.getElementById('final-estressados').textContent = votosFinal.estressados;
    document.getElementById('final-chupisco').textContent = votosFinal.chupisco;
    document.getElementById('final-monobola').textContent = votosFinal.monobola;
  }
  
  function salvarLocalStorage() {
    localStorage.setItem('votosFinal', JSON.stringify(votosFinal));
  }
  
  function carregarVotos() {
    const salvos = JSON.parse(localStorage.getItem('votosFinal'));
    if (salvos) {
      Object.assign(votosFinal, salvos);
      atualizarResultado();
    }
  }
  
  const jogosFixos = [
    { id: 'jogo1', timeA: 'cfc', timeB: 'monobolas' },
    { id: 'jogo2', timeA: 'chupiscos', timeB: 'estressados' },
    { id: 'jogo3', timeA: 'cfc', timeB: 'estressados' },
    { id: 'jogo4', timeA: 'chupiscos', timeB: 'monobolas' },
    { id: 'jogo5', timeA: 'chupiscos', timeB: 'cfc' },
    { id: 'jogo6', timeA: 'monobolas', timeB: 'estressados' }
  ];
  
  const nomesTimes = {
    cfc: 'CFC',
    estressados: 'Estressados FC',
    chupiscos: 'Chupisco FC',
    monobolas: 'Monobola RFC'
  };
  
  const imagensTimes = {
    cfc: 'cabaco.jpg',
    estressados: 'estressados.jpg',
    chupiscos: 'chupisco.jpg',
    monobolas: 'monobola.jpg'
  };
  
  // Gera a aposta múltipla com os 6 jogos fixos
  function gerarApostaMultipla() {
    const container = document.getElementById('selecao-jogos-multiplos');
    container.innerHTML = '';
  
    jogosFixos.forEach((jogo, index) => {
      const bloco = document.createElement('div');
      bloco.className = 'jogo';
      const nomeJogo = `Jogo ${index + 1}`;
  
      bloco.innerHTML = `
        <div><strong>${nomeJogo}</strong></div>
        <label>
          <input type="radio" name="${jogo.id}" value="${jogo.timeA}" required>
          <img src="../img/${imagensTimes[jogo.timeA]}" class="team-logo">
          ${nomesTimes[jogo.timeA]}
        </label>
        <label>
          <input type="radio" name="${jogo.id}" value="${jogo.timeB}" required>
          <img src="../img/${imagensTimes[jogo.timeB]}" class="team-logo">
          ${nomesTimes[jogo.timeB]}
        </label>
      `;
      container.appendChild(bloco);
    });
  }
  
  // Salva aposta múltipla no localStorage
  function salvarApostaMultipla(event) {
    event.preventDefault();
    const apostas = {};
    let preenchido = true;
  
    jogosFixos.forEach(jogo => {
      const selecionado = document.querySelector(`input[name="${jogo.id}"]:checked`);
      if (selecionado) {
        apostas[jogo.id] = selecionado.value;
      } else {
        preenchido = false;
      }
    });
  
    if (!preenchido) {
      alert("Você precisa votar em todos os 6 jogos.");
      return;
    }
  
    localStorage.setItem("aposta_multipla", JSON.stringify(apostas));
    mostrarApostaMultipla();
  }
  
  // Mostra apostas feitas
  function mostrarApostaMultipla() {
    const apostas = JSON.parse(localStorage.getItem("aposta_multipla"));
    const div = document.getElementById("resultado-multipla");
  
    if (!apostas) {
      div.innerHTML = "Nenhuma aposta múltipla registrada ainda.";
      return;
    }
  
    let html = "<strong>Seus palpites:</strong><br>";
    jogosFixos.forEach((jogo, index) => {
      const vencedor = apostas[jogo.id];
      html += `Jogo ${index + 1}: <strong>${nomesTimes[vencedor]}</strong><br>`;
    });
  
    div.innerHTML = html;
  }
  
  // Inicialização
  document.addEventListener('DOMContentLoaded', () => {
    gerarApostaMultipla();
    mostrarApostaMultipla();
    carregarVotos();
  
    document.getElementById("form-multipla").addEventListener("submit", salvarApostaMultipla);
  });
  