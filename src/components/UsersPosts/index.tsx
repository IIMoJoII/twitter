import React from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SubdirectoryArrowRightOutlinedIcon from "@material-ui/icons/SubdirectoryArrowRightOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

import s from './style.module.css'



const useStyles = makeStyles((theme) => ({
    newsIcons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#89898d",
        opacity: "0.8",
        cursor: "pointer",
        width: "60px",
        height: "20px",
        '&:hover': {
            color: "#3b819d",
        },
    },
}))

interface UserNewsProps {
    text: string;
    userUsername: string;
    userFullname: string;
    userAvatar: string;
    key: string;
}

export const UserNews: React.FC<UserNewsProps> = ({text, userFullname, userUsername, userAvatar, key}): React.ReactElement => {
    const classes = useStyles();

    return (
        <>
            <div className={s.usersPost}>
                <div className={s.postWrapper}>
                    <div className={s.userInfo}>
                        <img src={`${userAvatar}`} alt="user-photo"/>
                        <div className={s.userDatas}>
                            <div className={s.username}>
                                <p>{userFullname}</p>
                            </div>
                            <div className={s.usernickname}>
                                <p>@{userUsername}</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.postText}>
                        <p>{text}</p>
                    </div>
                    <div className={s.userFuncIcons}>
                        <div className={classes.newsIcons}>
                            <ChatBubbleOutlineIcon />
                            <span>500</span>
                        </div>
                        <div className={classes.newsIcons}>
                            <SubdirectoryArrowRightOutlinedIcon/>
                            <span>500</span>
                        </div>
                        <div className={classes.newsIcons}>
                            <FavoriteBorderOutlinedIcon/>
                            <span>500</span>
                        </div>
                        <div className={classes.newsIcons}>
                            <ShareOutlinedIcon/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
