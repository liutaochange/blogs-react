const hostname = window.location.hostname
const protocol = window.location.protocol
const BASE_URL = process.env.NODE_ENV === 'production' ?
    `${protocol}//${hostname}/api` :
    `${protocol}//${hostname}:3000/api`
const REGISTER_URL = '/user/register'
const LOGIN_URL = '/user/login'

export {
    BASE_URL,
    GET_ARTICLES_URL,
    GET_ARTICLE_DETAIL_URL,
    GET_TAGS_URL,
    GET_CATEGORIES_URL,
    REGISTER_URL,
    LOGIN_URL,
    CHECK_USERNAME_URL,
    UPDATE_USER_URL,
    COMMENT_ADD_URL,
    COMMENT_DEL_URL,
    GET_COMMENTS_URL,
    REPLY_ADD_URL,
    REPLY_DEL_URL,
    ARTICLE_ADD_URL,
    ARTICLE_UPDATE_URL,
    ARTICLE_DEL_URL,
    GET_USERS_URL,
    USER_DEL_URL,
}
