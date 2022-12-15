import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'

export  class NavPro extends Component {
   
    render() {
        return (
            <div>

                <Link className="btn" to={'./main'}>Main</Link>

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
      
        }
      
    }



)(NavPro)