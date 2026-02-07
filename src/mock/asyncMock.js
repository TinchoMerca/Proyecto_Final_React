const products = [
    // --- PROTEINAS ---
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
        id: '4',
        name: 'Vegan Protein Chocolate',
        price: 10200,
        category: 'proteinas',
        img: 'https://acdn-us.mitiendanube.com/stores/003/189/220/products/creatina-monohidrato-gentech-x-500g-54-faa9186330d2e3404d17573505135503-1024-1024.webp',
        stock: 12,
        description: 'Proteína 100% vegetal a base de arvejas y arroz. Sabor chocolate suizo.'
    },
    {
        id: '5',
        name: 'Iso 100 Hidrolizada',
        price: 15500,
        category: 'proteinas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_919736-MLA99527379494_122025-F.webp',
        stock: 8,
        description: 'La proteína de más rápida absorción. 0 grasas, 0 azúcar.'
    },

    // --- CREATINAS ---
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
        id: '6',
        name: 'Creatina Micronizada',
        price: 5100,
        category: 'creatinas',
        img: 'https://aremsaprod.vtexassets.com/arquivos/ids/1000890-1200-auto?v=638948423259200000&width=1200&height=auto&aspect=true',
        stock: 15,
        description: 'Partículas más pequeñas para una absorción y mezcla superior.'
    },
    {
        id: '7',
        name: 'Cell-Tech Creatina',
        price: 6800,
        category: 'creatinas',
        img: 'https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/700x700/602f0fa2c1f0d1ba5e241f914e856ff9/c/e/cell-tech-6lbs-fruit-punch.jpg',
        stock: 5,
        description: 'Fórmula avanzada de creatina con carbohidratos para máximo volumen.'
    },

    // --- PRE-ENTRENOS ---
    {
        id: '3',
        name: 'Pre-Workout PUMP',
        price: 5600,
        category: 'preentrenos',
        img: 'https://goodfitness.com.ar/wp-content/uploads/2021/08/pump_v8.png',
        stock: 5,
        description: 'Energía extrema para tus entrenamientos.'
    },
    {
        id: '8',
        name: 'C4 Original Explosive',
        price: 7200,
        category: 'preentrenos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_916217-MLA99542107074_122025-F.webp',
        stock: 20,
        description: 'El pre-entreno número 1 en ventas. Energía explosiva y focus mental.'
    },
    {
        id: '9',
        name: 'Mr. Hyde Nightmare',
        price: 6500,
        category: 'preentrenos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_981643-MLA86352446435_062025-F.webp',
        stock: 2,
        description: 'Solo para avanzados. Alta carga de estimulantes.'
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