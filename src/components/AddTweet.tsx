import React from 'react';
import CloseIcon from "@material-ui/icons/Close";
import UserMakeNews from "./UserMakeNews";
import makeStyles from "@material-ui/core/styles/makeStyles";

import '../style/AddTweet.css'



const useStyles = makeStyles((theme) => ({
    loginSideCloseSignupIcon: {
        position: 'absolute',
        marginTop: '-15px',
        marginLeft: '766px',
        cursor: 'pointer',
        color: '#d24242',
    },
}))

const AddTweet = () => {
    const classes = useStyles();

    return(
        <>
            <div className="modal-make-news">
                <CloseIcon className={classes.loginSideCloseSignupIcon}/>
                <UserMakeNews min_rows={6} max_rows={6}/>
            </div>
        </>
    )
}

export default AddTweet;
