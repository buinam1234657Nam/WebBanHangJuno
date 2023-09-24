import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Cart() {
    return (
        <div className={cx('cart')}>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-header')}>
                    <div className={cx('header-title')}>
                        <p className={cx('title')}>GIỎ HÀNG</p>
                        <button className={cx('btn-delete-header')}>Xoa</button>
                    </div>
                    <p classNam={cx('quantity')}>
                        Bạn đang có 2 sản phẩm trong giỏ hàng.
                    </p>
                </div>

                <div className={cx('wrapper-products', 'row', 'gx-0')}>
                    <div className={cx('image', 'col-4', 'gx-0', 'gy-0')}>
                        <img
                            src="https://product.hstatic.net/1000003969/product/trang_jndlu061_7_20230824123758_790ce68d820b406d965055e00e8d5f38_medium.jpeg"
                            alt=""
                        />
                    </div>
                    <div
                        className={cx(
                            'product-information',
                            'col-8',
                            'gy-0',
                            'gx-0',
                        )}
                    >
                        <p className={cx('name')}>Đầm 2 Dây Cổ Vuông Hở Lưng</p>
                        <p className={cx('price')}>449,000₫</p>
                        <p className={cx('size-color')}>S / TRẮNG</p>
                        <button className={cx('btn-delete')}>Xoa</button>
                    </div>
                </div>
                <div className={cx('wrapper-products', 'row', 'gx-0')}>
                    <div className={cx('image', 'col-4', 'gx-0', 'gy-0')}>
                        <img
                            src="https://product.hstatic.net/1000003969/product/trang_jndlu061_7_20230824123758_790ce68d820b406d965055e00e8d5f38_medium.jpeg"
                            alt=""
                        />
                    </div>
                    <div
                        className={cx(
                            'product-information',
                            'col-8',
                            'gy-0',
                            'gx-0',
                        )}
                    >
                        <p className={cx('name')}>Đầm 2 Dây Cổ Vuông Hở Lưng</p>
                        <p className={cx('price')}>449,000₫</p>
                        <p className={cx('size-color')}>S / TRẮNG</p>
                        <button className={cx('btn-delete')}>Xoa</button>
                    </div>
                </div>
                <span className={cx('line')}></span>
                <div className={cx('total-price-products')}>
                    <p className={cx('total')}>TỔNG TIỀN TẠM TÍNH:</p>
                    <span className={cx('total-price')}>1,135,000₫</span>
                </div>

                <button className={cx('btn-view-cart')}>XEM GIỎ HÀNG</button>
            </div>
        </div>
    );
}
export default Cart;
