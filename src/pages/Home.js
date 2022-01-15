import Hero from '../components/hero';
import Products from '../components/products';
import Feature from '../components/feature';
import Footer from '../components/footer';
import { productData, productDataTwo } from '../components/products/data';

function Home() {
    return (
        <div>
            <Hero />
            <Products heading='Choose your favorite' data={productData} />
            <Feature />
            <Products heading='Sweet Treats for You' data={productDataTwo} />
            <Footer />
        </div>
    )
}

export default Home