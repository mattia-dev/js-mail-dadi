var output = document.getElementById('output'); //creo una variabile per l'output

//-----------PRIMO ESERCIZIO----------------------------------------------------------------------------------------------------------------------

// creo un array con una lista di email
var emailIscritti = ["abc@gmail.com", "def@gmail.com", "ghi@gmail.com", "mattiaferrari@gmail.com", "jkl@gmail.com", "mno@gmail.com"];

// chiedo all'utente di inserire la sua email, così da controllare che sia presente nel sistema
var userEmail = prompt("Inserisci la tua email.");

var check = false; //stabilisco una variabile booleana che deve diventare vera solo nel caso la email dell'utente sia presente nel sistema

// ora inizio un ciclo for per verificare la presenza della email dell'utente nel sistema
for (var i = 0; i < emailIscritti.length; i++) {
    if (emailIscritti[i] === userEmail) {
        check = true;
    }
}

// ora controllo se chech è true o false e in base al risultato fornisco un output all'utente
if (check) {
    output.innerHTML = "Email verificata. Accesso consentito.";
} else {
    output.innerHTML += "Email non trovata. Accesso negato.";
}


//-----------SECONDO ESERCIZIO-------------------------------------------------------------------------------------------------------------------

n = Math.random();
output.innerHTML += "</br>" +  n;

nFloored = Math.floor(n * 100) + 1;
output.innerHTML += "</br>" + nFloored;