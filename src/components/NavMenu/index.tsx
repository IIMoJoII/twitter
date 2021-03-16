import React from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "antd";

import AnnouncementIcon from "@material-ui/icons/Announcement";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MailIcon from "@material-ui/icons/Mail";
import ListAltIcon from "@material-ui/icons/ListAlt";
import QueueIcon from "@material-ui/icons/Queue";
import PersonIcon from "@material-ui/icons/Person";
import MoreIcon from "@material-ui/icons/More";
import AddIcon from "@material-ui/icons/Add";

import AddTweet from "../AddTweetModal";

import s from './style.module.css'


const useStyles = makeStyles((theme) => ({
    makeNewBtn:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "34px",
        marginTop: "30px",
        marginLeft: "23px",
        border: "none",
        background: "#5597b5",
        color: "#ffffff",
        '&:hover': {
            background: "#3b819d",
            color: "#ffffff",
        },
    },
    addIcon:{
        marginLeft: "8px",
        fontSize: "22px",
    },
    loginSideCloseSignupIcon: {
        position: 'absolute',
        marginTop: '-15px',
        marginLeft: '772px',
        cursor: 'pointer',
        color: '#d24242',
    },
}))

const NavMenu = () => {
    const classes = useStyles();
    const [visibleAddNews, setVisibleAddNews] = React.useState<boolean>(false);

    const handleClickOpenAddNews = () => {
        setVisibleAddNews(true);
    }

    const onCloseAddNews = () => {
        setVisibleAddNews(false);
    }

    return (
        <>
            <div className={s.navMenuFixed}>
                <h1>SJV TRASH</h1>
                <ul>
                    <li><span><AnnouncementIcon /></span>Новости</li>
                    <li><span><FiberNewIcon /></span>Новинки</li>
                    <li><span><NotificationsActiveIcon /></span>Уведомления</li>
                    <li><span><MailIcon /></span>Сообщения</li>
                    <li><span><ListAltIcon/></span>Закреплённое</li>
                    <li><span><QueueIcon /></span>Темы</li>
                    <li><span><PersonIcon /></span>Профиль</li>
                    <li><span><MoreIcon /></span>Остальное</li>
                </ul>
                <Button
                    onClick={handleClickOpenAddNews}
                    className={classes.makeNewBtn}>
                    Создать новость
                    <AddIcon
                        className={classes.addIcon}
                    />
                </Button>
                {visibleAddNews && <div className="modal">
                    <AddTweet onCloseAddNews={onCloseAddNews}/>
                    <div onClick={onCloseAddNews} className={s.blackScreen}/>
                </div>}
            </div>

        </>
    )
}

export default NavMenu;
