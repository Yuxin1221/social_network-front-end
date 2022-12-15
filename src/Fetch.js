export function Fetch(this_object){
    var scope=this_object
    const exist=localStorage.getItem("users")
    const posts = localStorage.getItem("posts")

    if(!exist){
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(
            res=>{
                let users = []
                for(let i=0; i<res.length;i++){
                    let obj={
                        accountname:res[i].username,
                        password:res[i].address.street,
                        email:res[i].email,
                        phone:res[i].phone,
                        name:res[i].name,
                        birthdate:'2002-12-21',
                        headline: res[i].company.catchPhrase,
                        zipcode: res[i].address.zipcode,
                        followed:[
                            res[(i+1) % res.length].username,
                            res[(i+2) % res.length].username,
                            res[(i+3) % res.length].username,
                        ]
                    }
                    //push the these object (json) into array
                    users.push(obj)
                }
                //object ->string
                localStorage.setItem("users",JSON.stringify(users))
                scope.props.getUsers(users)
            }
        )
    } 
    else{
     scope.props.getUsers(JSON.parse(exist))
    }




    if (!posts) {
      
            fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
            .then(res => {
                scope.props.getpost(res.map(ele => ele.body));
                localStorage.setItem('posts', JSON.stringify(res.map(ele => ele.body)))
            });
    } else {
        scope.props.getpost(JSON.parse(posts))
    }
}

export function url(endpoint){ 
    return `https://yk60-final.herokuapp.com${endpoint}`
};