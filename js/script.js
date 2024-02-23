
/* SEZIONE E-MAIL*/

const accessiConsentiti = ["franco.verde@gmail.com","ciccio.rosso@gmail.com","matte.giallo@gmail.com","steo.nero@gmail.com","ugo.deughi@gmail.com"]

const btnJv = document.getElementById("btn")

const emailJs = document.getElementById("email");

btnJv.addEventListener('click',function(event){
  
  event.preventDefault();

  for (let i = 0; i < accessiConsentiti.length; i++) {
  if (emailJs.value == accessiConsentiti[i]) {
    document.getElementById("result").innerHTML = "Accesso acconsentito";
    i = accessiConsentiti.length;
    /*CI SAREBBE ANCHE IL RETUR*/

    } else {
      document.getElementById("result").innerHTML = "Accesso negato";

    }
  }
})

/*SEZIONE DADI*/

btnDice.addEventListener('click',function(){

  numeroGio = Math.ceil(Math.random() * 6);
  numeroPc = Math.ceil(Math.random() * 6);

  document.getElementById("resultDice-pc").classList.add("dice-style");

  document.getElementById("resultDice-gio").classList.add("dice-style");

  if (numeroGio > numeroPc) {

    document.getElementById("resultDice").innerHTML = "Hai vinto!";
    document.getElementById("resultDice-gio").innerHTML = numeroGio;
    document.getElementById("resultDice-pc").innerHTML = numeroPc;
    

    }else if(numeroGio == numeroPc){

    document.getElementById("resultDice").innerHTML = "Pareggio!";
    document.getElementById("resultDice-gio").innerHTML = numeroGio;
    document.getElementById("resultDice-pc").innerHTML = numeroPc;
    ;

    }else{

    document.getElementById("resultDice").innerHTML = "Hai perso!";
    document.getElementById("resultDice-gio").innerHTML = numeroGio;
    document.getElementById("resultDice-pc").innerHTML = numeroPc;
    
  }

})
