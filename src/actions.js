export const CHANGE_PAGE="CHANGE_PAGE"
export const CHANGE_TO_PORFILE="CHANGE_TO_PROFILE"
export const CHANGE_TO_MAIN="CHANGE_TO_MAIN"
export const GET_USERS="GET_USERS"
export const UPDATE_USERS="UPDATE_USERS"
export const NEW_USER="NEW_USER"
//followers
export const UPDATE_FOLLOWERS="UPDATE_FOLLOWERS"
export const ADD_FOLLOWERS="ADD_FOLLOWERS"
export const DELETE_FOLLOWERS="DELETE_FOLLOWERS"
///post
export const UPDATE_POST="UPDATE_POST"
export const GET_POST="GET_POST"
export const ADD_POST="ADD_POST"
export const CLEARPOSTS="CLEAR_POSTS"
//headline
export const CHANEG_HEADLLINE="CHNAGE_HEADLINE"
//clear 
export const CLEAR_FOLLOWERS='CLEAR FOLLOWERS'
//



export function changepage(){
    return{type: CHANGE_PAGE}
}
export function changetoprofile(){
    return{type: CHANGE_TO_PORFILE}
}
export function changetomain(){
    return{type: CHANGE_TO_MAIN}
}
export function getUsers(users){
    return{type:GET_USERS,users}
}
export function updateusers(user){
    return{type:UPDATE_USERS,user}
}
export function newuser(user){
    return{type:NEW_USER,user}
}
//followers
export function updatefollowers(users){
    return{type:UPDATE_FOLLOWERS,users}
}

export function deletefollowers(accountname){
    return{type:DELETE_FOLLOWERS,accountname}
}

export function addfollowers(user){
    return{type:ADD_FOLLOWERS,user}
}
export function delPostFollowers(){
    return {type:CLEAR_FOLLOWERS}
}

//POST
export function updatepost(post){
     return {type:UPDATE_POST,post}
}
export function addpost(post){
    return{ type:ADD_POST,post}
}
export function getpost(posts){
    return {type:GET_POST,posts}
}
export function clearposts(){
    return {type:CLEARPOSTS}
}

   
export function changeheadline(headline){
 return {type:CHANEG_HEADLLINE,headline}
}
