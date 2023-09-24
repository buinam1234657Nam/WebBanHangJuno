import classNames from 'classnames/bind';
import styles from './ProductsInterested.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function ProductsInterested() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>NHÓM SẢN PHẨM ĐƯỢC QUAN TÂM NHẤT</h2>
            <Link className={cx('row products')}>
                <div className={cx('col-4 gx-4 product-item')}>
                    <img
                        className={cx('product-image')}
                        alt=""
                        src="https://file.hstatic.net/1000003969/file/h1__1__d62a8f5a69b54b72855612e2fefe52d2.jpg"
                    />
                    <p className={cx('product-title')}>GIÀY SANDAL</p>
                </div>
                <div className={cx('col-4 gx-4 product-item')}>
                    <img
                        className={cx('product-image')}
                        alt=""
                        src="https://file.hstatic.net/1000003969/file/h2__1__f8b39d4eca95407eb7bc6ba4a471fcc1.jpg"
                    />
                    <p className={cx('product-title')}>TÚI XÁCH NHỎ</p>
                </div>
                <div className={cx('col-4 gx-4 product-item')}>
                    <img
                        className={cx('product-image')}
                        alt=""
                        src="https://file.hstatic.net/1000003969/file/h3__1__bd48af48cac349e19cb71396aa922c72.jpg"
                    />
                    <p className={cx('product-title')}>QUẦN ÁO THỜI TRANG</p>
                </div>
            </Link>
            <hr
                style={{
                    opacity: 0.2,
                    margin: '30px 0',
                }}
            />
        </div>
    );
}

export default ProductsInterested;
