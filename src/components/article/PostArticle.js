import React,{Component} from 'react'
import {connect} from 'react-redux'
import { addpost, getpost, clearposts,updatepost} from '../../actions'
import {url} from '../../Fetch' 


export class PostArticle extends Component {
    componentDidMount(){
        this.updatePosts()
    }
    // constructor(props) {
    //     super(props)
    //     this.updatePosts = this.updatePosts.bind(this)
    // }
    state={myself_post:"", title: "", content: "",errMsg: "",tmpImage: "/paste.png",}
    
    clear=()=>{
        const{words}=this
        words.value=""
    }

    updatePosts=()=> {
        this.props.clearposts();
        // get own posts
        fetch(url("/articles"), {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        }).then(res => {
            if (res.status === 200) return res.json();
            else return res.text();
        }).then(res => {
            if (res.posts) {
                this.props.updatepost(res.posts);
            }
            console.log(res);
        })
    }


    clearPost=(evt)=> {
        this.setState({content: "", tmpImage: "/paste.png"})
    }




    Post=()=>{
          // TODO: image
          console.log(this.state.content)
          if (this.state.content !== "") {
            // Do image first 
            let curImg = this.state.tmpImage === "/paste.png" ? "" : this.state.tmpImage;
            fetch(url("/article"), {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    account: this.props.userInfo.username,
                    title: "title", //this.state.title,
                    content: this.state.content,
                    image: curImg
                })
            }).then(res => {
                if (res.status === 200) {
                    this.updatePosts();
                    this.clearPost();
                } else {
                    this.setState({errMsg: "bad request"})        
                }
            })
        } else {
            this.setState({errMsg: "PLease input some your content"})
        }
       
        
    }

    update=(evt)=>{
       this.setState({content:evt.target.value})
    }

    

    render() {
        return (
            <div>
                <textarea onChange={this.update} value={this.state.content}  ref={(c)=>this.words=c} className="post" cols="50" rows='9' placeholder="Enter your new post here!"></textarea><br/>
                <input className='btn' type='file' id="uploadimg"/><br/><br/>
            <button onClick={this.Post} type='button' className='btn'>Push</button>
            <button onClick={this.clear} type='button' className='btn'>Clear</button>
         <br></br> <br></br>
            </div>
        )
    }
}




export default connect( 
    (state) => {
        return {
            user : state.user,
            posts:state.posts,
            userInfo:state.userInfo
        }
    }, 
    (dispatch) => {
        return {
            addpost:(post)=>dispatch(addpost(post)),
            getpost:(posts)=>dispatch(getpost(posts)),
            clearposts:()=>dispatch(clearposts()),
            updatepost:(post)=>dispatch(updatepost(post))
        }
    }
)(PostArticle)