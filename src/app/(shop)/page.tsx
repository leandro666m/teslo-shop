import { titleFont } from "@/config/font";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Hola mundo</h1>
    <h1 className={ `${titleFont.className} font-bold` }>Hola mundo</h1>
    <h1 className={ `${titleFont.className}` }>Hola mundo</h1>
      
    </main>
  );
}
