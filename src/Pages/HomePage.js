import Banner from '~/layouts/Banner/Banner';
import Header from '~/layouts/Header/Header';
import NewProducts from '~/layouts/NewProducts';
import Footer from '~/layouts/Footer/Footer';
import Collection from '~/layouts/Collection/Collection';
import ProductsInterested from '~/layouts/ProductsInterested';
import FooterBottom from '~/layouts/FooterBottom/FooterBottom';
import Back from '~/layouts/Back/Back';
// import Cart from '~/layouts/Cart/Cart';
import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function HomePage() {
    return (
        <>
            <div className={cx('overlay')}></div>
            <div className={cx('wrapper')}>
                <Header />
                <Banner />
                <Back />
                <NewProducts />
                <ProductsInterested />
                <Collection />
                <Footer />
                <FooterBottom />
            </div>
            {/* <Cart /> */}
        </>
    );
}

export default HomePage;
