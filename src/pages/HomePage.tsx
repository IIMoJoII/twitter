import React from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";
import {UserNews} from "../components/UserNews";
import UserMakeNews from "../components/UserMakeNews";
import NavMenu from "../components/NavMenu";
import InterestsMenu from "../components/InterestsMenu";
import CircularProgress from '@material-ui/core/CircularProgress';

import StarBorderIcon from '@material-ui/icons/StarBorder';

import './HomePage.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweets, selectTweetsItems} from "../store/ducks/tweets/selectors";


const useStyles = makeStyles((theme) => ({
    StarBorderIcon: {
        marginRight: "10px",
    },
}))

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = (): React.ReactElement => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading)

    React.useEffect(() => {
        dispatch(fetchTweets());
    }, [])

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
                        {isLoading ? <div className="centered"><CircularProgress /></div> : tweets.map(tweet => <UserNews
                            text={tweet.text}
                            userFullname={tweet.user.fullname}
                            userUsername={tweet.user.username}
                            userAvatar={tweet.user.avatarURL}
                            key={tweet._id}/>)}
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

