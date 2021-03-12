import React from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";
import {UserNews} from "../components/UserNews";
import UserMakeNews from "../components/UserMakeNews";
import NavMenu from "../components/NavMenu";
import InterestsMenu from "../components/InterestsMenu";

import StarBorderIcon from '@material-ui/icons/StarBorder';

import './HomePage.css'


const useStyles = makeStyles((theme) => ({
    StarBorderIcon: {
        marginRight: "10px",
    },
}))

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = (): React.ReactElement => {
    const classes = useStyles();

    return (
        <>
            <div className="wrapper">
                <div className="nav-menu">
                    <NavMenu />
                </div>
                <div className="posts">
                    <div className="posts__header">
                        <h1>Новости</h1>
                        <StarBorderIcon className={classes.StarBorderIcon}/>
                    </div>
                    <div className="posts__users-post">
                        <UserMakeNews min_rows={1} max_rows={6}/>
                    </div>
                    <div className="news">
                        <UserNews />
                    </div>
                </div>
                <div className="interests-menu">
                    <InterestsMenu />
                </div>
            </div>

        </>
    );
}

export default HomePage;

