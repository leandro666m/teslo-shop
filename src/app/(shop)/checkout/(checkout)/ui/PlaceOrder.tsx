'use client'

import { placeOrder } from "@/actions"
import { useAddressStore, useCartStore } from "@/store"
import { currencyFormat } from "@/utils"

import clsx from "clsx"
import { useEffect, useState } from "react"



export const PlaceOrder = () => {

    const [isPlacingOrder, setIsPlacingOrder] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const address = useAddressStore(state => state.address)
    const { subTotal, tax, total, itemsInCart } = useCartStore(state => state.getSummaryInformation())
    const cart = useCartStore( state => state.cart )
    
    const onPlaceOrder = async () => {
        setIsPlacingOrder(true)

        const productsToOrder = cart.map( product => {
            return {
                productId: product.id,
                quantity: product.quantity,
                size: product.size,
            }
        })        
        

       const resp =  await placeOrder(productsToOrder, address)
        
    }
    
    useEffect(() => {
        setLoaded(true)
    }, [])

    if (!loaded) {
        return <p>Cargando...</p>
    }

    return (
        <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl font-bold mb-2"> Dirección de entrega </h2>
            <div className="mb-10 ml-5">
                <p className="text-xl"> {address.firstName}{address.lastName} </p>
                <p> {address.address} </p>
                <p> {address.address2} </p>
                <p> {address.postalCode} </p>
                <p> {address.city}, {address.country} </p>
                <p> {address.phone} </p>
            </div>

            {/* Divisor */}
            <div className="w-full h-0.5 rounded bg-gray-300 mb-10" />


            <h2 className="text-2xl font-bold mb-2"> Resumen de orden </h2>

            <div className="grid grid-cols-2">
                <span>No. Productos</span>
                <span className="text-right"> {itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`} </span>

                <span>Subtotal</span>
                <span className="text-right"> {currencyFormat(subTotal)} </span>

                <span>Impuestos (21%)</span>
                <span className="text-right"> {currencyFormat(tax)} </span>

                <span className="mt-5 text-2xl">Total:</span>
                <span className="mt-5 text-2xl text-right"> {currencyFormat(total)} </span>
            </div>


            <div className="mt-5 mb-2 w-full">

                <p className="mb-5">

                    {/* Disclamer */}
                    <span className="text-xs">
                        Al hacer clic en &quot;Confirmar orden&quot;, acepta nuestros <a href="#" className="underline"> términos y condiciones</a> y nuestra <a href="#" className="underline"> política de privacidad</a>.
                    </span>
                </p>

                <p className="text-red-500"> Error de creación </p>
                <button onClick={onPlaceOrder}
                    className={clsx({ 'flex btn-primary justify-center': !isPlacingOrder, 'flex btn-disabled': isPlacingOrder })}
                > Confirmar orden </button>
            </div>

        </div>
    )
}
