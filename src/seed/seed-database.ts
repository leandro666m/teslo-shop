import { initialData } from "./seed";
import prisma from '../lib/prisma';
import { countries } from "./seed-countries";

async function main() {

    // 1. borrar registros previos
    // await Promise.all([

        await prisma.orderAddress.deleteMany();
        await prisma.orderItem.deleteMany();
        await prisma.order.deleteMany();

        await prisma.userAddress.deleteMany();
        await prisma.user.deleteMany();
        await prisma.country.deleteMany();

        await prisma.productImage.deleteMany();
        await prisma.product.deleteMany();
        await prisma.category.deleteMany();

    // ])

    const { categories, products, users } = initialData;

    // Usuarios
    await prisma.user.createMany({
        data: users
    });


    
    // Paises
    await prisma.country.createMany({
        data: countries
    });



    // Categorias
    const categoriesData = categories.map((name) => ({ name }));

    await prisma.category.createMany({
        data: categoriesData
    });

    const categoriesDb = await prisma.category.findMany();


    const categoriesMap = categoriesDb.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>); //<string= shirt, string=categoryID>



    // Productos

    products.forEach(async (product) => {
        const { type, images, ...rest } = product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type]
            }
        })

        // Images
        const imagesData = images.map(image => ({
            url: image,
            productId: dbProduct.id
        }))

        await prisma.productImage.createMany({
            data: imagesData
        })

    });



    console.log('Seed ejecutado correctamente')
}








(() => {

    if (process.env.NODE_ENV === 'production') return;

    main();
}

)();

// para poder ejecutar este archivo typescript en node, necesitamos instalar ts-node:
// npm i ts-node
// cd src/seed
// para crear en esta carpeta el archivo tsconfig.json:
// npx tsc --init
