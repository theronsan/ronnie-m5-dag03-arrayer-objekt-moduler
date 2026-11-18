// Dag 3, del 2: Funktioner som arbetar med menyn. Gör alla tester gröna på tests.html.
// Använd filter, map, find, reduce och sort där det passar.
// Typerna (Ratt, OrderRad) finns i typer.ts. Röda understrykningar tills du skrivit return är normalt.
import { formateraPris } from './pris'
import type { Ratt, OrderRad } from './typer'

// 1. Alla vegetariska rätter (filter). Returnerar en ny array.
export function vegetariskaRatter(meny: Ratt[]): Ratt[] {
    // TODO
    // Jag gissar att vegetariskaRatter förväntar en boolean (true eller false) och att filter är den array-metod som passar?
    const veg = meny.filter((ratt) => ratt.vegetarisk === true)
    return veg
}

// 2. Bara namnen, som en array av text (map). ["Kardemummabulle", ...]
export function rattNamn(meny: Ratt[]): string[] {
    // TODO
    const namn = meny.map((ratt) => ratt.namn)
    return namn
}

// 3. En prislista som text: "Kardemummabulle – 35 kr" (map + formateraPris)
export function prislista(meny: Ratt[]): string[] {
    // TODO
    const prislistan = meny.map(
        (ratt) => `${ratt.namn} – ` + formateraPris(ratt.pris)
    )
    return prislistan
}

// 4. Hitta en rätt via id (find). Returnerar objektet, eller undefined om det saknas.
export function hittaRatt(meny: Ratt[], id: number): Ratt | undefined {
    // TODO
    const hittaID = meny.find((ratt) => ratt.id === id)
    return hittaID
}

// 5. Den billigaste rätten (reduce). Returnerar objektet. Tom lista ger undefined.
export function billigast(meny: Ratt[]): Ratt | undefined {
    // TODO
    /*
    // MED FOR OF LOOP
    // om menyn är tom returnera undefined
    if (meny.length === 0) {
        return undefined
    }
    // låt den första första rätten vara den billigaste
    let billigaste = meny[0]
    // går igenom alla rätter
    for (const ratt of meny) {
        // om en rätt har ett lägre pris
        if (ratt.pris < billigaste.pris) {
            // uppdatera billigaste
            billigaste = ratt
        }
    }
    // returnera billigaste
    return billigaste
 */

    // MED REDUCE
    // om menyn är tom returnera undefined
    if (meny.length === 0) {
        return undefined
    }

    const lägstaPriset = meny.reduce((billigaste, ratt) => {
        if (ratt.pris < billigaste.pris) {
            return ratt
        }
        return billigaste
    })
    return lägstaPriset
}

// 6. Sortera efter pris, billigast först. Returnerar en NY array.
//    Den ursprungliga listan får INTE ändras (sort ändrar originalet, så kopiera först).
export function sorteraEfterPris(meny: Ratt[]): Ratt[] {
    // TODO
    const billigastFörst = [...meny].sort((a, b) => a.pris - b.pris)
    return billigastFörst
}

// 7. Totalpris för en order. order = [{ id: 1, antal: 2 }, { id: 5, antal: 1 }]
//    Slå upp priset för varje id i menyn. Okända id räknas som 0 kr.
export function totalPris(order: OrderRad[], meny: Ratt[]): number {
    // TODO

    // total är summan hittills, orderRad är den aktualla orderraden
    const summa = order.reduce((total, orderRad) => {
        // använder find för att leta upp rätt rätt i menyn genom att jämföra id
        const ratt = meny.find((r) => r.id === orderRad.id)
        // om rätten finns multiplicera priset med antalet, om rätten inte finns lägger vi till 0 (kr).
        // därefter läggs beloppet till i den tidigare summan
        return total + (ratt ? ratt.pris * orderRad.antal : 0)
    }, 0)
    // returnerar det totala priset
    return summa
}

// 8. Antal rätter per kategori som ett objekt: { bakverk: 3, dryck: 2, lunch: 3 } (reduce)
export function perKategori(meny: Ratt[]): Record<string, number> {
    // TODO
    // Reduce går igenom en kategori i taget(?)
    const antal = meny.reduce<Record<string, number>>((summa, ratt) => {
        // hämtar räknare för aktuell kategori. Om kategorin inte finns börjar vi på 0. Räkna upp kategorin med ett.
        summa[ratt.kategori] = (summa[ratt.kategori] || 0) + 1
        return summa
    }, {})
    console.log(antal)
    return antal
}

// 9. En kopia av rätten med nytt pris. Originalet får INTE ändras (spread: { ...ratt }).
export function medNyttPris(ratt: Ratt, nyttPris: number): Ratt {
    // TODO
}
