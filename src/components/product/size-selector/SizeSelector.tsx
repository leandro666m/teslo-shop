import { Size } from '@/interfaces';
import clsx from 'clsx';
import React from 'react'

interface Props {
    selectedSize?: Size;
    availableSizes: Size[];

    onSizeChanged: (size: Size) => void;
}


export const SizeSelector = ({ selectedSize, availableSizes, onSizeChanged }: Props) => {



    return (
        <div className='my-5'>
            <h3 className='font-bold mb-4'> Talles disponibles </h3>

            <div className='flex'>
                {
                    availableSizes.map(size => (
                        <button key={size} onClick={() => onSizeChanged(size)} 
                            className={
                                clsx('mx-2 hover:underline text-lg', { 'underline bg-slate-200': size === selectedSize })
                                } >
                            {size}
                        </button>
                    ))
                }
            </div>

        </div>
    )
}
