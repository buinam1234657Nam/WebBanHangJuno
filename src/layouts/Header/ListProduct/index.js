import { Link } from 'react-router-dom';
import styles from './ListProduct.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function ListProduct({ className }) {
    const classNames = cx('wrapper', {
        [className]: true,
    });
    return (
        <div className={classNames}>
            <div className={cx('popper', 'container-sm', 'row')}>
                <div className={cx('list', 'd-flex', 'flex-column', 'col-2')}>
                    <Link className={cx('item')}>Giày</Link>
                    <Link className={cx('item')}>Giày cao gót</Link>
                    <Link className={cx('item')}>Giày xăng đan</Link>
                    <Link className={cx('item')}>Giày Sneakers</Link>
                    <Link className={cx('item')}>Giày búp bê</Link>
                    <Link className={cx('item')}>Dép guốc</Link>
                </div>

                <div className={cx('list', 'd-flex', 'flex-column', 'col-2')}>
                    <Link className={cx('item')}>Túi</Link>
                    <Link className={cx('item')}>Túi cỡ nhỏ</Link>
                    <Link className={cx('item')}>Túi cỡ trung</Link>
                    <Link className={cx('item')}>Túi cở lớn</Link>
                    <Link className={cx('item')}>Balo</Link>
                    <Link className={cx('item')}>Ví-Clutch</Link>
                </div>

                <div className={cx('list', 'd-flex', 'flex-column', 'col-2')}>
                    <Link className={cx('item')}>Phụ kiện</Link>
                    <Link className={cx('item')}>Mắt kính</Link>
                    <Link className={cx('item')}>Vớ</Link>
                </div>

                <div className={cx('list', 'd-flex', 'flex-column', 'col-2')}>
                    <Link className={cx('item')}>Quần áo</Link>
                    <Link className={cx('item')}>Đầm & Jumpsuit</Link>
                    <Link className={cx('item')}>Áo</Link>
                    <Link className={cx('item')}>Quần</Link>
                    <Link className={cx('item')}>Váy</Link>
                    <Link className={cx('item')}>Khoác</Link>
                </div>

                <div className={cx('list', 'd-flex', 'flex-column', 'col-2')}>
                    <Link className={cx('item')}>Bộ sưu tập</Link>
                    <Link className={cx('item')}>Color Your Life</Link>
                    <Link className={cx('item')}>BST Túi Ngôn Tình</Link>
                    <Link className={cx('item')}>Versatile Beauty</Link>
                    <Link className={cx('item')}>Shake It Uo</Link>
                    <Link className={cx('item')}>JoyFul</Link>
                </div>
            </div>

            <p className={cx('footer')}>
                Miễn phí giao hàng toàn quốc với hóa đơn từ 300.000 đồng | Thời
                gian đổi trả sản phẩm lên đến 30 ngày
            </p>
        </div>
    );
}

export default ListProduct;
