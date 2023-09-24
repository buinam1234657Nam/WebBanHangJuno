import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '~/store/reducers/products';
import ChangeColor from './ChangColor';
const cx = classNames.bind(styles);
function Product({ className, data }) {
    const dispatch = useDispatch();
    const [check, setCheck] = useState(false);
    const [load, setLoad] = useState(false);
    const [imagesColor, setImagesColor] = useState();
    const imagesOnload = function () {
        setLoad(true);
    };

    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
            onMouseLeave={() => {
                setCheck(false);
            }}
        >
            <div
                className={cx('content')}
                onMouseLeave={() => {
                    setImagesColor();
                }}
            >
                <Link
                    onMouseEnter={() => setCheck(true)}
                    to="/products"
                    className={cx('block')}
                >
                    <div
                        className={cx('box')}
                        onClick={() => {
                            dispatch(
                                addProduct({
                                    payload: data,
                                }),
                            );
                        }}
                    >
                        <img
                            loading="lazy"
                            onLoad={imagesOnload}
                            className={cx('product__images')}
                            alt=""
                            src={imagesColor ? imagesColor : data.imagesDefault}
                            onMouseLeave={(e) => {
                                e.target.setAttribute(
                                    'src',
                                    data.imagesDefault,
                                );
                            }}
                            onMouseEnter={(e) => {
                                e.target.setAttribute('src', data.imagesChange);
                            }}
                        />

                        {!load && (
                            <div className={cx('lds-roller')}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        )}
                    </div>
                    <div
                        className={cx('dependencies')}
                        onClick={() => {
                            dispatch(
                                addProduct({
                                    payload: data,
                                }),
                            );
                        }}
                    >
                        <h4 className={cx('name')}>{data.description}</h4>
                        <h4 className={cx('price')}>{data.price}</h4>
                    </div>
                </Link>

                <div
                    className={cx(
                        'active',
                        'flex-column',
                        'align-items-center',
                        {
                            'd-flex': check,
                        },
                    )}
                >
                    <div className={cx('color-option', 'd-flex')}>
                        {data.type.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cx('wrapper-color')}
                                >
                                    <ChangeColor
                                        data={item}
                                        onMouseEnter={() => {
                                            setImagesColor(item.images);
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx('size')}>
                        {data.size.map((option, index) => {
                            return <span key={index}>{option}</span>;
                        })}
                    </div>
                    <Link
                        onClick={() => {
                            dispatch(
                                addProduct({
                                    payload: data,
                                }),
                            );
                        }}
                        to="/products"
                        className={cx(
                            'btn-buy',
                            'd-flex',
                            'justify-content-center',
                            'align-items-center',
                        )}
                    >
                        MUA NGAY
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Product;
