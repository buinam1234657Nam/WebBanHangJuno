import Header from '../Header/Header';
import Banner from '../Banner/Banner';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Banner />
            {children}
        </div>
    );
}

export default DefaultLayout;
