var btt = $('#botoesNav')[0]
var cab = $('#header_nav')

// Header do mobile
function mudar_menu_nav (){

    if (btt.className == 'desativado' ){
        btt.className = 'ativado'
    }
    else {
        btt.className  = 'desativado'
    }}

function fechar (){
    btt.className = 'desativado'
}


var verificador_box_lang = 1
// Icones das linguagens
function mostrarIcons () {
var box_icons = $('#container_iconsLang')
var seta = $('#setaIcons')
var icons = $('.icones_linguagens')
  

    if (verificador_box_lang == 1 ) {
        seta.html('ᐁ')
            icons.css({
                transition: '1s',
                height: '0px'
                })

            setTimeout(() => {
                box_icons.css({
                    borderBottom: 'none' 
                })}, 1000); 

verificador_box_lang = 0

    } else {
        seta.html(`ᐃ`)
        icons.css({height: '100px'})
        box_icons.css({borderBottom: '1px solid white' })

verificador_box_lang = 1
    }}





var contDois = 0 //true
//1 = false
function mostrarRS () {
var iconesE = $('#iconesE')
var iconesD = $('#iconesD')
var link = $('#linkedin')
var insta = $('#instagram')
var gmail = $('#gmail')
var git = $('#github')
var allIcons = $('.IRS')

if (contDois == 0){
    iconesD.css({height: '70px',})
    iconesE.css({height: '70px',})    
    allIcons.css({
    display: 'flex',
    opacity: '0'})
    
    setTimeout(()=>{
    allIcons.css('opacity', '1')
    }, 1000)
    
    contDois = 1
 // ᐅ ᐊ
} else if (contDois == 1){

    allIcons.css('opacity', '0')

    setTimeout(()=>{
        
        allIcons.css('display', 'none')
        iconesD.css('height', '0.1px')
        iconesE.css('height', '0.1px')
        
    }, 1000)
    
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


