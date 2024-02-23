const accessiConsentiti = ["franco.verde@gmail.com","ciccio.rosso@gmail.com","matte.giallo@gmail.com","steo.nero@gmail.com","ugo.deughi@gmail.com"]

const btnJv = document.getElementById("btn")

const emailJs = document.getElementById("email");

btnJv.addEventListener('click',function(event){
  event.preventDefault();


  for (let i = 0; i < accessiConsentiti.length; i++) {
  if (emailJs.value == accessiConsentiti[i]) {
    document.getElementById("result").innerHTML = "Accesso acconsentito";

    } else {
      document.getElementById("result").innerHTML = "Accesso negato";

    }
  }
})


