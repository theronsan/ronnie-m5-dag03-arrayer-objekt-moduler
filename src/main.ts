// Dag 3, del 1: Arrayer och objekt i Console.
import { meny } from './data'

// UPPGIFT 1: arrayer
// a) skapa const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];
// b) lägg till "Chai" sist med push. Skriv ut listan och längden.
// c) ta bort sista med pop och skriv ut vad som togs bort.
// d) skriv ut platsen för "Latte" (indexOf) och om "Cola" finns (includes).
// e) skriv ut hela listan som en text: drycker.join(", ")
// TODO
// a
const drycker: string[] = ['Bryggkaffe', 'Latte', 'Te']
// b
drycker.push('Shai')
console.log(drycker)
console.log(drycker.length)
// c
const taBort = drycker.pop()
console.log(taBort)
// d
console.log(drycker.indexOf('Latte'))
console.log(drycker.includes('Cola'))
// e
console.log(drycker.join(', '))

// UPPGIFT 2: objekt
// a) skapa const kopp = { namn: "Latte", pris: 45, vegetarisk: true };
// b) skriv ut kopp.namn och kopp["pris"]
// c) ändra priset till 48, och lägg till egenskapen storlek: "stor"
//    TypeScript klagar på storlek. Beskriv objektet med en interface där storlek är valfri (storlek?: string).
// d) skriv ut Object.keys(kopp)
// TODO
// a
//const kopp = { namn: 'Latte', pris: 45, vegetarisk: true }
// b
//console.log(kopp.namn)
//console.log(kopp.pris)
// c
type kopp = {
    namn: string
    pris: number
    vegetarisk: boolean
    storlek?: string
}
const kopp: kopp = { namn: 'Latte', pris: 45, vegetarisk: true }
kopp.pris = 48
kopp.storlek = 'stor'
// d
console.log(Object.keys(kopp))

// Använd punkt . när jag känner till egenskapens namn
// Använd hakparantes [] när jag vill komma åt värden i en array

// UPPGIFT 3: arrayer av objekt
// a) skriv ut hur många rätter menyn har och namnet på den första
// b) loopa med for...of och skriv ut "namn – pris kr" för varje rätt
// c) skriv ut namnet på den sista rätten utan att veta antalet (tips: length - 1)
// TODO
// a
console.log(drycker.length)
console.log(drycker[0])
// b
const koppar: kopp[] = [kopp]
for (const dryck of koppar) {
    console.log(kopp.namn + ' - ' + kopp.pris + ' kr')
}
// c
console.log(drycker[drycker.length - 1])
