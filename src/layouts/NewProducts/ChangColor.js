import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import querySelector from 'query-selector';
const cx = classNames.bind(styles);
function ChangeColor({ data, className }) {
    const arrayColor = querySelector('.' + cx('color'));
    return (
        <span
            onClick={(e) => {
                arrayColor.forEach((option) => {
                    option.classList.remove(cx('change-color-active'));
                });
                e.target.classList.add(cx('change-color-active'));
            }}
            style={{ background: data.color }}
            className={cx('color', {
                [className]: className,
            })}
        ></span>
    );
}

export default ChangeColor;
