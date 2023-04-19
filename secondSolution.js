class Product {
    constructor(name , domestic , price , weight , description) {
        this.name = name;
        this.domestic = domestic;
        this.price = price;
        this.weight = weight;
        this.description = description;
    }
    
    getPrice() {
        return "\t Price: $" + this.price
    }

    getDescription() {
        return "\t $ " + this.description.slice(0, 10) +"..."
    }

    getWeight() {
        return "\t Weight: " + (this.weight === undefined ? "N/A" :  this.weight + "g")
    }
    printData(){
        console.log("... " + this.name)
        console.log(this.getPrice())
        console.log(this.getDescription())
        console.log(this.getWeight())
    }
}  //pravime class product , constructor i metodi

const url = 'https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1'


async function displayReceipt(url){
    let products = await fetch(url)
    .then(res => res.json())
    .then(data => data)
   
    products = products.sort((a,b) => a.domestic && a.name.localeCompare(b.name) ? -1 : 1)
    let printed = false
    let domestic_total = domestic_cost = imported_total = imported_cost = 0
    console.log(".Domestic")
    for (let product of products) {
        product = new Product(product.name , product.domestic , product.price , product.weight , product.description) 
        if (product.domestic) {
            domestic_total++
            domestic_cost += product.price
        } else {
            if (printed === false) console.log(".Imported")
            imported_total++
            imported_cost += product.price
            printed = true
        }
        product.printData() //method so ke ni gi ispechati site potrebni info za produktot
        
    }
    console.log("Domestic cost: $" + domestic_cost)
    console.log("Imported cost: $" + imported_cost)
    console.log("Domestic count: " + domestic_total)
    console.log("Imported count: " + imported_total) 
}


displayReceipt(url)
