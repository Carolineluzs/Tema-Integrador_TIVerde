document.addEventListener('DOMContentLoaded', () => {
    const ecobitMascote = document.getElementById('ecobit-mascote');
    const btnAnimar = document.getElementById('btn-animar');
    const dicasLista = document.getElementById('dicas-lista');
    
  
    function animarEcoBit() {
        
        ecobitMascote.classList.remove('jump', 'shake'); 
        
      
        ecobitMascote.classList.add('jump');


        setTimeout(() => {
            ecobitMascote.classList.remove('jump');
            // Adiciona um pequeno "shake" após o pouso
            ecobitMascote.classList.add('shake');
            
            // Remove o shake
            setTimeout(() => {
                ecobitMascote.classList.remove('shake');
            }, 300);

        }, 500); 
    }
}    