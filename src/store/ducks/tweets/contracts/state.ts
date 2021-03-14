export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
}

export interface Tweet{
    _id: string;
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarURL: string;
    };
}

export interface TweetsState {
    items: Tweet[];
    loadingState: LoadingState;
}
