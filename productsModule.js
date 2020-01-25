const Products = () => {

    const _products = [
        {
            name: 'LG G8s ThinQ 128GB',
            price: 2045,
            img: "https://img.zap.co.il/pics/8/5/5/2/51182558b.gif"
        },

        {
            name: 'Xiaomi Mi 9 SE 128GB',
            price: 1147,
            img: "https://img.zap.co.il/pics/6/4/5/3/50223546b.gif"
        },

        {
            name: 'Samsung Galaxy Note 10 256GB',
            price: 2680,
            img: "https://img.zap.co.il/pics/3/2/1/5/51645123b.gif"
        },

        {
            name: 'iPhone 8 Plus 256GB Apple',
            price: 2539,
            img: "https://img.zap.co.il/pics/4/0/8/2/45252804b.gif"
        },

        {
            name: 'Google Pixel 3 XL 64GB',
            price: 2225,
            img: "https://img.zap.co.il/pics/0/2/7/2/48812720b.gif"
        },

        {
            name: 'OnePlus 7T 128GB 8GB RAM',
            price: 2157,
            img: "https://img.zap.co.il/pics/0/8/0/2/52682080b.gif"
        },

        {
            name: 'Xiaomi Redmi 8 64GB',
            price: 472,
            img: "https://img.zap.co.il/pics/7/6/4/2/52432467b.gif"
        },
        {
            name: 'Apple iPhone XS Max 64GB',
            price: 3288,
            img: "https://img.zap.co.il/pics/0/1/7/1/48061710b.gif"
        },

        {
            name: 'Xiaomi Mi 9 Lite 128GB 6GB RAM',
            price: 1052,
            img: "https://img.zap.co.il/pics/6/1/3/7/52227316b.gif"
        },

        {
            name: 'Xiaomi Mi Play 64GB 4GB RAM',
            price: 699,
            img: "https://img.zap.co.il/pics/1/2/1/7/50697121b.gif"
        },

        {
            name: 'Apple iPhone 11 Pro 256GB',
            price: 4592,
            img: "https://img.zap.co.il/pics/0/2/2/2/52192220b.gif"
        }

    ]

    // const getProduct = (name) => {
    //     for(let product of _products) {
    //         if(product.name === name){
    //             return product
    //         }
    //     }
    // }

    const getAllProducts = () => {
        return _products
    }

    return {/*getProduct,*/ getAllProducts}

}

