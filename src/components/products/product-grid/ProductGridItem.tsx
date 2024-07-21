import { Product } from '@/interfaces'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  product: Product;
}


export const ProductGridItem = ({ product }: Props) => {


  return (
    <div className='rounded-md overflow-hidden fade-in' >
      <Link href={`/product/${product.slug}`} >
        <Image src={`/products/${product.images[0]}`} alt={product.title} width={500} height={500} className='w-full object-cover' />
      </Link>

      <div className=' flex flex-col'>
        <Link href={`/product/${product.slug}`} className='hover:text-blue-500'> {product.title} </Link>
      </div>

      <span className='font-bold'> ${product.price} </span>

    </div>
  )
}
