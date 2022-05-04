const quiz1 = function (opcoes){
  switch (opcoes) {
    case 'opcao_incorreta1':
      document.getElementById('resp_quiz1').innerHTML =
        'Sinto muito, o seu nível de inteligência é baixo :(\n A resposta correta é: 6 patas.'
        document.getElementById('img1').src = "https://i.gifer.com/mMX.gif"
      break;
      
      case 'opcao_correta1' :
        document.getElementById('resp_quiz1').innerHTML =
          'Parabéns, você acertou!'
          document.getElementById('img1').src = "https://c.tenor.com/Nz_vlGMgXV0AAAAM/done-congrats.gif"
      break;
  }
}
const quiz2 = function (opcoes){
   switch (opcoes) {
       case 'opcao_incorreta2':
          document.getElementById('resp_quiz2').innerHTML =
            'Sinto muito, você errou.\n A resposta correta é: Pinguim'
            document.getElementById('img2').src =  "https://media4.giphy.com/media/jxETRYAi2KReel7pqy/giphy.gif"
        break;
        
        case 'opcao_correta2' :
          document.getElementById('resp_quiz2').innerHTML =
            'Parabéns, você acertou!'
            document.getElementById('img2').src = "https://c.tenor.com/5YZ00mWUlhoAAAAC/penguin-omw.gif"
        break;
    }
}
const quiz3 = function (opcoes){
  switch (opcoes) {
      case 'opcao_incorreta3':
        document.getElementById('resp_quiz3').innerHTML =
          'Sinto muito, você errou.\n A resposta correta é: 9 ovelhas.'
        document.getElementById("img3").src = "https://c.tenor.com/QcJzmi7gxsIAAAAM/mrbean-angry.gif"
      break;
      
      case 'opcao_correta3' :
        document.getElementById('resp_quiz3').innerHTML =
          'Parabéns, você é top!'
        document.getElementById("img3").src = "https://c.tenor.com/5e7fnEmHLcoAAAAM/approved-shaun-the-sheep.gif"
      break;
    }
} 
const quiz4 = function (opcoes){
  switch (opcoes) {
      case 'opcao_incorreta4':
        document.getElementById('resp_quiz4').innerHTML =
          'Que decepção, você errou.\n A resposta correta é: falcão–peregrino'
        document.getElementById("img4").src = "https://cdn141.picsart.com/316087594155211.png?type=webp&to=min&r=240"
      break;
      
      case 'opcao_correta4' :
        document.getElementById('resp_quiz4').innerHTML =
          'Parabéns, resposta correta!'
        document.getElementById("img4").src = "https://4.bp.blogspot.com/-PQvPZIojbLQ/V3bL46qJB0I/AAAAAAAAWVU/lVAFa7ZSncUQze1Emgu_rrrObz2OjlyDACLcB/s400/Gif%2BCalopsita%2BDan%25C3%25A7ando.gif"
      break;
    }
} 
const quiz5 = function (opcoes){
  switch (opcoes) {
      case 'opcao_incorreta5':
        document.getElementById('resp_quiz5').innerHTML =
          'Você errou de novo.\n A resposta correta é: Maine-Coon'
        document.getElementById("img5").src = "https://i.gifer.com/WISU.gif"
      break;
      
      case 'opcao_correta5' :
        document.getElementById('resp_quiz5').innerHTML =
          'Parabéns, você é demais!'
        document.getElementById("img5").src = "https://c.tenor.com/5bH3P9fg7poAAAAd/cute-cat.gif"
      break;
    }
} 