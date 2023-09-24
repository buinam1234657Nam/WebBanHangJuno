import classNames from 'classnames/bind';
import styles from './NewProducts.module.scss';
import Product from './Product';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function NewProducts() {
    const [data, setData] = useState([]);
    useEffect(function () {
        const callApi = async () => {
            const responsive = await fetch(
                'http://localhost:3000/new_products',
            );
            const result = await responsive.json();

            const lengthData = result.length;
            const resultSlice = result.slice(lengthData - 4, lengthData);
            setData(resultSlice);
        };
        callApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h1 className={cx('header')}>HÀNG MỚI VỀ</h1>
                <h3 className={cx('content')}>
                    Các sản phẩm bắt nhịp quốc tế, nàng thời thượng không nên bỏ
                    lỡ
                </h3>
            </div>
            <div className={cx('row')}>
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={cx('product', 'col-3', 'gx-5')}
                        >
                            <div>
                                <Product data={item} index={index} />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div
                className={cx(
                    'd-flex',
                    'justify-content-center',
                    'btn-see-all',
                )}
            >
                <Link to="/allProducts" className={cx('see-all')}>
                    XEM TẤT CẢ
                </Link>
            </div>
            <hr
                style={{
                    opacity: 0.2,
                    margin: '30px 0',
                }}
            />
        </div>
    );
}

export default NewProducts;
