import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getpost, updatepost } from '../../actions'
import { url} from '../../Fetch'

const articlesInfo = require('../../data/articles.json')
const articles = articlesInfo.articles
//the basic sturcture for each piece of article

class Comment extends Component {
 state = {input: this.props.data.text,btnVal: "edit"}
     
    editComment=()=> {
        if (this.state.btnVal === "edit") {
            this.setState({btnVal: "done"});
        }
        else {
            fetch(url("/articles/" + this.props.pid), {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    old: {
                        account: this.props.data.account,
                        text: this.props.data.text,
                        time: this.props.data.time,
                    },
                    text: this.state.input,
                    updateComment: true
                })
            })
            this.setState({btnVal: "edit"})
        }
    }

    handleChange(evt) {
        this.setState({input: evt.target.value});
    }

    render() {
        console.log(this.props.data);
        let btn = <></>
        
        if (this.props.user === this.props.data.account)
            btn = <button onClick={this.editComment}>{this.state.btnVal}</button>
        let span = (<p style={{border: '1px solid black', margin: '10px', borderRadius: '5px', width: '80%'}}>
            <span> </span>{this.state.input}</p>)
        if (this.state.btnVal !== "edit") {
            span = (<p style={{border: '1px solid black', margin: '10px', borderRadius: '5px', width: "80%"}}>Edit:<input style={{border: '1px solid black', borderRadius: '5px', width: "inherit"}} onChange={this.handleChange} value={this.state.input}></input></p>);
        }
        return (<div style={{display: "flex", flexDirection: "row"}}>{span}{btn}</div>)
    }
}




class Articlesbody extends Component {
    state={Keywords:""}

    handleComment=(evt, id)=> {
        let obj = {}
        obj[id + "-comment"] = evt.target.value;
        this.setState(obj);
    }
    
    handleCommentSubmit=(id)=>{
        let comment = this.state[id + "-comment"];
        if (comment !== undefined) {
            fetch(url("/articles/" + id), {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    commentId: Date.now(),
                    text: comment,
                    from: this.props.userInfo.accountname
                })
            }).then(res => {
                if (res.status === 200) return res.json();
                else return res.text();
            }).then(res => {
                if (res.result && res.result === "success") {
                    this.props.updatepost(res.posts);
                    let obj = {};
                    obj[id + "-comment"] = "";
                    this.setState(obj);
                }
            })
        }
    }
    handleEditChange=(evt, id)=> {
        let obj = {}
        obj[id + "-edit"] = evt.target.value;
        this.setState(obj);
    }


      filterkeywords(keywords,author, content){
         
        if (author.includes(keywords)){
            return true
        }
        if (content.includes(keywords)){
            return true
        }
        else{
            return false
        } 

      } 
      handleEditSubmit=(id) =>{
        if (this.state[id + "-edit"] !== undefined) {
            fetch(url("/articles/" + id), {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({text: this.state[id + "-edit"]})
            }).then(res => {
                if (res.status === 200) return res.json();
                else return res.text();
            }).then(res => {
                if (res.result && res.result === "success") {
                    this.props.updatepost(res.posts);
                    let obj = {}; obj[id + "-edit"] = undefined;
                    this.setState(obj);
                }
            })
        }
    }
   
     dosearch=(evt)=>{
         this.setState({Keywords:evt.target.value})
     }

    render() {
        return(
            <div>
                <div>
                    <input id="search"  onChange={this.dosearch}    ref={(c)=>this.feed=c} className="feed" type="text" placeholder="search key words" onChange={this.dosearch}/>
                </div>
                <div id="searchPost">
                    <table>
                     {this.props.Presentpost.map(ele => {
                     let comments = []
                     for (let comment of ele.comment) {
                        comments.push(<Comment pid={ele._id} key={comment.account + "-" + comment.text + "-" + comment.time} user={this.props.userInfo.accountname} data={comment}/>)
                    }
                    if(!this.filterkeywords(this.state.Keywords,ele.author,ele.content))
                        return null 
                    return (<div className="post" key={ele.author+'-'+ele.created}>
                    <img  alt="" src={ele.image}/>
                    <div >
                        <p>{ele.title}<b>(Username: {ele.author})</b> {ele.time}</p>
                        <p>{ele.content}</p>
                        <div style={{border: '1px solid black', borderRadius: '10px'}}>
                        {comments}
                        <input value={this.state[ele._id+"-comment"]} onChange={(evt) => this.handleComment(evt, ele._id)} className={'PostComment'} placeholder="leave your comment here"></input>
                        <button onClick={() => this.handleCommentSubmit(ele._id)} variant='outlined' className="btn" >Comment</button>{" "}
                        {this.state[ele._id+"-edit"] === undefined ? null : <div>
                            <input value={this.state[ele._id+"-edit"]} 
                                onChange={(evt) => this.handleEditChange(evt, ele._id)}></input>
                            <button className="btn"  onClick={()=>this.handleEditSubmit(ele._id)}>Done</button>
                            <button className="btn"  onClick={()=>{
                                let obj = {}; obj[ele._id+"-edit"] = undefined;
                                this.setState(obj)} }>Cancel</button></div>}

                        <button onClick={()=>{
                                let obj = {}; 
                                obj[ele._id+"-edit"] = ele.content;
                                this.setState(obj);
                            }} variant='outlined' className='btn'>Edit Article</button>
                        </div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqUQzzHh5Wgja4XaUTpJ4ZbncfrQaxizP7A&usqp=CAU'></img>
                    </div>
                </div>)
                    
                
            })}
                    </table>
                </div>
            </div>
        )
    }
}




export default connect(
    (state) => {
        return {
            posts:state.posts,
            users:state.users,
            userInfo:state.userInfo,
            Presentpost:state.Presentpost,
            followers:state.followers 
        }
    },  
    dispatch =>{
        return{
            getpost:posts=>dispatch(getpost(posts)),
            updatepost:post =>dispatch(updatepost(post))
        }
    }
)(Articlesbody)