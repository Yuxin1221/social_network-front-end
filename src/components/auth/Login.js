
import { connect } from 'react-redux'
import {url} from '../../Fetch' 

import React, { Component } from 'react'
import { changepage, changetomain, updateusers } from '../../actions'

export  class Login extends Component {
    state={errMsg:'',Myname:"",Mypassword:""}
    constructor (props) {
        super(props);
        this.changename = this.changename.bind(this);
        this.changepassword = this.changepassword.bind(this);
    }



 CheckisValidaty=(evt)=>{
    /* this.props.changepage();
    this.props.changetomain() */

    if(this.state.Myname===""||this.state.value==="")
    {
       this.setState({errMsg:'Please input both your name and password'})
      
    }
    else{
        evt.preventDefault();
        this.setState({errorMsg:""})
        fetch(url('/login'),{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify({
              'account': this.state.Myname,
              'password': this.state.Mypassword
          })
        }).then(res=>{
            if(res.status===200){
                return res.json();
            }
            else{
                return res.text()
            }
        }).then(res=>{
            if(res.result&&res.result==='success'){
                fetch(url('/profile'),{
                  method: 'GET',
                  credentials: 'include',
                  headers: { 'Content-Type': 'application/json' }
                }).then(res=>{
                  if (res.status === 200) {
                      return res.json();
                      }
                      else {
                      // logout
                      this.props.changepage();
                      return null;
                      }
      
                }).then(res=>{
                  if (res) {
                      console.log(res)
                      this.props.updateusers({
                        //   accountname: res.account,
                          username:res.account,
                          email: res.email,
                          phone: res.phone,
                          birthdate: res.dob,
                          zipcode: res.zipcode,
                          password: res.password,
                          headline: res.headline,
                          avatar: res.avatar,
                          followed: res.following
                      })
                      this.props.changepage();
                  }
      
                }).catch(err=>{
                    console.log(err)
                })
            }
            else{
                this.setState({errMsg:'User do not exist, please input an correct account'})
            }
        })
    }







 
}





    changename(evt){
            this.setState({Myname:evt.target.value})
       }


    changepassword(evt){
        this.setState({Mypassword:evt.target.value})

    }
    render() {

        return (
            <div id="box">  
        {/* login  */}
            <div >
                <h2>Log in </h2>
            </div>
          
           <label className="instruction">Username:</label><br/>
            <div className="userinput">
                <input value={this.state.Myname} id="testUsername" onChange={this.changename} className="userinput" name="username" type="text" placeholder="Username" />
            </div>

            <label ref={(c)=>this.Password= c} className="instruction">Password:</label><br/>
            <div className="userinput">
                <input onChange={this.changepassword} value={this.state.Mypassword} id="testPassword" className="userinput" name="password" type="password" placeholder="****" />
            </div>

            
            <div className="Button" >
                <input id="submitLogin" className="btn" type="button" value="Log In" 
                onClick={this.CheckisValidaty} />
            </div>
            <div className="error">{this.state.errMsg}</div>


 
    </div>
        )
    }
}



export default connect(

    state =>{
        return {
            isLogin: state.isLogin,
            users: state.users,
             posts: state.posts
    
        }},
        (dispatch) =>{
            return {
                changepage: () => dispatch(changepage()),
                updateusers:(user)=>dispatch(updateusers(user))     
            }
        }
    
    
        )(Login)
