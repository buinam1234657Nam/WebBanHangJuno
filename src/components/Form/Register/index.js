import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import querySelector from 'query-selector';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const cx = classNames.bind(styles);
function Register() {
    const [link, setLink] = useState();
    const [isEye, setIsEye] = useState(false);
    const [isEyeConfrimPassWord, setIsEyeConfrimPassWord] = useState(false);
    const { values, handleChange, errors, handleSubmit, handleBlur, touched } =
        useFormik({
            initialValues: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            validationSchema: yup.object({
                name: yup
                    .string()
                    .required('Required')
                    .min(8, 'Name must contain at least 8 characters'),
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
                confirmPassword: yup
                    .string()
                    .required('Required')
                    .oneOf(
                        [yup.ref('password'), null],
                        'Password must matches',
                    ),
            }),
        });

    const { name, email, password, confirmPassword } = errors;
    useEffect(() => {
        setTimeout(() => {
            if (link == '/login') {
                window.open('http://localhost:5000/login', '_self');
            }
        });
    });
    const handleClickForm = function () {
        if (
            (name == undefined) &
            (email == undefined) &
            (password == undefined) &
            (confirmPassword == undefined) &
            touched.name &
            touched.email &
            touched.password &
            touched.confirmPassword
        ) {
            axios({
                method: 'post',
                url: 'http://localhost:3000/information',
                data: {
                    values,
                },
            });
            setLink('/login');
        } else {
            alert('Invalid information please re-enter');
        }
    };

    return (
        <div>
            <div className={cx('wrapper', 'd-flex')}>
                <form onSubmit={handleSubmit} className={cx('form')}>
                    <h1 className={cx('title')}>Create Account </h1>
                    <div className={cx('btn', 'mb-34')}>
                        <Link
                            to="/register"
                            className={cx('btn-Login', 'btn-active')}
                        >
                            Signup
                        </Link>

                        <Link to="/login" className={cx('btn-Signup')}>
                            Login
                        </Link>
                    </div>
                    <input
                        type="text"
                        className={cx('name', 'mb-26', {
                            active__input: errors.name && touched.name,
                        })}
                        placeholder="Name"
                        required
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                        <p className={cx('errors')}>{errors.name}</p>
                    )}
                    <input
                        type="email"
                        className={cx('email', 'mb-26', {
                            active__input: errors.email && touched.email,
                        })}
                        placeholder="Email Address"
                        required
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                        <p className={cx('errors')}>{errors.email}</p>
                    )}
                    <div className={cx('d-flex', 'wrapper-password')}>
                        <input
                            type="password"
                            className={cx('password', 'mb-26', {
                                active__input:
                                    errors.password && touched.password,
                            })}
                            placeholder="Password"
                            required
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        <div className={cx('hidden-password')}>
                            <span
                                onClick={() => {
                                    setIsEye(!isEye);
                                    const passwordInput = querySelector(
                                        '.' + cx('password'),
                                    )[0];
                                    passwordInput.type = 'text';
                                }}
                                className={cx('eye', {
                                    'd-none': isEye,
                                })}
                            >
                                <BsEyeSlash />
                            </span>
                            <span
                                className={cx('eye-close', {
                                    'd-none': !isEye,
                                })}
                                onClick={() => {
                                    setIsEye(!isEye);
                                    const passwordInput = querySelector(
                                        '.' + cx('password'),
                                    )[0];
                                    passwordInput.type = 'password';
                                }}
                            >
                                <BsEye />
                            </span>
                        </div>
                    </div>
                    {errors.password && touched.password && (
                        <p className={cx('errors')}>{errors.password}</p>
                    )}
                    <div className={cx('d-flex', 'wrapper-password')}>
                        <input
                            type="password"
                            className={cx('confirm-password', 'mb-26', {
                                active__input:
                                    errors.confirmPassword &&
                                    touched.confirmPassword,
                            })}
                            placeholder="Confirm password"
                            required
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className={cx('hidden-password')}>
                            <span
                                onClick={() => {
                                    setIsEyeConfrimPassWord(
                                        !isEyeConfrimPassWord,
                                    );
                                    const confirmPasswordInput = querySelector(
                                        '.' + cx('confirm-password'),
                                    )[0];
                                    confirmPasswordInput.type = 'text';
                                }}
                                className={cx('eye', {
                                    'd-none': isEyeConfrimPassWord,
                                })}
                            >
                                <BsEyeSlash />
                            </span>
                            <span
                                onClick={() => {
                                    setIsEyeConfrimPassWord(
                                        !isEyeConfrimPassWord,
                                    );
                                    const confirmPasswordInput = querySelector(
                                        '.' + cx('confirm-password'),
                                    )[0];
                                    confirmPasswordInput.type = 'password';
                                }}
                                className={cx('eye-close', {
                                    'd-none': !isEyeConfrimPassWord,
                                })}
                            >
                                <BsEye />
                            </span>
                        </div>
                    </div>
                    {errors.confirmPassword && touched.confirmPassword && (
                        <p className={cx('errors')}>{errors.confirmPassword}</p>
                    )}
                    <Link
                        onClick={handleClickForm}
                        onSubmit={handleSubmit}
                        type="submit"
                        to={link}
                        className={cx(
                            'btn-submit',
                            'd-flex',
                            'justify-content-center',
                            'align-item-center',
                        )}
                    >
                        Signup
                    </Link>

                    <div className={cx('footer')}>
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;
