const footer = document.querySelector('#footer');
const btn = document.querySelector('#button');
const templateprojects = document.querySelector('#templateprojects')
const background = document.querySelector('.primeiro');
const nav = document.querySelector('#nav');
const labs = document.querySelector('#labs')
const nome = document.querySelector('.nome')
const calculator= document.querySelector('.calculator');
const data = document.querySelector('.data');
const menubtn = document.querySelector('.menu-btn');
const templatcadeiras= document.querySelector('.templatcadeiras')  ;
const myimgae= document.querySelector('.my-image-container') ;
const sobremim = document.querySelector('#sobremim');
const aptidoes = document.querySelector('#aptidoes');
const tecnologias = document.querySelector('#tecnologias');
const bemvindo = document.querySelector('#bemvindo');
const colors = ['#7393B3','black'];
const colors1 = ['white','black'];
const projectos = document.querySelector('#projectos');
let index=0;
btn.addEventListener('click',function buttonColor(){
    if(index==0){
        index=1;
        background.style.filter= "brightness(60%)" ; 
      
    }else{
    index =0;
   background.style.filter= "brightness(100%)" ; 

  }
  background.style.color =colors1[index]
  bemvindo.style.color =colors1[index]
  sobremim.style.backgroundColor=colors[index]
  projectos.style.backgroundColor=colors[index]
  templatcadeiras.style.backgroundColor=colors[index]
  templateprojects.style.backgroundColor=colors[index]
  nome.style.backgroundColor=colors[index]
  footer.style.backgroundColor = colors[index]
  nav.style.backgroundColor = colors[index]
  data.style.backgroundColor = colors[index]
  menubtn.style.backgroundColor = colors[index]
  calculator.style.backgroundColor = colors[index]
  aptidoes.style.backgroundColor = colors[index]
  tecnologias.style.backgroundColor = colors[index]
  myimgae.style.backgroundColor = colors[index]
  



});
function calculate() {
    const expression = document.getElementById('expression').value;
    const result = eval(expression);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  }
  
  
  function clearResult() {
    document.getElementById('result').innerHTML = '';
  }


  function addMyCaption() {
    const caption = document.getElementById('my-caption').value;
    document.getElementById('my-caption-text').innerHTML = caption;
  }
 
      function exibirNome() {
        var nome = document.getElementById("nome").value;
        document.getElementById("nome1").innerHTML = nome;
        document.getElementById("nome2").innerHTML = nome;
        document.getElementById("nome3").innerHTML = nome;
      }
     
      var hoje = new Date();

    
      var meses = [
        "janeiro", "fevereiro", "março",
        "abril", "maio", "junho",
        "julho", "agosto", "setembro",
        "outubro", "novembro", "dezembro"
      ];

      var dia = hoje.getDate();
      var mes = hoje.getMonth();
      var ano = hoje.getFullYear();

      var dataFormatada = dia + " de " + meses[mes] + ", " + ano;

   
      document.getElementById("data").innerHTML = dataFormatada;
      btn.addEventListener("mouseover", function() {
        btn.style.color = "lightblue";
      });
      btn.addEventListener("mouseout", function() {
        btn.style.color = "navy";
      });
      