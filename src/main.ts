// Dag 3, del 1: Arrayer och objekt i Console.
import { meny } from './data'
import { studentPris } from './rabatt'

/*
// Uppgift 10: Moduler på riktigt

A) När jag tar bort type="module" i index.html får jag följande felmeddelande:

Uncaught SyntaxError: import declarations may only appear at top level of a module

import { meny } from "/src/data.ts";

Detta fel betyder att webbläsaren stlutade att behandla data.ts som en modul,
och det går inte längre att använda import eller export.



B) När jag skriver fel filnamn i import får jag följande felmeddelande:

[plugin:vite:import-analysis] Failed to resolve import "./dapa" from "src/main.ts". Does the file exist?

GET http://localhost:5173/src/main.ts?t=1795028202417
NS_ERROR_CORRUPTED_CONTENT

Status 500 Internal Server Error

Laddar modul från "http://localhost:5173/src/main.ts?t=1795028202417" blockerades på grund av en otillåtet MIME-typ ("").

Laddning misslyckades för modulen med källan “http://localhost:5173/src/main.ts?t=1795028202417”.

Detta fel betyder att webbläsaren inte hittar filen och kan inte ladda den.



C) När jag öppnar index.html genom att dubbelklicka på filen får jag följande felmeddelande:

Cross-Origin begäran blockerad: Same-Origin policyn tillåter inte läsningar av fjärresurs på file:///src/main.ts. (Orsak: CORS begäran inte http).

Modulkälla URI är inte tillåtet i detta dokument: “file:///src/main.ts”.

Detta fel betyder att webbläsaren läser filen direkt från min hårddisk (från file://) vilket normalt inte är tillåtet när man använder type="module"
på grund av säkerhetsregler, och därför visas CORS-meddelandet.

 */

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
console.log(meny.length)
console.log(meny[0].namn)

// b
for (const ratt of meny) {
    // Vanligt pris
    // console.log(ratt.namn + ' - ' + ratt.pris + ' kr')
    // Studentpris, 10% rabatt
    console.log(
        ratt.namn +
            ' - ' +
            studentPris(ratt.pris).toLocaleString('sv-SE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) +
            ' kr'
    )
}
// c
console.log(meny[meny.length - 1].namn)
