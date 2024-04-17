const tariffa = (0,21);

let UserAge = prompt ("Inserisci la tua età")

let UserKm = prompt ("Inserisci i km di distanza")

const costo = (UserKm * 'tariffa')

document.getElementById("costo").innerHTML = `Il costo del tuo biglietto è € ${costo}`

if (UserAge < 18) {
    console.log((costo / 100) * 80)
}

if (UserAge > 65) {
    console.log((costo / 100) * 60)
}