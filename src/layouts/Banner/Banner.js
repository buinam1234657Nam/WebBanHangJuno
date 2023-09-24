import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './Banner.module.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
const cx = classNames.bind(style);
const images = [
    {
        id: 0,
        src: 'https://file.hstatic.net/1000003969/file/1920x870-ccd_153d9112f59f4ee18a89b01208c5d6d7.jpg',
    },
    {
        id: 1,
        src: 'https://file.hstatic.net/1000003969/file/kv_sale_boi_thu_1920x_870_e100a4e442334c179c2656d295599a6f.jpg',
    },
    {
        id: 2,
        src: 'https://file.hstatic.net/1000003969/file/kv_falling_autumn_1920x870m_664a8d42d8154e29bc1da20a192a80da.jpg',
    },
];
function Banner() {
    const [id, setId] = useState(0);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check0, setCheck0] = useState(true);
    useEffect(
        function () {
            const timeOutId = setTimeout(() => {
                setId((pre) => pre + 1);
                if (id >= 2) {
                    setId(0);
                }
            }, 5000);
            if (id === 1) {
                setCheck1(true);
            } else {
                setCheck1(false);
            }
            if (id === 0) {
                setCheck0(true);
            } else {
                setCheck0(false);
            }
            if (id === 2) {
                setCheck2(true);
            } else {
                setCheck2(false);
            }
            return () => {
                clearInterval(timeOutId);
            };
        },
        [id],
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner', 'item')}>
                <img alt="" src={images[id].src} />
            </div>

            <div className={cx('nav')}>
                <span
                    onClick={() => {
                        if (id === 0) {
                            setId(2);
                        } else {
                            setId((pre) => pre - 1);
                        }
                    }}
                    className={cx('nav-left')}
                >
                    <BsChevronLeft />
                </span>
                <span
                    onClick={() => {
                        if (id === 2) {
                            setId(0);
                        } else {
                            setId((pre) => pre + 1);
                        }
                    }}
                    className={cx('nav-right')}
                >
                    <BsChevronRight />
                </span>
            </div>

            <div className={cx('dots')}>
                <div
                    onClick={() => {
                        setCheck0(true);
                        setId(0);
                    }}
                    className={cx('dots-container')}
                >
                    <span
                        className={cx({
                            active: check0,
                        })}
                    ></span>
                </div>
                <div
                    onClick={() => {
                        setCheck1(true);
                        setId(1);
                    }}
                    className={cx('dots-container')}
                >
                    <span
                        className={cx({
                            active: check1,
                        })}
                    ></span>
                </div>
                <div
                    onClick={() => {
                        setCheck2(true);
                        setId(2);
                    }}
                    className={cx('dots-container')}
                >
                    <span
                        className={cx({
                            active: check2,
                        })}
                    ></span>
                </div>
            </div>
        </div>
    );
}

export default Banner;
