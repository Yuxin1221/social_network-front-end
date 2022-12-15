import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changepage, newuser,updateusers} from '../../actions'
import {url} from '../../Fetch'
export class Registerform extends Component {

   state={errInfo:"",ERROR:"",ACCOUNT:"",EMIAL:"",PHONE:"",BRITH:"",ZIPCODE:"",PASSWORD:"",CP:""}
//decide whether going to the main page if all above condition is satisfied
    isAdult=(birthday)=>{
    let [birYear, birMonth, birDate] = birthday.split("-");
    let today = new Date();
    let [Y,M,D] = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
    if(Y - birYear < 18){
        return false;
    }else if(Y - birYear === 18){
        if(M - birMonth < 0){
            return false;
        }else if(M - birMonth === 0){
            if(D - birDate < 0){
                return false;
            }
        }
    }
    return true;
}


    CheckisValidaty=()=>{
        const{Name,Email,Phone,Password,Zipcode,Birth,Cp,isAdult}=this
       
          var mark=true;
          var notice=""
          if(Name.validity.patternMismatch)
           {       
            notice+="Please input a name using letter or numbers with letter start only, ";mark=false  
            
           }
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
           if(Name.value===""||Name===null||Email.value===""||Phone.value===""||Birth===""||Zipcode===""||Password===""||Cp===""||Email.value===null||Phone.value===null||Birth===null||Zipcode===null||Password===null||Cp===null)
           {
               notice+="please make sure all is filled, "
                mark=false  
           }
           if(!isAdult(this.state.BRITH))
            {
               this.setState({ERROR:"You cannot register under 18 years old"})
               mark=false
            }
   
        
            let obj = {
                account: this.state.ACCOUNT,
                username:this.state.ACCOUNT,
                email: this.state.EMIAL,
                phone: this.state.PHONE,
                birthdate: this.state.BRITH,
                zipcode: this.state.ZIPCODE,
                headline: "I'm " + this.state.ACCOUNT,
                avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqz9MnPJ35eUCWZeGAQc3UcQQ982UywRBKA&usqp=CAU',
                password: this.state.PASSWORD,
                
            }

           if(mark)
           {  
            fetch(url('/register'), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            }).then (res => {
                if (res.status === 200)
                    return res.json();
                else
                    return res.text();
            }).then (res => {
                if (res.result && res.result === "success") {
                    fetch(url('/login'), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        credentials: 'include',
                        body: JSON.stringify({
                            'account': obj.account,
                            'password': obj.password
                        })
                    }).then (res => {
                        if (res.status === 200)
                            return res.json();
                        else
                            return res.text();
                    }).then (res => {
                        console.log(res);
                        if (res.result && res.result === "success") {
                            this.props.updateusers({
                                accountname: obj.account,
                                username:obj.username,
                                email: obj.email,
                                phone: obj.phone,
                                birthdate: obj.birthdate,
                                zipcode: obj.zipcode,
                                password: obj.password,
                                headline: obj.headline,
                                avatar: obj.avatar,
                                followed: []
                              })
                            this.props.changepage();
                        }
                    })
                } 
            }).catch(err=>{
                console.log(err)
            })
             
            this.setState({errInfo:"You register successfully!"})      
            
           }
           else{
               this.setState({errInfo:notice})    
           }
         
       }

       checkifChange=(evt,ele)=>{
           if(ele==="acc"){
               this.setState({ACCOUNT:evt.target.value})
           }
           if(ele==="ema"){
            this.setState({EMIAL:evt.target.value})
            }
            if(ele==="pho"){
                this.setState({PHONE:evt.target.value})
            }
            if(ele==="bir"){
                this.setState({BRITH:evt.target.value})
            }
            if(ele==="zip"){
                this.setState({ZIPCODE:evt.target.value})
            }
            if(ele==="pas"){
                this.setState({PASSWORD:evt.target.value})
            }
            if(ele==="cp"){
                this.setState({CP:evt.target.value})
            }


       }
    render() {
        return (
            <div className="box">      
            <h2>Create a new account</h2>
           <form>
   
           <label className="instruction">Username:</label><br/>
               <div className="userinput">
                   <input value={this.state.ACCOUNT} id="Myname" onChange={(evt)=>this.checkifChange(evt,"acc")} ref={(c)=>this.Name = c } className="userinput" name="username" type="text" placeholder="Username" pattern="[A-Za-z]+[A-Za-z0-9]*"/>
   
               </div>
                               
           <label className="instruction">Email adress:</label><br/>
              <div className="userinput">
                   <input id="Myemail" value={this.state.EMIAL} onChange={(evt)=>this.checkifChange(evt,"ema")}   ref={(c)=>this.Email= c } className="userinput" name="email" type="email" placeholder="a@b.com" pattern="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"/>
             
               </div>
       
   
               <label className="instruction">Phone number:</label><br/>
              <div className="userinput">
                   <input id="Myphone" value={this.state.PHONE} onChange={(evt)=>this.checkifChange(evt,"pho")}  ref={(c)=>this.Phone= c } className="userinput" name="phone" type="tel" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
         
               </div>
   
               <label className="instruction">Date Of Birth:</label><br/>
              <div className="userinput">
                   <input id="Mybirth" value={this.state.BRITH} onChange={(evt)=>this.checkifChange(evt,"bir")}   ref={(c)=>this.Birth= c } className="userinput" name="birth" type="date" placeholder="01/02/20" pattern="\d\d\d"/>
     
               </div>
   
               <label className="instruction">Zipcode:</label><br/>
              <div className="userinput">
                   <input id="Myzipcode" value={this.state.ZIPCODE} onChange={(evt)=>this.checkifChange(evt,"zip")}   ref={(c)=>this.Zipcode= c } className="userinput" name="zipcode" type="text" placeholder="00000" pattern="[0-9]{5}"/>
   
               </div>
   
               <label className="instruction">Password:</label><br/>
              <div className="userinput">
                   <input id="Mypassword" value={this.state.PASSWORD} onChange={(evt)=>this.checkifChange(evt,"pas")}   ref={(c)=>this.Password= c } className="userinput" name="password" type="password" placeholder="****" />
               </div>
   
   
               <label className="instruction">Confirmation Password:</label><br/>
              <div className="userinput">
                   <input id="Mycp" value={this.state.Cp}  onChange={(evt)=>this.checkifChange(evt,"cp")}  ref={(c)=>this.Cp= c } className="userinput" name="confirmation_password" type="password" placeholder="****" />
   
               </div>
   
   
            <div className="Button">
            <input id="check" className="btn" type="button" value="Register" onClick={this.CheckisValidaty} />
            <input className="btn" type="reset" value="Clear" />
            <div id="ErrorInfo" className="error">{this.state.errInfo}</div>
            <div id="ERROR" className="error">{this.state.ERROR}</div>

             </div>
             <div ref={(c)=>this.Allfill= c} className="ErrorMessage" style={{display:"none"}}>Please make sure all information is filled</div><br/>
            
   
                
       
           </form>
       </div>
        )
    }
}



export default connect(

    state =>{
        return {
    
            users:state.users
    
        }},
        (dispatch) =>{
            return {
                changepage: () => dispatch(changepage()),
                addRegister:(user)=>dispatch({type:"allow_register",user})  ,  
                errNotice:(errRegInfo)=>dispatch({type:"Register_error",errRegInfo}),
                newuser: (user) => dispatch(newuser(user)),
                updateusers:(user)=>dispatch(updateusers(user))

            }
        }
    
    
        )(Registerform)