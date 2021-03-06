const products = Products()
const cart = Cart()
const cartItemsArray = cart.getCart()
const allProductsArray = products.getAllProducts()

const buttons = document.getElementsByClassName('button')
const aboutUsButton = buttons[0]
const allProductsButton = buttons[1]
const cartButton = buttons[2]
const container = document.getElementById('container')

aboutUsButton.onclick = () => {
    container.innerHTML = ''
    const subContainer = document.createElement('div')
    subContainer.innerHTML = "MobileShop website was launched in 2011, but its story actually began some 8 years before that when a group of college friends decided to go into business together. We started selling phones in shops, but our combined ambition, drive and abilities soon made us look for new challenges and new markets. Starting an online shop provided for both and allowed us to develop a strong international presence in a number of EU countries. Collective experience of our team members and the years we have spent in the business allowed us to develop a vast network of suppliers, ensuring that our customers will always find what they are looking for. This also means that we are able to offer great prices, which are constantly being updated and follow the shifts in the market. Our affordability, fast and reliable delivery, and the fact that you will always be able to find the phone that you are looking for in our offer, have made us stand out in the market, but they are simply symptoms of our dedication to what we are doing and our desire to constantly keep improving. We know that in order to do that, we need to keep in close touch with our customers and listen to their suggestions and critiques. This is why our customer service, which is always there to answer any question that you may have, is just as willing to listen as it is to inform."
    container.appendChild(subContainer)
    subContainer.id = "about-us-container"
}

allProductsButton.onclick = () => {
    container.innerHTML = ''
    const buttonText = 'Add To Cart'
    addProductsToContainer(allProductsArray,buttonText)
}
cartButton.onclick = () => {
    container.innerHTML = ''
    const buttonText = 'Remove From Cart'
    addProductsToContainer(cartItemsArray,buttonText)
}

const addProductsToContainer = (array,buttonText) => {
    const subContainer = document.createElement('div')
    container.appendChild(subContainer)
    subContainer.id = "items-container"
    
    for (let product of array) {
        const newDiv = document.createElement('div')
        subContainer.appendChild(newDiv)
        newDiv.className = "product"
        newDiv.innerHTML = `${product.name} <br> Price: ${product.price}`
        const prodIMG = document.createElement('img')
        newDiv.appendChild(prodIMG)
        prodIMG.src = product.img
        prodIMG.className = "product-picture"
        const prodButton = document.createElement('button')
        prodButton.innerHTML = buttonText
        newDiv.appendChild(prodButton)
        if(buttonText === 'Add To Cart') {
            prodButton.onclick = () => {
                cart.addToCart(product)
            }
        } else {
            prodButton.onclick = () => {
                cart.deleteFromCart(product)
                cartButton.onclick()
            }
        }
    }
}

