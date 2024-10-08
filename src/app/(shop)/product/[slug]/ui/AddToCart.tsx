'use client'

import React, { useState } from 'react'

import { QuantitySelector, SizeSelector } from '@/components';
import type { CartProduct, Product, Size } from '@/interfaces';
import { useCartStore } from '@/store';


interface Props {
    product: Product;
}



export const AddToCart = ( { product}: Props ) => {

    const addProductToCart = useCartStore( state => state.addProductToCart )

    const [size, setSize] = useState<Size|undefined>()
    const [quantity, setQuantity] = useState<number>(1)
    const [posted, setPosted] = useState(false)

    const AddToCart= () => {
        setPosted(true)

        if ( !size ) return;
 
        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            quantity: quantity,
            size: size,
            image: product.images[0]
        }

        addProductToCart( cartProduct ) // lo agregó al carrito

        setPosted(false)
        setQuantity(1)
        setSize(undefined)

    }




    return (
        <>
            {
                posted && !size && ( <span className='mt-2 text-red-500 fade-in'> Debe seleccionar un talle* </span> )
            }

            {/* selector de talle */}
            <SizeSelector selectedSize={ size } availableSizes={ product.sizes } onSizeChanged={ setSize } />

            {/* selector de cantidad */}
            <QuantitySelector quantity={ quantity } onQuantityChanged={ setQuantity }/>

            {/* BUTTON */}
            <button onClick={ AddToCart }className="btn-primary my-5"> Agregar al carrito </button>
        </>
    )
}
