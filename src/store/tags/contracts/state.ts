export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
}

export interface Tag{
    _id: string;
    name: string;
    count: number;
}

export interface TagsState {
    items: Tag[];
    loadingState: LoadingState;
}
