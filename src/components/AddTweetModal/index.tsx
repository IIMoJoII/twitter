import React from 'react';
import CloseIcon from "@material-ui/icons/Close";

import makeStyles from "@material-ui/core/styles/makeStyles";


import s from './style.module.css'
import UserMakeNews from "../UserMakePost";



const useStyles = makeStyles((theme) => ({
    loginSideCloseSignupIcon: {
        position: 'absolute',
        marginTop: '-15px',
        marginLeft: '766px',
        cursor: 'pointer',
        color: '#d24242',
    },
}))

interface AddTweetProps {
    onCloseAddNews: () => void;
}

const AddTweet: React.FC<AddTweetProps> = ({onCloseAddNews}): React.ReactElement => {
    const classes = useStyles();

    const closeAddNewsCallback = React.useCallback(
        () => {
            onCloseAddNews()
        },
        [],
    )

    return(
        <>
            <div className={s.modal}>
                <CloseIcon onClick={closeAddNewsCallback} className={classes.loginSideCloseSignupIcon}/>
                <UserMakeNews min_rows={6} max_rows={6}/>
            </div>
        </>
    )
}

export default AddTweet;
