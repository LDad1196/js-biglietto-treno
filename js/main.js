// Chiedo all'utente i dati che mi servono per fare il calcolo del prezzo

const km = prompt('Quanti KM percorrerai?');
console.log('User ha inserito n kilometri:', km);

const age = prompt('Quanti anni hai?');
console.log('User ha inserito anni:', age);

// Calcola prezzo biglietto 
const costPerKm = 0.21;

const BasePrice = km * costPerKm;

console.log('Prezzo base biglietto:', BasePrice)

// Se non è ne minorenne ne over65
let finalPrice = BasePrice

// Applicare sconto
// Se minorenne
if (age < 18) {
    // Operazione completa
    // console.log('Applico sconto del 20%')
    // const discountEntity = (BasePrice * 20) / 100;
    // console.log('Sconto del 20%:', discountEntity)

    // const finalPrice = BasePrice - discountEntity;
    // console.log ('Prezzo scontato finale:', finalPrice)

    // Operazione semplificata
    console.log('Applico sconto del 20%')
    finalPrice = BasePrice * 0.8;
    console.log ('Prezzo finale scontato del 20%:', finalPrice);
}

// Se over65
else if (age > 65) {
    // Operazione completa
    // console.log('Applico sconto del 40%')
    // const discountEntity = (BasePrice * 40) / 100;
    // console.log('Sconto del 40%:', discountEntity)

    // const finalPrice = BasePrice - discountEntity;
    // console.log ('Prezzo scontato finale:', finalPrice)

    // Operazione semplificata
    console.log('Applico sconto del 40%')
    finalPrice = BasePrice * 0.6;
    console.log ('Prezzo finale scontato del 40%:', finalPrice)
}

console.log ('Prezzo finale:', finalPrice.toFixed(2))


document.getElementById("finalPrice").innerHTML = `Il tuo biglietto costerà:  ${finalPrice.toFixed(2)}`;
    