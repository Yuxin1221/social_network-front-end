import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './NavPro'
import Avator from './Avator'
import { changepage,changetomain,updateusers,getUsers, getpost} from '../../actions'
import {url} from '../../Fetch'



export  class profile extends Component {

    
    state={errInfo:"",newNameVal:"",newEmailVal:"",newPhoneVal:"",newZipcodeVal:"",newBirthVal:"",newPasswordVal:"",
    newPassword:"*".repeat(this.props.userInfo.password),
    updatedName:this.props.userInfo.username,updatedEmail:this.props.userInfo.email,updatedPhone:this.props.userInfo.phone,updatedZipcode:this.props.userInfo.zipcode,updateBirth:this.props.userInfo.birthdate,
    updatedPassword:"*".repeat(this.props.userInfo.password),
    BIRTH:"1999-12-21",
    PASSWORD:"*"
}

    handleChangeUserName=(evt)=>{
        this.setState({newNameVal:evt.target.value})
    }
    handleChangeEmail=(evt)=>{
        this.setState({newEmailVal:evt.target.value})
    }
    handleChangePhone=(evt)=>{
        this.setState({newPhoneVal:evt.target.value})
    }
    handleChangeBirth=(evt)=>{
        this.setState({newBirthVal:evt.target.value})
    }
    handleChangeZipcode=(evt)=>{
        this.setState({newZipcodeVal:evt.target.value})
    }
    handleChangePassword=(evt)=>{
        this.setState({newPasswordVal:evt.target.value})
    }
  

    CheckisValidaty=()=>{

       
        // this.setState({
        //     updatedName:"",updatedEmail:"",updatedPhone:"",updatedZipcode:"",updatedPassword:""
        // })


        const{Name,Email,Phone,Password,Zipcode,Birth,Cp}=this
       
        var mark=true;
        var notice=""
/*         if(Name.validity.patternMismatch)
         {       
          notice+="Please input a name using letter or numbers with letter start only, ";mark=false  
          
         } */
         if(Email.validity.patternMismatch)
         {
            notice+="please input a email such as a@b.com, "; mark=false  
         }
     
         if(Phone.validity.patternMismatch)
         {
             notice+="please input phone number such as 111-111-1111, "; mark=false  
         }
      
         if(Zipcode.validity.patternMismatch)
         {
             notice+="please input a zipcode contains five digits, ";mark=false  
         }
     
         if(this.state.PASSWORD!==this.state.CP)
         {
          this.setState({ERROR:"Password must be matched"})
             mark=false  
         }
        
         if (mark) {
            let obj = {}
           /*  if (this.state.newNameVal !== "") {
              this.setState({updatedName:this.state.newNameVal})
              fetch(url("/username"), {
                method: "PUT",
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username: this.state.newNameVal})
              })
              obj['username'] = this.state.newNameVal;
            } */
            if (this.state.newEmailVal !== "") {
              this.setState({updatedEmail: this.state.newEmailVal})
              obj['email'] = this.state.newEmailVal;
              fetch(url("/email"), {
                method: "PUT",
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email: this.state.newEmailVal})
              })
            }
            if (this.state.newPhoneVal !== "") {
              this.setState({updatedPhone: this.state.newPhoneVal})
              fetch(url("/phone"), {
                method: "PUT",
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({phone: this.state.newPhoneVal})
              })
              obj['phone'] = this.state.newPhoneVal;
            }
            if (this.state.newZipcodeVal !== "") {
              this.setState({updatedZipcode:this.state.newZipcodeVal})
              fetch(url("/zipcode"), {
                method: "PUT",
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({zipcode: this.state.newZipcodeVal})
              })
              obj['zipcode'] = this.state.newZipcodeVal;
            }
/*             if (this.state.newPasswordVal!== "") {
              let oldpswd = '*'.repeat(this.props.userInfo['password'].length);
              let newpswd = '*'.repeat(this.state.newPasswordVal.length);
              fetch(url("/password"), {
                method: "PUT",
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({password: this.state.newPasswordVal})
              })
              this.setState({updatedPassword: newpswd})
              obj['password'] = this.state.newPasswordVal;
            } */
            this.props.updateusers(obj);
          }
          else{
              this.setState({errInfo:notice})
          }

        
         
        

    }

    render() {
        return (
            <div className="bigBox">
              <Nav/>
           <h1>Welcome to Profile page</h1>
           <Avator/>
        <div>
           
        </div>
        
<div>

</div>

<form>

 <label className="instruction">Username:</label>
   <br></br>
        <span id="testname">{this.state.updatedName}</span>  <br></br>
  
     
  
 
<label className="instruction">Email adress:</label><br/>
   <div className="userinput">
        <input ref={(c)=>this.Email = c }  value={this.state.newEmailVal} onChange={this.handleChangeEmail}  className="userinput" name="email" type="email" placeholder="a@b.com" pattern="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$" required/>
        <span id="testemail">{this.state.updatedEmail}</span>  
    

    </div>


    <label className="instruction">Phone number:</label><br/>
   <div className="userinput">
        <input ref={(c)=>this.Phone = c }  value={this.state.newPhoneVal} onChange={this.handleChangePhone}  className="userinput" name="phone" type="tel" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
        <span id="testphone">{this.state.updatedPhone}</span>  
    
    </div>

    <label className="instruction">Date Of Birth:</label><br/>
   <div className="userinput">
        <input ref={(c)=>this.Birth = c }  value={this.state.newBirthVal} onChange={this.handleChangeBirth}  className="userinput" name="birth" type="date" placeholder="01/02/20" pattern="\d\d\d" required/>
        <span id="testphone">{this.state.updateBirth}</span> 

        <span >{this.state.BIRTH}</span>
    </div>

    <label className="instruction">Zipcode:</label><br/>
   <div className="userinput">
        <input ref={(c)=>this.Zipcode = c }  value={this.state.newZipcodeVal} onChange={this.handleChangeZipcode} className="userinput" name="zipcode" type="text" placeholder="00000" pattern="[0-9]{5}" required/>

        <span id="testzipcode">{this.state.updatedZipcode}</span> 
    </div>

    <label className="instruction">Password:</label><br/>
   <div className="userinput">
        <input ref={(c)=>this.Password = c }  value={this.state.newPasswordVal} onChange={this.handleChangePassword}   className="userinput" name="password" type="password" placeholder="****" required />
        <span >{this.state.updatedPassword}</span> 
        <span>{this.state.PASSWORD}</span>
    </div>


    <label className="instruction">Confirmation Password:</label><br/>
   <div className="userinput">
        <input ref={(c)=>this.Cp= c } className="userinput" name="confirmation_password" type="password" placeholder="****" required/>
        <span >{this.state.updatedPassword}</span> 
        <span>{this.state.PASSWORD}</span>
      
    </div>


 <div className="Button">
 <input className="btn" type="button" value="Submit" onClick={ this.CheckisValidaty} />
 <input className="btn" type="reset" value="Clear" />
 <div className="error">{this.state.errInfo}</div>
  </div>
 
   

</form>
                    
 </div>
        )
    }
}


export default connect(

    state =>{
        return {
            user:state.user,
            errUpdate:state.errUpdate,
            isLogin: state.isLogin,
            isprofile:state.isprofile,
            userInfo:state.userInfo,
            users:state.users,
            posts:state.posts
    
        }},
        (dispatch) =>{
            return {
                changepage: () => dispatch(changepage()),
                addRegister:(user)=>dispatch({type:"allow_register",user})  ,  
              updateusers:(user)=>dispatch(updateusers(user)),
              getUsers: (users) => dispatch(getUsers(users)),
              getpost:(posts)=>dispatch(getpost(posts))
            }
        }
    
    
        )(profile)