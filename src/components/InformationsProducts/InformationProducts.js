import Header from '~/layouts/Header/Header';
import classNames from 'classnames/bind';
import styles from './InformationProducts.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import InformationContent from './InformationContent';
const cx = classNames.bind(styles);
function InformationProducts() {
    const [checkBlockDetail, setCheckBlockDetail] = useState(false);
    const [checkBlockStroge, setcheckBlockStroge] = useState(true);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-block')}>
                <Header primary />
                <InformationContent />
                <div className={cx('products-detail')}>
                    <div className={cx('products-tab-bot', 'row')}>
                        <div className={cx('wrapper-title')}>
                            <div
                                onClick={() => {
                                    setCheckBlockDetail(false);
                                    setcheckBlockStroge(true);
                                }}
                                className={cx('title-return', 'col-6', {
                                    separate__title: checkBlockStroge,
                                })}
                            >
                                Chính sách đổi trả
                            </div>
                            <div
                                onClick={() => {
                                    setCheckBlockDetail(true);
                                    setcheckBlockStroge(false);
                                }}
                                className={cx('title-storage', 'col-6', {
                                    separate__title: checkBlockDetail,
                                })}
                            >
                                Hướng dẫn bảo quản
                            </div>
                        </div>
                        <div className={cx('detail')}>
                            <div
                                className={cx('return-policy', {
                                    'd-none': checkBlockDetail,
                                })}
                            >
                                <p>
                                    JUNO hiện đang áp dụng chính sách Đổi/Trả
                                    cho các sản phẩm như sau:
                                    <br />- Trong vòng 30 ngày kể từ ngày nhận
                                    sản phẩm Túi, Ví, Giày (Hàng Nguyên Giá)
                                    <br />- Trong vòng 7 ngày đối với sản phẩm
                                    Khuyến mãi
                                    <br />
                                    - Phụ kiện (chỉ áp dụng với mắt kính, trang
                                    sức) và túi canvas được đổi/trả trong 7 ngày
                                    trong trường hợp có lỗi sản xuất
                                    <br />- Không áp dụng đổi trả Online với đơn
                                    hàng tại hệ thống Cửa hàng Đại lý và Cửa
                                    hàng Juno tại TTTM Sense City Phạm Văn Đồng
                                </p>
                            </div>

                            <div
                                className={cx('storage', {
                                    'd-none': checkBlockStroge,
                                })}
                            >
                                HƯỚNG DẪN BẢO QUẢN GIÀY
                                <Link> >> Xem chi tiết</Link>
                                <br />
                                HƯỚNG DẪN BẢO QUẢN TÚI XÁCH
                                <Link>>> Xem chi tiết</Link>
                                <br />
                                HƯỚNG DẪN BẢO QUẢN PHỤ KIỆN
                                <Link>>> Xem chi tiết</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <span className={cx('separate')}>
                    <p></p>
                </span>

                {/* <div className={cx('choose_add')}>
                    <h1>Có thể nàng sẽ thích</h1>
                    <div className={cx('row')}></div>
                </div> */}
            </div>

            <div className={cx('overflow')}>
                <div className={cx('wrapper-overflow')}>
                    <div className={cx('overflow_header')}>
                        Hướng dẫn tính size
                    </div>
                    <div className={cx('overflow-content')}>
                        <p className={cx('overflow-title')}>
                            Để biết cỡ chân của bạn phù hợp với Size giày bao
                            nhiêu của Juno, bạn hãy thực hiện cách đo như sau.
                        </p>
                        <p className={cx('overflow-sperate')}></p>
                        <span className={cx('setup-1')}>
                            <b
                                style={{
                                    'font-size': 14,
                                }}
                            >
                                Bước 1
                            </b>
                            : Đặt bàn chân lên tờ giấy trắng, rồi dùng bút vẽ bo
                            hết bàn chân (để chính xác thì bạn phải đặt bút
                            thẳng đứng và vuông góc với tờ giấy)
                        </span>
                        <img
                            alt=""
                            src="https://hstatic.net/969/1000003969/10/2015/4-11/huong_dan_cach_do_size_giay_01.jpg"
                        />
                        <p className={cx('overflow-sperate')}></p>
                        <span className={cx('setup-2')}>
                            <b
                                style={{
                                    'font-size': 14,
                                }}
                            >
                                Bước 2
                            </b>
                            : Dùng thước hay sợi dây đo một vòng khớp ngón phần
                            rộng nhất của bàn chân ở tư thế ngồi hoặc đứng thẳng
                            2 chân.
                        </span>
                        <img
                            alt=""
                            src="https://file.hstatic.net/1000003969/file/capture_grande.png"
                        />
                        <p className={cx('overflow-tab')}>
                            So sánh bảng dưới đây để biết size giày của bạn nhé!
                        </p>
                        <table
                            cellSpacing="0"
                            border="1"
                            className={cx('table__size')}
                        >
                            <tr>
                                <td
                                    style={{
                                        fontSize: 16,
                                    }}
                                    className={cx('row__size')}
                                >
                                    Size
                                </td>
                                <td className={cx('row__size')}>
                                    Chiều dài bàn chân
                                </td>
                                <td className={cx('row__size')}>
                                    Vòng khớp ngón(Đo ở tư thế ngồi)
                                </td>
                                <td className={cx('row__size')}>
                                    Vòng khớp ngón(Đo ở tư thế thẳng 2 chân)
                                </td>
                            </tr>
                            <tr>
                                <td>34</td>
                                <td>21.2</td>
                                <td>20.45</td>
                                <td>20.65</td>
                            </tr>
                            <tr>
                                <td>35</td>
                                <td>21.9</td>
                                <td>20.95</td>
                                <td>21.15</td>
                            </tr>
                            <tr>
                                <td>36</td>
                                <td>22.5</td>
                                <td>21.4</td>
                                <td>21.6</td>
                            </tr>
                            <tr>
                                <td>37</td>
                                <td>23.2</td>
                                <td>21.9</td>
                                <td>22.1</td>
                            </tr>
                            <tr>
                                <td>38</td>
                                <td>23.9</td>
                                <td>22.4</td>
                                <td>22.6</td>
                            </tr>
                            <tr>
                                <td>39</td>
                                <td>24.5</td>
                                <td>22.85</td>
                                <td>223</td>
                            </tr>
                            <tr>
                                <td>40</td>
                                <td>25.2</td>
                                <td>23.35</td>
                                <td>23.55</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformationProducts;
