import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changepage, getUsers, newuser } from '../../actions'
import {Link} from 'react-router-dom'


export  class Navigation extends Component {

   logout=()=>{
         localStorage.removeItem('currentUser');
          localStorage.setItem('login', false);
        this.props.changepage();
   }
   

    render() {
        return (
            <div>
              <Link id="log_out" onClick={this.logout} className="btn" to={'./'}>Log out</Link>
              <Link className="btn" to={'./profile'}>Profile</Link>
            </div>
        )
    }
}




export default connect(
    state=>{
        return{
            isLogin: state.isLogin,
           
        }
    },
    dispatch =>{
        return{
       
         changepage:()=>dispatch(changepage()),
       
        }
      
    }



)(Navigation)