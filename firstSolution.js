const url = 'https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1'

async function displayReceipt(urlData) {
   let products = await fetch(url)
    .then(res => res.json())
    .then(data => data) // prevzemanje na data

    let domestic_total = domestic_cost = imported_total = imported_cost = 0 //setirame na 0
    let  = 0
    products = products.sort((a,b) => a.domestic && a.name.localeCompare(b.name) ? -1 : 1) //gi sortirame produktite 
    console.log(".Domestic")
    let printed = false // pravime eden Flag 
    for (const product of products) {
        if (product.domestic) {
            domestic_total++
            domestic_cost += product.price // sobirame total price na domestic , i kolku produkti ima vo domestic
        } else {
            if (printed === false) console.log(".Imported")
            imported_total++
            imported_cost += product.price // sobirame total price na imported , i kolku produkti ima vo imported
            printed = true
        }
        console.log("... " + product.name)
        console.log("\t Price: " + "$"+ product.price )
        console.log("\t" + product.description.slice(0, 10) + "...")
        console.log("\t Weight:" + (product.weight === undefined ? "N/A" : product.weight + "g")) //pechatime 
    }
    console.log("Domestic cost: $" + domestic_cost)
    console.log("Imported cost: $" + imported_cost)
    console.log("Domestic count: " + domestic_total)
    console.log("Imported count: " + imported_total) 
}


displayReceipt(url)
