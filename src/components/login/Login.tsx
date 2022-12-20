import React from 'react';
import style from './login.module.scss'
import {useFormik} from "formik";
import {login} from '../../ redux/authReducer';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../ redux/redux-store";
import {Redirect} from "react-router-dom";


type FormikErrorType = {
    email?: string;
    password?: string;
    rememberMe?: boolean
}


const Login = () => {


    const isAuth = useSelector<AppStateType, boolean>(state => state.isAuth.isAuth)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 4) {
                errors.password = 'Password must be 4 characters or more'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(login(values.email, values.password, values.rememberMe))
            formik.resetForm();
        },
    })


    if(isAuth) {
     return   <Redirect to={'/profile'} />
    }

    return (
        <div className={style.container}>
            <h1> Login...</h1>


            <form
                onSubmit={formik.handleSubmit}
            >

                <div>
                    <input placeholder='Login' id='email' type='email'
                           {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email &&
                        <div style={{'color': 'red'}}>{formik.errors.email}</div>}

                </div>
                <div>
                    <input placeholder='Password' id='password' type='password'
                           {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password &&
                        <div style={{'color': 'red'}}>{formik.errors.password}</div>}

                </div>
                <div>
                    <input type="checkbox"
                           {...formik.getFieldProps('rememberMe')}
                           onChange={formik.handleChange}/>

                    <span>Remember me</span>
                </div>
                <button type='submit'>Login</button>
            </form>

        </div>
    );
};

export default Login;