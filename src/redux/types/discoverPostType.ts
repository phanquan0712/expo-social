import { IPost } from "../../utils/Typescript";
export const GET_POSTS_DISCOVER_LOADING = "GET_POSTS_DISCOVER_LOADING"
export const GET_POSTS_DISCOVER = 'GET_POSTS_DISCOVER';
export const UPDATE_POSTS_DISCOVER = 'UPDATE_POSTS_DISCOVER';
export const UPDATE_ONE_POST_DISCOVER = 'UPDATE_ONE_POST_DISCOVER';


export interface IStateType {
   loading: boolean
   posts: IPost[]
   total: number
   page: number
   firstLoad: boolean
}

export interface IGetPostsDiscoverLoadingType {
   type: typeof GET_POSTS_DISCOVER_LOADING
   payload:  boolean
}

export interface IGetPostsDiscoverType {
   type: typeof GET_POSTS_DISCOVER
   payload: IStateType
}

export interface IUpdatePostsDiscoverType {
   type: typeof UPDATE_POSTS_DISCOVER
   payload: IStateType
}


export type IPostDiscoverType = IGetPostsDiscoverType | IGetPostsDiscoverLoadingType | IUpdatePostsDiscoverType