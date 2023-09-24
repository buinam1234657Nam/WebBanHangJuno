import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { CartIcon, UseIcon } from '~/images/SVG';
import ListProduct from './ListProduct';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Header({ primary }) {
    const [statusSearch, setStatusSearch] = useState(false);
    let nameUse = '';
    const [check, setCheck] = useState(false);
    const responsive = JSON.parse(sessionStorage.getItem('informationUse'));
    if (responsive) {
        const dataUse = responsive.values;
        const dataName = dataUse.name.trim().split(' ');
        const firstName = dataName[0].toString();
        const lastName = dataName[dataName.length - 1].toString();
        nameUse = firstName + ' ' + lastName;
    } else {
        nameUse = '';
    }

    return (
        <div
            className={cx('wrapper', 'row', {
                border_bot: primary,
            })}
        >
            <div className={cx('col-2', 'd-center-align', 'h-100')}>
                <img
                    alt="logo"
                    className={cx('logo')}
                    src="https://file.hstatic.net/1000003969/file/logo-svg.svg"
                />
            </div>
            <div
                className={cx(
                    'category',
                    'col-md-8',
                    'd-flex',
                    'justify-content-center',
                )}
            >
                <a>Hàng mới</a>
                <a className={cx('wrapper-list')}>
                    Sản phẩm
                    <div className={cx('hidden-list', 'd-none')}>
                        <ListProduct className="list-product" />
                    </div>
                </a>
                <a>Take me to summer</a>
                <a className={cx('text-red')}>Sale</a>
                <a className={cx('text-red')}>Sale quần áo từ 199k</a>
                <a>Showroom</a>
            </div>

            <div className={cx('search', 'col-1', 'd-center-align')}>
                <div
                    className={cx('d-center-align', 'p-3')}
                    onClick={() => setStatusSearch(!statusSearch)}
                >
                    <BiSearch />
                    <span>Tìm kiếm</span>
                </div>

                {statusSearch && (
                    <div className={cx('search-input')}>
                        <input placeholder="Nhập tên hoặc mã sản phẩm..." />
                        <button className={cx('btn-search')}>
                            <BiSearch />
                        </button>
                    </div>
                )}
            </div>

            <div className={cx('action', 'col-1')}>
                <Link
                    to={nameUse ? '' : '/register'}
                    className={cx('icon-use')}
                >
                    <div
                        className={cx('info-use')}
                        onMouseEnter={() => {
                            setCheck(true);
                        }}
                        onMouseLeave={() => {
                            setCheck(false);
                        }}
                    >
                        <UseIcon />
                        <span className={cx('name')}>{nameUse}</span>
                        {nameUse && (
                            <ul
                                onMouseLeave={() => {
                                    setCheck(false);
                                }}
                                className={cx('option-use', {
                                    'd-block': check,
                                })}
                            >
                                <li>
                                    <Link
                                        to=""
                                        style={{
                                            color: 'black',
                                        }}
                                    >
                                        {nameUse}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        style={{
                                            color: 'black',
                                        }}
                                        to="/login"
                                    >
                                        Giỏ hàng
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        style={{
                                            color: 'black',
                                        }}
                                        to="register"
                                    >
                                        Đăng xuất
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </Link>
                <span className={cx('cart')}>
                    <CartIcon />
                </span>
            </div>
        </div>
    );
}

export default Header;
