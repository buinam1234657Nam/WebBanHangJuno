import classNames from 'classnames/bind';
import styles from '~/components/InformationsProducts/InformationProducts.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChangeColor from '~/layouts/NewProducts/ChangColor';
import { useEffect, useState } from 'react';
import querySelector from 'query-selector';
import { BsCheck2 } from 'react-icons/bs';
const cx = classNames.bind(styles);
function InformationContent() {
    const [change, setChange] = useState([]);
    const [changeSize, setChangeSize] = useState([]);
    const data = useSelector((state) => state.product);
    const resultSizeL = data[0].payload.imagesInformation[0];
    const resultSizeS = data[0].payload.imagesInformation[1];
    const responsive = data[0].payload;
    const arrayColor = querySelector('.' + cx('color'));
    const arraySize = querySelector('.' + cx('choose-size'));
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [optionColor, setOptionColor] = useState();
    const [overflowSuccess, setOverflowSuccess] = useState(false);
    let choose = {};
    const [optionSize, setOptionSize] = useState();

    useEffect(() => {
        setOptionColor(color);
    }, [color]);
    useEffect(() => {
        setOptionSize(size);
    }, [size]);
    const handleAddCart = function () {
        if (optionColor && optionSize) {
            choose = {
                color: optionColor,
                size: optionSize,
            };
            setOverflowSuccess(true);
        } else if (!optionSize) {
            alert('Vui lòng chọn size');
        } else if (!optionColor) {
            alert('Vui lòng chọn màu');
        }
    };
    return (
        <div className={cx('content', 'row')}>
            <div
                className={cx('overflow-hidden-success', {
                    'd-block': overflowSuccess,
                })}
            >
                <div className={cx('overflow-check')}>
                    <BsCheck2 className={cx('overflow-check-icon')} />
                </div>

                <div className={cx('overflow-success')}>
                    Sản phẩm đã được thêm vào Giỏ hàng
                </div>
            </div>
            <div className={cx('content-left', 'col-8', 'gx-3')}>
                <div className={cx('images-big', 'row')}>
                    {resultSizeL.imagesSizeL.map((item, index) => {
                        return (
                            <img
                                key={index}
                                alt=""
                                className={cx(
                                    'col-6',
                                    'gy-0',
                                    'gx-1',
                                    'imagesL',
                                )}
                                src={item}
                            />
                        );
                    })}
                </div>

                <div className={cx('images-small', 'row')}>
                    {resultSizeS.imagesSizeS.map(function (item, index) {
                        return (
                            <img
                                alt=""
                                className={cx('col-3', 'gx-1')}
                                src={item}
                            />
                        );
                    })}
                </div>
            </div>

            <div className={cx('content-right', 'col-4', 'gx-3')}>
                <h3 className={cx('description')}>{responsive.description}</h3>
                <span className={cx('price')}>{responsive.price}</span>
                <div className={cx('color')}>
                    {responsive.type.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onClick={(e) => {
                                    setChange(arrayColor);
                                    change.forEach((option) => {
                                        option.classList.remove(
                                            cx('change-color-active'),
                                        );
                                    });
                                    e.target.classList.add(
                                        cx('change-color-active'),
                                    );
                                    setColor(item.color);
                                }}
                                className={cx('wrapper-color')}
                            >
                                <ChangeColor
                                    className={cx('change-color')}
                                    data={item}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className={cx('size')}>
                    {responsive.size.map((item, index) => {
                        return (
                            <span
                                onClick={(e) => {
                                    setSize(item);
                                    setChangeSize(arraySize);
                                    changeSize.forEach((option) => {
                                        option.classList.remove(
                                            cx('border-size'),
                                        );
                                    });
                                    e.target.classList.add(cx('border-size'));
                                }}
                                key={index}
                                className={cx('choose-size')}
                            >
                                {item}
                            </span>
                        );
                    })}
                </div>
                <a className={cx('instruct-size')}>Huong Dan Tinh Size</a>
                <div className={cx('btn')}>
                    <button onClick={handleAddCart} className={cx('btn_cart')}>
                        Thêm vào giỏ hàng
                    </button>
                    <button className={cx('btn_buy')}>Mua ngay</button>
                </div>
                <div className={cx('login')}>
                    <Link to="/login" className={cx('link-login')}>
                        Dang nhap
                    </Link>
                    để tích điểm và hưởng quyền lợi thành viên từ JUNO
                </div>
                <div className={cx('info_add')}>
                    <h3>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h3>
                    <h4>(Cho hoá đơn từ 300.000đ)</h4>
                </div>
                <div className={cx('info_add')}>
                    <h3>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h3>
                    <h4>(Cho hoá đơn từ 300.000đ)</h4>
                </div>
                <div className={cx('info_add')}>
                    <h3>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h3>
                    <h4>(Cho hoá đơn từ 300.000đ)</h4>
                </div>
            </div>
        </div>
    );
}

export default InformationContent;
