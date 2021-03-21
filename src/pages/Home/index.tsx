import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {fetchTags} from "../../store/tags/actionCreators";
import s from './style.module.css'
import {UserNews} from "../../components/UsersPosts";
import { Route } from 'react-router-dom'



interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = (): React.ReactElement => {
    const dispatch = useDispatch()
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading)

    React.useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch])

    return (
        <>
            <Route path="/home" exact>
                <div className={s.news}>
                    {isLoading ? <div className={s.centered}><CircularProgress /></div> : tweets.map(tweet => <UserNews
                        text={tweet.text}
                        userFullname={tweet.user.fullname}
                        userUsername={tweet.user.username}
                        userAvatar={tweet.user.avatarURL}
                        key={tweet._id}/>)}
                </div>
            </Route>
        </>
    );
}

export default HomePage;

