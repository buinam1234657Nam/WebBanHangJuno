import Header from '~/layouts/Header/Header';
import ProductsAll from '~/layouts/Products/ProductsAll';
function Products() {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <Header />
            <ProductsAll />
        </div>
    );
}

export default Products;
