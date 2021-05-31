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

// genero un numero casuale da 1 a 6 per l'utente e uno per il computer
nUser = Math.floor(Math.random() * 6) + 1;
output.innerHTML += "</br>Hai lanciato un dado: il risultato è " + nUser;

nComputer = Math.floor(Math.random() * 6) + 1;
output.innerHTML += "</br>Il computer ha lanciato un dado: il risultato è " + nComputer;

// ora verifico quale dei due numeri è più alto e in base al risultato fornisco all'utente un output sul vincitore
if (nUser > nComputer) {
    output.innerHTML += "</br>Hai vinto!!";
} else if (nUser === nComputer) {
    output.innerHTML += "</br>Pareggio.";
} else {
    output.innerHTML += "</br>Hai perso!";
}