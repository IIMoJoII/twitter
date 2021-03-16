import React from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from '@material-ui/core/CircularProgress';

import StarBorderIcon from '@material-ui/icons/StarBorder';

import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {fetchTags} from "../../store/tags/actionCreators";
import {selectIsTagsLoading, selectTagsItems} from "../../store/tags/selectors";

import s from './style.module.css'
import NavMenu from "../../components/NavMenu";
import UserMakeNews from "../../components/UserMakePost";
import {UserNews} from "../../components/UsersPosts";
import InterestsMenu from "../../components/InterestMenu";


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
    const tags = useSelector(selectTagsItems);
    const isLoadingTags = useSelector(selectIsTagsLoading)

    React.useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch])

    return (
        <>
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
                    <div className={s.news}>
                        {isLoading ? <div className={s.centered}><CircularProgress /></div> : tweets.map(tweet => <UserNews
                            text={tweet.text}
                            userFullname={tweet.user.fullname}
                            userUsername={tweet.user.username}
                            userAvatar={tweet.user.avatarURL}
                            key={tweet._id}/>)}
                    </div>
                </div>
                <div className={s.interestsMenu}>
                    <InterestsMenu items={tags}/>
                </div>
            </div>

        </>
    );
}

export default HomePage;

