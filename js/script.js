var btt = document.querySelector('#botoesNav')
var cab = document.querySelector('#nav')
var a = cab.style.maxWidth 

// Header do mobile
function mudar (){

    if (btt.className == 'desativado' ){
        btt.className = 'ativado'
    }
    else{
        btt.className  = 'desativado'
    }}

function fechar (){
    btt.className = 'desativado'
}

var contUm = 1

// Icones das linguagens
function mostrarIcons () {
var icons = document.querySelector('#iconsLang')
var seta = document.querySelector('#setaIcons')
  

    if (contUm == 1 ) {
        icons.style.display = 'none'
        seta.innerHTML = 'ᐁ'

        contUm = 0   
    } else {
        icons.style.display = 'flex'
 
        seta.innerHTML = `ᐃ`
        contUm = 1
    } 
}

var contDois = 0 //true
//1 = false
function mostrarRS () {
    var text = document.getElementById('txtClique')
var iconesE = document.querySelector('#iconesE')
var iconesD = document.querySelector('#iconesD')
var link = document.querySelector('#linkedin')
var insta = document.querySelector('#instagram')
var gmail = document.querySelector('#gmail')
var git = document.querySelector('#github')


if (contDois == 0){
    iconesD.style.height = '70px'
    iconesE.style.height = '70px'

    link.style.opacity = '1'
    insta.style.opacity = '1'
    gmail.style.opacity = '1'
    git.style.opacity = '1'
    contDois = 1
 // ᐅ ᐊ
} else if (contDois == 1){

    iconesD.style.height = '0.1px'
    iconesE.style.height = '0.1px'

    link.style.opacity = '0'

    insta.style.opacity = '0'
    gmail.style.opacity = '0'
    git.style.opacity = '0'
    contDois = 0
}

}

var contTres = 1
function mudarBox () {
var box = document.getElementById('txtBoxUm')
var um = document.getElementById('txtBoxUm').innerHTML
var dois = document.getElementById('txtBoxDois').innerHTML
var tres = document.getElementById('txtBoxTres').innerHTML
    

if (contTres == 1){
box.innerHTML = dois
contTres = 2
}
else if (contTres == 2){
box.innerHTML = tres
contTres = 3
}
else if (contTres == 3){
box.innerHTML = 'SOU DESENVOLVEDOR FRONT- END USANDO PRINCIPALMENTE HTML, CSS E JAVASCRIPT, TODAVIA, COMO FAÇO MEUS PROJETOS SOZINHO, USO NODEJS PARA BACK-END E MYSQL COMO BANCO DE DADOS.'
contTres = 1
}


//setTimeout(() => {  mudarBox() }, 1000);
}
function email() {
navigator.clipboard.writeText('lcsaguilar01@gmail.com');
alert ('E-mail enviado para sua área de transferência!')
}


var contQuatro = 1
function mudarContainer () {
    var TCont = document.getElementById('txtPort1')
    var Tdois = document.getElementById('txtPort2').innerHTML
    var Ttres = document.getElementById('txtPort3').innerHTML
    var imgCont = document.getElementById("imgCont1")
    var tituloCont = document.getElementById('tituloCont')

    
    if (contQuatro == 1){
        imgCont.src = 'img/port/port2.png'
        TCont.innerHTML = Tdois
        tituloCont.innerHTML = 'ÚLTIMO TRABALHO'
        contQuatro = 2
    }
    else if (contQuatro == 2){
        imgCont.src = 'img/port/port3.png'
        TCont.innerHTML = Ttres
        tituloCont.innerHTML = 'ESSE PORTIFÓLIO'
        contQuatro = 3
    }
    else if (contQuatro == 3){
        imgCont.src = 'img/port/port1.png'
        TCont.innerHTML = 'Pelo menos uma vez na semana público algum código no meu GITHUB para aprofundar alguma ferramenta nova. Esses códigos são acessíveis para todos e sempre estou à disposição para falar sobre eles em caso de dúvidas.'
        tituloCont.innerHTML = 'ATIVIDADES GERAIS'
        contQuatro = 1
    }}