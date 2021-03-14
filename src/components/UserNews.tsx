import React from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SubdirectoryArrowRightOutlinedIcon from "@material-ui/icons/SubdirectoryArrowRightOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import OurPhoto from "../img/we.jpg";



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
            <div className="news__users-post">
                <div className="posts__user-info">
                    <img src={`${userAvatar}`} alt="user-photo"/>
                    <div className="user__datas">
                        <div className="posts__users-post__username">
                            <p>{userFullname}</p>
                        </div>
                        <div className="posts__users-post__usernickname">
                            <p>@{userUsername}</p>
                        </div>
                    </div>
                </div>
                <div className="news__post-text">
                    <p>{text}</p>
                </div>
                <div className="news__user-func-icons">
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

        </>
    )
}
