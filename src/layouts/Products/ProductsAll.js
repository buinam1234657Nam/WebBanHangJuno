import classNames from 'classnames/bind';
import styles from './ProductsAll.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from '../NewProducts/Product';
const cx = classNames.bind(styles);
function ProductsAll() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getApi = async function () {
            const responsive = await axios({
                method: 'get',
                url: 'http://localhost:3000/new_products',
            });
            setData(responsive.data);
        };
        getApi();
    }, []);
    return (
        <div className={cx('row', 'gy-3', 'wrapper')}>
            {data.map((item, index) => {
                return (
                    <div key={index} className={cx('product', 'col-3', 'gx-5')}>
                        <div>
                            <Product data={item} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default ProductsAll;
