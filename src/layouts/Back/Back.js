import classNames from 'classnames/bind';
import style from './Back.module.scss';
import { BsArrowUp } from 'react-icons/bs';
import { useState, useEffect } from 'react';
const cx = classNames.bind(style);
function Back() {
    const [check, setCheck] = useState(false);
    const [checkNone, setCheckNone] = useState(false);
    useEffect(() => {
        window.onscroll = function () {
            const srcollY = window.scrollY;
            if (srcollY > 150) {
                setCheck(true);
                setCheckNone(false);
            } else {
                setCheck(false);
                setCheckNone(true);
            }
        };
    });

    return (
        <a
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }}
            className={cx('wrapper', {
                'd-block': check,
                'animation-none': checkNone,
            })}
        >
            <BsArrowUp className={cx('arrowUp')} />
            <span className={cx('title')}>Về đầu trang</span>
        </a>
    );
}

export default Back;
