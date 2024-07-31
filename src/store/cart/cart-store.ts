import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface State {

    cart: CartProduct[];

    getTotalItems: () => number;

    addProductToCart: (product: CartProduct) => void;
    // updatedCartProducts: ( product: CartProduct ) => void;
    // removeProductFromCart
}




export const useCartStore = create<State>() (

    persist(

        (set, get) => ( {

            cart: [],


            // metodos
            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce( (total, item) => total + item.quantity, 0 )
            },

            addProductToCart: (product: CartProduct) => {
                const { cart } = get();

                // revisar si en el carrito existe un prod con la talle seleccionada
                const productInCart = cart.some(
                    (item) => (item.id === product.id && item.Size === product.Size)
                )

                if (!productInCart) {
                    set({ cart: [...cart, product] })
                    return
                }

                // 2. se que el producto existe por talle, tengo q actualizar la cantidad
                const updatedCartProducts = cart.map((item) => {
                    if (item.id === product.id && item.Size === product.Size) {
                        return {
                            ...item,
                            quantity: (item.quantity + product.quantity)
                        }
                    }

                    return item

                })

                set({ cart: updatedCartProducts })


            }


        }  ),

        {
            name: 'shopping-cart',
        }
    )


);