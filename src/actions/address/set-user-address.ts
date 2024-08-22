'use server'

import type { Address } from "@/interfaces";
import prisma from "@/lib/prisma";



export const setUserAddress = async( address: Address, userId: string ) => {

    try {
        const newAddress = await createOrReplaceAddress( address, userId )

        return {
            ok: true,
            message: 'Dirección guardada correctamente',
            address: newAddress
        }


    } catch (error) {
        console.log("🦆 error", error);
        return {
            ok: false,
            message: 'No se pudo guardar la dirección'
        }
    }

}

const createOrReplaceAddress = async( address: Address, userId: string ) => {
    
    try {
        console.log("🚨 userId", userId);

        const storeAddress = await prisma.userAddress.findUnique({
            where: { userId }
        })

        const addressToSave = {
            userId: userId,
            address: address.address,
            address2: address.address2,
            countryId: address.country,
            city: address.city,
            firstName: address.firstName,
            lastName: address.lastName,
            phone: address.phone,
            postalCode: address.postalCode,            
        }
        
        // creacion si no existe
        if( !storeAddress ){
            const newAddress = await prisma.userAddress.create({
                data: addressToSave
            })
            return newAddress
        }

        // actualizacion si existe 
        const updatedAddress = await prisma.userAddress.update({
            where: { userId },
            data: addressToSave
        })

        return updatedAddress

        
    } catch (error) {
        console.log("🔥 error", error);
        throw new Error('No se pudo guardar la dirección')
    }


}


