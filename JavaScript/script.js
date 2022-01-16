const img = document.querySelector('.lampada')
const btnLigar = document.querySelector('.ligar')
const btnDesligar = document.querySelector('.desligar')

//botao desligar começa desabilitado
btnDesligar.setAttribute('disabled', 'true')

function ligar(){
    //troca a imagem da lampada para a ligada
    img.setAttribute('src', 'img/ligada.jpg')
    //desativa o botão de ligar já que a lampada esta ligada
    btnLigar.setAttribute('disabled', 'true')
    //ativa o botão de desligar a lampada
    btnDesligar.removeAttribute('disabled')
}

function desligar(){
    //troca a imagem da lampada para a desligada
    img.setAttribute('src', 'img/desligada.jpg')

    //ativa o botão de ligar a lampada que estava desligado quando a lampada estava ligada
    btnLigar.removeAttribute('disabled')

    //desativa o botão de desligar a lampada já que a lampada está desligada
    btnDesligar.setAttribute('disabled', 'true')
}

function quebrar(){
    //troca a imagem da lampada para a lampada quebrada
    img.setAttribute('src', 'img/quebrada.jpg')
    //desabilita os botões de ligar/desligar a lampada já que ela agora está quebrada
    btnLigar.setAttribute('disabled', 'true')
    btnDesligar.setAttribute('disabled', 'true')

    //removeve opção de ligar/desligar a lampada com o mouse já que agora ela está quebrada
    img.removeEventListener('mouseover', ligar)
    img.removeEventListener('mouseleave', desligar)

    
}

//adiciona os eventos de listenner aos botões
btnLigar.addEventListener('click', ligar)
btnDesligar.addEventListener('click', desligar)

//adiciona o evento de listenner para quebrar a lampada com duplo click
img.addEventListener('dblclick', quebrar)

//adiciona opção de ligar/desligar a lampada com a entrada/saída
//do cursor do mouse sobre a imagem
img.addEventListener('mouseover', ligar)
img.addEventListener('mouseleave', desligar)
