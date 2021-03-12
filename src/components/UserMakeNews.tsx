import React from 'react';

import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, Input} from "antd";

import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import HelpIcon from "@material-ui/icons/Help";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MyPhoto from "../img/myPhoto.png";



const { TextArea } = Input;
const useStyles = makeStyles((theme) => ({
    postIcons: {
        color: "#64676e",
        cursor: "pointer",
        '&:hover': {
            color: "#3b819d",
        },
    },
    postTextInput: {
        border: "none",
        fontSize: "15px",
        width: "710px",
    },
    postMakeNew: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "14px",
        marginLeft: "13px",
        border: "none",
        background: "#5597b5",
        color: "#ffffff",
        '&:hover': {
            background: "#3b819d",
            color: "#ffffff",
        },
    },
    CircularProgress: {
        marginLeft: "250px",
        marginTop: "17px",
    },

}))

interface UserMakeNewsProps {
    min_rows?: number
    max_rows?: number
}

const UserMakeNews: React.FC<UserMakeNewsProps> = ({min_rows, max_rows}): React.ReactElement => {
    const classes = useStyles();
    const [text, setText] = React.useState<string>('');
    const textPercent = Math.round((text.length / 280) * 100);
    const textCount = 280-text.length;

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget){
            setText(e.currentTarget.value);
        }
    }

    return (
        <>
            <div className="posts__user-info">
                <img src={MyPhoto} alt="user-photo"/>
            </div>
            <div className="posts__post-text">
                <TextArea
                    onChange={handleChangeTextarea}
                    className={classes.postTextInput}
                    placeholder="What's new"
                    autoSize={{ minRows: min_rows, maxRows: max_rows }}
                    value={text}
                />
            </div>
            <div className="posts__lover-box">
                <div className="posts__user-func-icons">
                    <ImageIcon className={classes.postIcons}/>
                    <GifIcon className={classes.postIcons}/>
                    <HelpIcon className={classes.postIcons}/>
                    <InsertEmoticonIcon className={classes.postIcons}/>
                    <ScheduleIcon className={classes.postIcons}/>
                </div>
                {text && <span className="posts__lover-box__max-length">{textCount}</span>}
                {text && <CircularProgress
                    className={classes.CircularProgress}
                    size={25}
                    variant="determinate"
                    value={textPercent > 100 ? 100 : textPercent}
                    style={textCount < 1 ? {color: 'red'} : {color: '#5597b5'}}
                />}
                <Button disabled={textCount < 0} className={classes.postMakeNew}>Создать новость</Button>
            </div>
        </>
    )
}

export default UserMakeNews;
