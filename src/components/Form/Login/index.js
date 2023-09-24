import { useState, useRef, useEffect } from 'react';
import styles from './Login.module.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';
import classNames from 'classnames/bind';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
const cx = classNames.bind(styles);
function Login({ children }) {
    const [data, setData] = useState([]);
    const [useData, setUseData] = useState([]);
    const [btnLogin, setBtnLogin] = useState(false);
    const [btnSignup, setBtnSignup] = useState(true);
    const [hiddenPass, setHiddenPass] = useState(false);
    const passWord = useRef();
    const [link, setLink] = useState();
    sessionStorage.setItem('informationUse', JSON.stringify(useData));
    useEffect(() => {
        const callApi = async () => {
            const getData = await fetch('http://localhost:3000/information');
            const responsive = await getData.json();
            setData(responsive);
        };
        callApi();
        cleanup();
    }, []);
    useEffect(() => {
        setTimeout(() => {
            if (link == '/') {
                window.open('http://localhost:5000/', '_self');
            }
        });
    }, [link]);
    const { values, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .required('Required')
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    'Invalid email please re-enter',
                ),
            password: yup
                .string()
                .required('Required')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    'Password must have At least eight characters, at least one letter and one number',
                ),
        }),
    });
    const { email, password } = values;

    const handleCheckSubmit = function (e) {
        const check = [];

        data.filter((item, index) => {
            if (
                (item.values.email == email) &
                (item.values.password == password)
            ) {
                check.push(item);
                setUseData(item);
            }
        });
        if (check.length > 0) {
            setLink('/');
        } else {
            alert('loi');
        }
    };

    return (
        <div className={cx('wrapper', 'd-flex')}>
            <form onSubmit={handleSubmit} className={cx('form')}>
                <h1 className={cx('title')}>Login </h1>
                <div className={cx('btn', 'mb-34')}>
                    <Link
                        to="/login"
                        className={cx('btn-Login', {
                            'btn-active': btnSignup,
                        })}
                        onClick={() => {
                            setBtnLogin(false);
                            setBtnSignup(true);
                        }}
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className={cx('btn-Signup', {
                            'btn-active': btnLogin,
                        })}
                        onClick={() => {
                            setBtnLogin(true);
                            setBtnSignup(false);
                        }}
                    >
                        Signup
                    </Link>
                </div>
                {children}
                <input
                    name="email"
                    type="email"
                    className={cx('email', 'mb-26')}
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <div className={cx('d-flex', 'wrapper-password')}>
                    <input
                        name="password"
                        type="password"
                        className={cx('password', 'mb-26')}
                        placeholder="Password"
                        required
                        value={password}
                        ref={passWord}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    <div className={cx('hidden-password')}>
                        <span
                            className={cx('eye', {
                                'd-none': hiddenPass,
                            })}
                            onClick={() => {
                                setHiddenPass(!hiddenPass);

                                passWord.current.setAttribute('type', 'text');
                                passWord.current.focus();
                            }}
                        >
                            <BsEyeSlash />
                        </span>
                        <span
                            className={cx('eye-close', {
                                'd-none': !hiddenPass,
                            })}
                            onClick={() => {
                                setHiddenPass(!hiddenPass);
                                passWord.current.setAttribute(
                                    'type',
                                    'password',
                                );
                                passWord.current.focus();
                            }}
                        >
                            <BsEye />
                        </span>
                    </div>
                </div>

                <Link
                    to={link}
                    className={cx(
                        'btn-submit',
                        'd-flex',
                        'justify-content-center',
                        'align-item-center',
                    )}
                    onClick={handleCheckSubmit}
                >
                    Login
                </Link>

                <div className={cx('footer')}>
                    If you already have an account?
                    <Link to="/register">Sigup</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
