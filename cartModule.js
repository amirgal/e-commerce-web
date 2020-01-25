const Cart = () => {

    const _cartArray = [
        // {
        //     name: 'OnePlus 7T 128GB 8GB RAM',
        //     price: 2157,
        //     img: "https://img.zap.co.il/pics/0/8/0/2/52682080b.gif"
        // },
        // {
        //     name: 'LG G8s ThinQ 128GB',
        //     price: 2045,
        //     img: "https://img.zap.co.il/pics/8/5/5/2/51182558b.gif"
        // }

    ]

    const addToCart = (product) => {
        _cartArray.push(product)
    }

    const deleteFromCart = (product) => {
        const i =_cartArray.indexOf(product)
        _cartArray.splice(i,1)
    }
    
    const getCart = () => {
        return _cartArray
    }

    return {addToCart, deleteFromCart, getCart}
}

