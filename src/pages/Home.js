import Hero from '../components/hero';
import Products from '../components/products';
import { productData } from '../components/products/data';

function Home() {
    return (
        <div>
            <Hero />
            <Products heading='Choose your favorite' data={productData} />
        </div>
    )
}

export default Home