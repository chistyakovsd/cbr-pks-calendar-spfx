export const SET_USERNAME = 'SET_USERNAME';
export const SET_USERID = 'SET_USERID';
export const SET_ROOMS = 'SET_ROOMS';
export const ADD_ROOM = 'ADD_ROOM';
export const JOIN_ROOM = 'JOIN_ROOM';
export const EXIT_ROOM = 'EXIT_ROOM';
export const SET_CON_STATUS = 'SET_CON_STATUS';

// new types start here:
export const SET_EDIT_MODE = 'SET_EDIT_MODE';

export const CHANGE_DATE = 'CHANGE_DATE';
export const CHANGE_DATE_SUCCESS = 'CHANGE_DATE_SUCCESS';
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_FILTER_EVENT = 'CHANGE_FILTER_EVENT';
export const CHANGE_FILTER_EVENT_SUCCESS = 'CHANGE_FILTER_EVENT_SUCCESS';
export const INFINITY_LOAD_EVENT_SUCCESS = 'INFINITY_LOAD_EVENT_SUCCESS';

export const EDIT_EVENT = 'EDIT_EVENT';
export const CLOSE_EDIT_EVENT = 'CLOSE_EDIT_EVENT';
export const RUN_EDIT_EVENT = 'RUN_EDIT_EVENT';
export const SAVE_EDIT_EVENT = 'SAVE_EDIT_EVENT';
export const SAVE_EDIT_EVENT_SUCCESS = 'SAVE_EDIT_EVENT_SUCCESS';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const HOST = window.location.origin;
export const WS_HOST = window.location.origin.replace(/^http/, 'ws');