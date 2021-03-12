import React from 'react';

import OurPhoto from "../img/we.jpg";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Input } from "antd";

import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";



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

const InterestsMenu = () => {
    const classes = useStyles();
    const onSearch = (value:string) => {console.log(value)};

    return (
        <>
            <div className="interests-menu__fixed">
                <Search placeholder="input search text" onSearch={onSearch} enterButton className={classes.FindInput}/>

                <div className="relevant-topics">
                    <div className="relevant-topics__box-header">
                        <h1>Актуальное</h1>
                    </div>
                    <div className="relevant-topics__box">
                        <span>Актуальное: Россия</span>
                        <p>Спутник V</p>
                    </div>
                    <div className="relevant-topics__box">
                        <span>Актуальное: Россия</span>
                        <p>Мемы</p>
                    </div>
                    <div className="relevant-topics__box">
                        <span>Актуальное: Россия</span>
                        <p>Политика</p>
                    </div>
                    <div className="relevant-topics__box">
                        <span>Актуальное: Россия</span>
                        <p>Президент Путин</p>
                    </div>
                </div>
                <div className="relevant-topics">
                    <div className="relevant-topics__box-header">
                        <h1>Новые каналы</h1>
                    </div>
                    <div className="relevant-topics__box">
                        <div className="posts__user-info">
                            <img src={OurPhoto} alt="user-photo"/>
                            <div className="user__datas">
                                <div className="relevant-topics__box-username">
                                    <p className="username">Анастасия Сысоева</p>
                                    <p className="usernickname">@teamo</p>
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
