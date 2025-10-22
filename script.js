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

    btnAnimar.addEventListener('click', animarEcoBit);

    
    setTimeout(animarEcoBit, 500); 

    
    document.addEventListener('mousemove', (e) => {
        const olhoEsquerdo = ecobitMascote.querySelector('.olho.left::after');
        const olhoDireito = ecobitMascote.querySelector('.olho.right::after');

      

        
        const rect = ecobitMascote.getBoundingClientRect();
        const estaPerto = e.clientX > rect.left - 100 && e.clientX < rect.right + 100 &&
                          e.clientY > rect.top - 100 && e.clientY < rect.bottom + 100;

        if (estaPerto && !ecobitMascote.classList.contains('shake')) {
            ecobitMascote.classList.add('shake');
        } else if (!estaPerto && ecobitMascote.classList.contains('shake')) {
            setTimeout(() => {
                ecobitMascote.classList.remove('shake');
            }, 300); 
        }
    });

    dicasLista.querySelectorAll('.dica-item').forEach(item => {
        
        item.parentNode.addEventListener('mouseenter', (e) => {
            const coresAleatorias = ['#FFD54F', '#81D4FA', '#A7E295']; 
            const cor = coresAleatorias[Math.floor(Math.random() * coresAleatorias.length)];
            e.currentTarget.style.backgroundColor = cor;
            e.currentTarget.style.transform = 'scale(1.02)';
        });

        
        item.parentNode.addEventListener('mouseleave', (e) => {
            e.currentTarget.style.backgroundColor = 'var(--verde-claro)';
            e.currentTarget.style.transform = 'scale(1)';
        });
    });

});
