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

export const UserNews = () => {
    const classes = useStyles();

    return (
        <>
            <div className="news__users-post">
                <div className="posts__user-info">
                    <img src={OurPhoto} alt="user-photo"/>
                    <div className="user__datas">
                        <div className="posts__users-post__username">
                            <p>Анастасия Сысоева</p>
                        </div>
                        <div className="posts__users-post__usernickname">
                            <p>@teamo</p>
                        </div>
                    </div>
                </div>
                <div className="news__post-text">
                    <p>Я настя, настя настя, я попка настя, настя попка, я настя попка-пиявка, попка-пиявка,
                        пусть все знают что я настя - попка - пиявка моего парня Жени. Не дарите мне больше
                        подарки, а то Женя вас всех задушит.
                    </p>
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
