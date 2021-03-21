import React from 'react';

import s from './style.module.css'
import NavMenu from "../components/NavMenu";
import InterestsMenu from "../components/InterestMenu";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import UserMakeNews from "../components/UserMakePost";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Route} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import {UserNews} from "../components/UsersPosts";


const useStyles = makeStyles((theme) => ({
    StarBorderIcon: {
        marginRight: "10px",
    },
}))

interface LayoutPageProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutPageProps> = ({children}): React.ReactElement => {
    const classes = useStyles();

    return (
        <div className={s.wrapper}>
            <div className={s.navMenu}>
                <NavMenu />
            </div>
            <div className={s.posts}>
                <div className={s.postsHeader}>
                    <h1>Новости</h1>
                    <StarBorderIcon className={classes.StarBorderIcon}/>
                </div>
                <div className={s.userPost}>
                    <UserMakeNews min_rows={1} max_rows={6}/>
                </div>
                {children}
            </div>
            <div className={s.interestsMenu}>
                <InterestsMenu />
            </div>
        </div>
    );
}

export default Layout;

