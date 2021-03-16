import React from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";
import { Input } from "antd";

import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import {TagsState} from "../../store/tags/contracts/state";

import s from './style.module.css'
import {userInfo} from "os";



const { Search } = Input;
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
    StarBorderIcon: {
        marginRight: "10px",
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
    newsIcons: {
        color: "#89898d",
        opacity: "0.8",
        cursor: "pointer",
        width: "20px",
        height: "20px",
    },
    FindInput: {
        marginLeft: "20px",
        marginTop: "8px",
        width: "280px",
    },
    PersonAdd: {
        marginTop: "25px",
        color: "#5597b5",
        cursor: "pointer",
        '&:hover': {
            color: "#3b819d",
        },
    },
    CircularProgress: {
        marginLeft: "250px",
        marginTop: "17px",
    },

}))

interface InterestsMenuProps{
    items: TagsState['items'],
}

const InterestsMenu: React.FC<InterestsMenuProps> = ({items}) => {
    const classes = useStyles();
    const onSearch = (value:string) => {console.log(value)};

    return (
        <>
            <div className={s.menuFixed}>
                <Search placeholder="input search text" onSearch={onSearch} enterButton className={classes.FindInput}/>

                <div className={s.relevantTopics}>
                    <div className={s.boxHeader}>
                        <h1>Актуальное</h1>
                    </div>
                    {items.map((obj) => (<div key={obj._id} className={s.topicsBox}>
                        <span>{obj.name}</span>
                        <p>Откликов: {obj.count}</p>
                    </div>))
                    }
                </div>
                <div className={s.relevantTopics}>
                    <div className={s.boxHeader}>
                        <h1>Новые каналы</h1>
                    </div>
                    <div className={s.topicsBox}>
                        <div className={s.userInfo}>
                            <img src={`https://source.unsplash.com/user/erondu/1600x900?3`} alt="user-photo"/>
                            <div className={s.userDatas}>
                                <div className={s.topicsUsername}>
                                    <p className={s.username}>Анастасия Сысоева</p>
                                    <p className={s.usernickname}>@teamo</p>
                                </div>
                            </div>
                            <PersonAddOutlinedIcon className={classes.PersonAdd}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InterestsMenu;
