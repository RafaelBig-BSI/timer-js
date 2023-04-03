function relogio(){

    function criaHoraDosSegundos(segundos){

        const data = new Date(segundos * 1000); //Obter milésimos de segundos
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector(".relogio");
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
    
        timer = setInterval(function() {
            
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e){
        //console.log(e.target); //"Target" pega qual elemento foi clicado
    
        const elemento = e.target;
        if(elemento.classList.contains('zerar')){
    
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    
        if(elemento.classList.contains('iniciar')){
    
            relogio.classList.remove('pausado');
            clearInterval(timer); //evitar criar dois timers
            iniciaRelogio();
        }
    
        if(elemento.classList.contains('pausar')){
    
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    });
}

relogio();