import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import CloseIcon from '@material-ui/icons/Close';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Button } from 'antd';

import '../antd.css'
import './signin.css'
import {RegistrationForm} from "../components/RegistrationForm";
import {SigninForm} from "../components/SignInForm";

const useStyles = makeStyles((theme) => ({
    loginSideTwitterIcon:{
        fontSize: '50px',
        color: '#5597b5',
    },
    mainColor: {
        backgroundColor: '#5597b5',
    },
    loginSideCloseIcon: {
        position: 'absolute',
        marginTop: '-250px',
        marginLeft: '440px',
        cursor: 'pointer',
        color: '#d24242',
    },
    loginSideCloseSignupIcon: {
        position: 'absolute',
        marginTop: '-340px',
        marginLeft: '530px',
        cursor: 'pointer',
        color: '#d24242',
    },
    signinBtn:{
        marginTop: '10px',
        width: '250px',
    },
    signupBtn:{
        backgroundColor: '#5597b5',
        border: 'none',
        width: '250px',
    }
}))


function SignIn() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openSignup, setOpenSignup] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpenSignUp = () => {
        setOpenSignup(true);
    }

    const handleCloseSignup = () => {
        setOpenSignup(false);
    }


    return(
        <>
            <form className='sign-form'>
                <TwitterIcon color="primary" className={classes.loginSideTwitterIcon}/>
                <h1>Узнайте чем занимаются люди по всему миру</h1>

                <p>Присоединяйся прямо сейчас</p>

                <Button onClick={handleOpenSignUp} className={classes.signupBtn} type="primary">Зарегестрироваться</Button>
                <Button onClick={handleOpen} className={classes.signinBtn} type="default">Войти</Button>
                {openSignup && <div className="sign-form__signup-modal">
                    <CloseIcon onClick={handleCloseSignup} className={classes.loginSideCloseSignupIcon}/>
                    <RegistrationForm/>
                </div>}
                {open && <div className="sign-form__signin-modal">
                    <CloseIcon onClick={handleClose} className={classes.loginSideCloseIcon}/>
                    <SigninForm />
                </div>}
            </form>
        </>
    );
}

export default SignIn;
