'use server'


import { auth } from '@/auth.config';
import type { Size, Address } from '@/interfaces';
import prisma from '@/lib/prisma';

interface ProductToOrder {
    productId: string
    quantity: number
    size: Size
}

export const placeOrder = async ( productsIds: ProductToOrder[], address: Address)  => {

    // verificar la sesion del usr
    const session = await auth()
    const userId = session?.user.id
    if ( !userId ){
        return {
            ok: false,
            message: 'No hay sesión de usuario'
        }
    }

    // obtener la informacion de los productos
    // nota: recordar que podemos llevar 2+ productos con el mismo ID
    const products = await prisma.product.findMany({
        where: {
            id: {
                in: productsIds.map( product => product.productId )
            }
        }
    })

    // calcular los montos // Encabezado
    const itemsInOrder = productsIds.reduce( ( count, p ) => count +p.quantity, 0 )

    // totales de impuestos, subtotal, y total
    



}