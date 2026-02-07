const products = [
    {
        id: '1',
        name: 'Whey Protein Gold',
        price: 9500,
        category: 'proteinas',
        img: 'https://goodfitness.com.ar/wp-content/uploads/2021/07/star1-b1b9d77cd665813ddb16112352960864-640-0.jpg',
        stock: 25,
        description: 'Proteína aislada de suero, ideal para post-entreno.'
    },
    {
        id: '2',
        name: 'Creatina Monohidrato',
        price: 4200,
        category: 'creatinas',
        img: 'https://goodfitness.com.ar/wp-content/uploads/2024/06/crea-doy.png',
        stock: 10,
        description: 'Aumenta tu fuerza y potencia muscular.'
    },
    {
        id: '3',
        name: 'Pre-Workout PUMP',
        price: 5600,
        category: 'preentrenos',
        img: 'https://goodfitness.com.ar/wp-content/uploads/2021/08/pump_v8.png',
        stock: 5,
        description: 'Energía extrema para tus entrenamientos.'
    }
];

// Función 1: Trae TODO

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

// Función 2: Trae SOLO UNA CATEGORÍA (Para la navegación)

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

// Función 3: Trae UN SOLO PRODUCTO (Para el detalle)

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}