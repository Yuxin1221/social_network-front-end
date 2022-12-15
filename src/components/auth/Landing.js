import {connect} from 'react-redux'
import Login from './Login'
import Registerform from './Registerform'
import {Fetch} from '../../Fetch'
import React, { Component } from 'react'
import { getUsers, updateusers,changepage,getpost } from '../../actions'

export  class Landing extends Component {
    componentDidMount(){
        Fetch(this);
        let login = JSON.parse(window.localStorage.getItem('login'))
        let user = JSON.parse(window.localStorage.getItem('currentUser'))
        if (login && user) {
            this.props.updateusers(user)
            this.props.changepage()
            
          /*   this.props.updateUserInfo(user); */
          /*   this.props.changeLoginStatus(); */
        }
    } 


    render() {
        return (
        <div className="bigBox">
        <h1>Welcome to the landing page!</h1>
        <div className ="bigbox">
             <div className="box">
                    <Login/><br/><br/><br/>
              </div>

              <div className="box">
                    <Registerform/>
              
              </div>
       </div>
 
    </div>
        )
    }
}


export default connect(

    state=>{
        return{
            isLogin: state.isLogin,
            isprofile:state.isprofile,
            posts:state.posts
        }
    },
    dispatch =>{
        return{
            getUsers: (users) => dispatch(getUsers(users)),
            updateusers:(user)=>dispatch(updateusers(user)) ,
            getpost:(posts)=>dispatch(getpost(posts)),
            changepage: ()=> dispatch(changepage())
        /*  changetoprofile:()=>dispatch(changetoprofile()),
       ,
         changetomain:()=>dispatch(changetomain()) */
        }
      
    }


    )(Landing)






