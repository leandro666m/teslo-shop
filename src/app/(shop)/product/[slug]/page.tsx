export const revalidate = 604800; // 7 dias


import { getProductBySlug } from "@/actions";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { titleFont } from "@/config/font";
import { notFound } from "next/navigation";


interface Props {
  params: {
    slug: string;
  };

}


export default async function ProductPage({ params }: Props) {

  const { slug } = params;
  const product = await getProductBySlug(slug);

  if ( !product ) {
    notFound();
  }


  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">

      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow title={ product.title } images={ product.images } className="block md:hidden"/>


        {/* Desktop Slideshow */}
        <ProductSlideshow title={ product.title } images={ product.images } className="hidden md:block" />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">

        <StockLabel slug={ product.slug } />

        <h1 className={`${titleFont.className} antialiased font-bold text-xl `}>
          {product.title}
        </h1>


        <p className="text-lg mb-5"> ${product.price} </p>

        {/* selector de talle */}
        <SizeSelector selectedSize={ product.sizes[0] } availableSizes={ product.sizes } />

        {/* selector de cantidad */}
        <QuantitySelector quantity={ 1 } />

        {/* BUTTON */}
        <button className="btn-primary my-5"> Agregar al carrito </button>

        {/* descripcion */}
        <h3 className="font-bold text-sm"> Descripción </h3>
        <p className="font-light"> {product.description} </p>

      </div>




    </div>
  );
}