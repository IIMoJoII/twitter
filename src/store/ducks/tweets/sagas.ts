import {call, takeLatest, put} from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionsType} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState, TweetsState} from "./contracts/state";


export function* fetchTweetsRequest(){
    try {
        const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items));
    } catch (error){
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }

}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}
