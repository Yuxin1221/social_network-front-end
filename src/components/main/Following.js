import React, { Component } from 'react'
import {connect} from 'react-redux'
import { updatefollowers,deletefollowers,addfollowers,addpost, delPostFollowers, updatepost } from '../../actions'
import {url} from '../../Fetch'

export class Following extends Component {
    componentDidMount() {
        this.getAllFollowers()
    }
       state={notfound:"",pushUser:""}

    getAllFollowers=() =>{
        fetch(url("/following"), {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => {
            if (res.status === 200)
                return res.json();
            else
                return res.text();
        })
        .then(res => {
            if (res.result && res.result === "success") {
                this.props.delPostFollowers()
                let follow = res.following;
                for (let name of follow) {
                    fetch(url("/headline/" + name), {
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/json' },
                    }).then(res => {
                        if (res.status === 200) return res.json();
                        else return res.text();
                    }).then(res => {
                        if (res.result && res.result === 'success') {
                            this.props.addfollowers({
                                accountname: name,
                                username: res.account,
                                headline: res.headline,
                            }) 
                        }
                    })
                }
                fetch(url("/articles" ), {
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                }).then(res => {
                    if (res.status === 200) return res.json();
                    else return res.text();
                }).then(res => {
                    if (res.result && res.result === "success") {
                        this.props.updatepost(res.posts);
                    }
                })
            } 
        }).catch(err => {})
        
    }



     unfollow=(evt)=>{
        
        fetch(url("/following/" + evt.target.id), {
            credentials: 'include',
            method: "DELETE",
            headers: {'Content-Type': 'application/json' },
        })
        .then(res => {
            if (res.status === 200) {
                this.props.deletefollowers(evt.target.id);
                setImmediate(this.getAllFollowers(), 1000);
            }
        })
     }

     Add=()=>{
        if (this.state.pushUser !== "") {
            let user = this.props.followers.filter( ele => ele.accountname === this.state.pushUser)
            if (user.length > 0) {
                this.setState({notfound: "You have followed this user"});
            } else if (this.props.userInfo.accountname === this.state.pushUser) {
                this.setState({notfound: "Don't folllow yourself"});
            } else {
                fetch(url("/following/" + this.state.pushUser), {
                    credentials: 'include',
                    method: "PUT",
                    headers: {'Content-Type': 'application/json' },
                })
                .then(res => {
                    if (res.status === 200) return res.json();
                    else {
                        this.setState({notfound: "Not Found"});
                        return null;
                    }
                })
                .then(res => {
                    if (res) {
                        this.getAllFollowers();
                        this.setState({pushUser: ""})
                    }
                })
            }
        }
        else
            this.setState({notfound: "Please input a username"})
     }

     Change=(evt)=>{
        this.setState({pushUser: evt.target.value})
     }
    render() {
        return (
         <div>
             <div></div>
             <h4 style={{margin: '0', padding: '0'}}>Followers</h4>
            {this.props.followers.map((ele,subscript) => {
                let id = Math.floor(Math.random() * 100);
                let src = `https://picsum.photos/id/${id}/200/300`
                return (
                    <div key={subscript} >
    
                     <img alt="" src={src} style={{margin: '10px', height: '150px', width: '150px'}}></img><br/>
                     
                        <div>
                        <h5 style={{margin: '0', padding: '0'}}> Accountname:{ele.accountname}</h5>
                        <p style={{margin: '0', padding: '0'}}>{ele.headline}</p>
                        <button id="UNFOLLOW"  className="btn" onClick={this.unfollow} id={ele.accountname}>Unfollow</button>
                        </div>

                      
                    </div>
                    )
            })}
              <br></br>
          <div>
                  <div ref={(c)=>this.Birth= c }>{this.state.notfound}</div>
                 <input onChange={this.Change} placeholder="follow using accountname"></input>
                    <button id="ADD" className="btn" onClick={this.Add}>add</button></div>
        </div>
        )
    }
}


export default connect(

    state =>{
        return {
            users: state.users,
            posts: state.posts,
            userInfo: state.userInfo,
            followers:state.followers

    
        }},
        (dispatch) =>{
            return {
              
                updatefollowers: (users) => dispatch(updatefollowers(users)),
                addfollowers: (user) => dispatch(addfollowers(user)),
                deletefollowers: (accountname) => dispatch(deletefollowers(accountname)),
                addpost:(post)=>dispatch(addpost(post)),
                delPostFollowers:()=>dispatch(delPostFollowers()),
                updatepost:(post)=>dispatch(updatepost(post))
                
    

            }
        }
    
    
        )(Following)

        