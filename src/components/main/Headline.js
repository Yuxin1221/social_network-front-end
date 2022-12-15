import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeheadline } from '../../actions'
import {url} from '../../Fetch'

export class Headline extends Component {
   
       state={headline:""}
  
       //////click two time change headline???
       changeheadline=()=>{
        fetch(url("/headline"), {
            method: "PUT",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({headline: this.state.headline})
        })
        this.props.changeheadline(this.state.headline);
        this.setState({headline: ""});
         
       }
       handleHeadlineChange=(evt) =>{
        this.setState({headline: evt.target.value});
    }


       render() {
              return (
              <div >  
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqz9MnPJ35eUCWZeGAQc3UcQQ982UywRBKA&usqp=CAU"/>
                   <div>Hi! I am {this.props.userInfo.accountname}</div>
              <div  ref={(c)=>this.headline= c}>{this.props.userInfo.headline}</div>
              <input value={this.state.headline} onChange={this.handleHeadlineChange} className="feed" placeholder="please update your headline here!" ref={(c)=>this.phrase= c} className="headline" type="text"/><br></br>
              <input className="btn" onClick={this.changeheadline}    type="submit" value="Update" />
        </div>
              )
       }
}
export default connect(

       state =>{
           return {
              userInfo:state.userInfo
           }},
           (dispatch) =>{
               return {
                changeheadline:(headline)=>dispatch(changeheadline(headline))
               }
           }
       
       
 )(Headline)