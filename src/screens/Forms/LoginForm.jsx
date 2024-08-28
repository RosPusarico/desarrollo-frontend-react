import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData, clearFormData} from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import ModalLogout from "../../components/ModalLogout"

import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({ username: '', email: '', password:''});
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showModalLogout, setShowModalLogout] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        //
        if (values.password !== form.password) {
            setShowModalInfo(true);
            return;
        }else{
            dispatch(saveFormData(values));
        }
        
    }
    const hideModalInfo = () => {
        setShowModalInfo(false);
    };
    const handlePassword = () => {
        setShowPassword(!showPassword);
    }
    const hideModalLogout= () => {
        setShowModalLogout(false);
    };  
    const handleLogout = () => {
        setShowModalLogout(true);
    }
    //
    const presionarSalir= () => {
        dispatch(clearFormData()); 
        resetForm();
        setShowModalLogout(false);
    };  


    return (
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo
                visible={showModalInfo}
                message="Password incorrecto"
                onClose={hideModalInfo}
            />
            <ModalLogout
                visible={showModalLogout}
                message="¿Estas seguro de que quieres cerrar sesion?"
                onClose={hideModalLogout}
                onPresionar={presionarSalir}
            />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1><center>Login Form</center></h1>
                    <h5>Username: {form.formData.username}</h5>
                    {/* <h5>email: {form.formData.email}</h5>
                    <h5>password: {form.formData.password}</h5>*/}
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                    <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button type="button" onClick={handlePassword}>
                            {showPassword ? "Hide" : "Show"}                
                        </button>
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <a href="#" onClick={handleLogout} className="logout-link">Logout</a>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;