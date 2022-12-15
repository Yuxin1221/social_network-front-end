

import {  CHANGE_PAGE,GET_USERS,UPDATE_USERS,NEW_USER
, ADD_FOLLOWERS,DELETE_FOLLOWERS,UPDATE_FOLLOWERS,
ADD_POST,GET_POST,UPDATE_POST,CHANEG_HEADLLINE,CLEAR_FOLLOWERS, CLEARPOSTS}from './actions'


const initial_state={ 
   isLogin:false,
   users:[],
   followers:[],
   Presentpost:[],
   posts:[],
   userInfo: {accountname: "",username: "",email: "",phone: "",birthdate: "",zipcode: "",password: "",headline: "",avatar:"", followed: []}

}
//user is an object

//change the headline to locastorage
function Changeheadline(state) {
    window.localStorage.setItem('users', JSON.stringify(state.users));
    window.localStorage.setItem('currentUser', JSON.stringify(state.userInfo));
}

const Reducer =(preState=initial_state,action)=>{
	switch (action.type){
		//update our company phras
            
	    case CHANGE_PAGE:
            return {...preState, isLogin:!preState.isLogin}
		case GET_USERS:
			return {...preState, users: action.users}
		case UPDATE_USERS:
			return {...preState, userInfo: Object.assign(preState.userInfo, action.user)}
		case NEW_USER:
			localStorage.setItem("users", JSON.stringify([...preState.users, action.user]));
			return {...preState, users: [...preState.users, action.user]}
		case UPDATE_FOLLOWERS:
			return {...preState, followers: action.users}
		case ADD_FOLLOWERS:
/* 			let user = preState.users.filter(user => user.accountname === action.user.accountname)
            if (user.length > 0)
                return {...preState, followers: [...preState.followers, ...user]}
            else
                return {...preState} */
				let new_follow_user = preState.followers.filter(ele => ele.accountname !== action.user.accountname)
				return {...preState, followers: [...new_follow_user, action.user]}

		case DELETE_FOLLOWERS:
			return {...preState, followers: preState.followers.filter(ele => ele.accountname !== action.accountname),
				Presentpost: preState.Presentpost.filter(ele => ele.accountname !== action.accountname)}
		case CLEAR_FOLLOWERS:
			return {...preState, Presentpost: [], followers: []};
		case GET_POST:
			return {...preState, posts: action.posts}
		case ADD_POST:
			
			return {...preState, Presentpost: [action.post,...preState.Presentpost]}
		case UPDATE_POST:
			return {...preState,Presentpost:action.post}
		case CHANEG_HEADLLINE:
			var newuserInfo = preState.userInfo
            let newusers = preState.users
            newuserInfo.headline = action.headline
            for (let i=0; i<newusers.length; i++) {
                if (newusers[i].accountname === newuserInfo.accountname) {
                    newusers[i] = newuserInfo;
                    break;
                }
            }
            Changeheadline(preState)
			return {...preState, userInfo: newuserInfo, users: newusers}
		case CLEARPOSTS:
			return{
				...preState,Presentpost:[]
			}
		default:
			return preState
		
	}
}

export default (Reducer)