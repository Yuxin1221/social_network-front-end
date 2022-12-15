import Reducer from './reducers';
import { getUsers,getpost,changepage,updateusers,updatefollowers, newuser,updatepost,addpost,addfollowers,changeheadline,deletefollowers,clearposts
} from './actions';


test('udefined state', () => {
    let newState = Reducer(undefined, {type: "UNKNOWN"})
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname: "",
            username: "",
            email: "",
            phone: "",
            birthdate: "",
            zipcode: "",
            password: "",
            headline: "",
            followed: []
        },
        followers: []
    })
})


 ///get users from json
test('if get users from json', () => {
    let users = [
        {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"2002-12-21",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let newState = Reducer(undefined, getUsers(users))
    expect(newState).toEqual({
        users: [
            {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"2002-12-21",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
            {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        ],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname: "",
            username: "",
            email: "",
            phone: "",
            birthdate: "",
            zipcode: "",
            password: "",
            headline: "",
            followed: []
        },
        followers: []
    })
})

//test if we get post
 
test('check if we get post', () => {
    let posts = [
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    ]
    let newState = Reducer(undefined, getpost(posts))
    expect(newState).toEqual({
        users: [],
        posts: [
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
            "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
            "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
        ],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname: "",
            username: "",
            email: "",
            phone: "",
            birthdate: "",
            zipcode: "",
            password: "",
            headline: "",
            followed: []
        },
        followers: []
    })
})


// test, changepage
test('test login and logout status', () => {
    let newState = Reducer(undefined, changepage())
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: true,
        userInfo: {
            accountname: "",
            username: "",
            email: "",
            phone: "",
            birthdate: "",
            zipcode: "",
            password: "",
            headline: "",
            followed: []
        },
        followers: []
    })
    newState = Reducer(newState, changepage())
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname: "",
            username: "",
            email: "",
            phone: "",
            birthdate: "",
            zipcode: "",
            password: "",
            headline: "",
            followed: []
        },
        followers: []
    })
})


//test, update user to unserinfo 
test('initialize the user info', () => {
    let user = {
        accountname:"Bret", 
        password:"Kulas Light", 
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        username:"Leanne Graham",
        birthdate:"2002-12-21",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateusers(user))
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: false,
        followers: [],
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        }
       
    })
})


test('check user account name', () => {
    let user = {
        accountname:"Bret", 
        password:"Kulas Light", 
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        username:"Leanne Graham",
        birthdate:"2002-12-21",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateusers(user))
    newState = Reducer(newState, updateusers({accountname: 'cbuisd'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname:"cbuisd", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: []
    })
})

test(' check username', () => {
    let user = {
        accountname:"Bret", 
        password:"Kulas Light", 
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        username:"Leanne Graham",
        birthdate:"2002-12-21",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateusers(user))
    newState = Reducer(newState, updateusers({username: 'c'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"c",
            birthdate:"2002-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: []
    })
})


test('check if change password', () => {
    let user = {
        accountname:"Bret", 
        password:"Kulas Light", 
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        username:"Leanne Graham",
        birthdate:"2002-12-21",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateusers(user))
    newState = Reducer(newState, updateusers({password: '11111'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: false,
        followers: [],
        userInfo: {
            accountname:"Bret", 
            password:"11111", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
       
    })
})

///test email
test('check if change user email', () => {
    let user = {
        accountname:"Bret", 
        password:"Kulas Light", 
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        username:"Leanne Graham",
        birthdate:"2002-12-21",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateusers(user))
    newState = Reducer(newState, updateusers({email: 'a@b.com'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: false,
        followers: [],
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"a@b.com",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
      
    })
})


// check phone number
test('check phone number', () => {
    // init user
    let user = {
        accountname:"Bret", 
        password:"Kulas Light", 
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        username:"Leanne Graham",
        birthdate:"2002-12-21",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateusers(user))
    newState = Reducer(newState, updateusers({phone: '111-111-1111'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"111-111-1111",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: []
    })
})


test('check user birthday', () => {
    let user = {
        accountname:"Bret", 
        password:"Kulas Light", 
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        username:"Leanne Graham",
        birthdate:"2002-12-21",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateusers(user))
    newState = Reducer(undefined, updateusers({birthdate: '1998-12-21'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"1998-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: []
    })
})


test('check user headline', () => {

    let user = {
        accountname:"Bret", 
        password:"Kulas Light", 
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        username:"Leanne Graham",
        birthdate:"2002-12-21",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateusers(user))
    newState = Reducer(undefined, updateusers({headline: "Hi"}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"Hi",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: []
    })
})

test('check zipcode', () => {
    let user = {
        accountname:"Bret", 
        password:"Kulas Light", 
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        username:"Leanne Graham",
        birthdate:"2002-12-21",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateusers(user))
    newState = Reducer(newState, updateusers({zipcode: '11111'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"11111",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: []
    })
})

//add the current register user to users
test('check addNew usser', () => {

    let user = {
        accountname:"Bret", 
        password:"Kulas Light", 
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        username:"Leanne Graham",
        birthdate:"2002-12-21",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let users = [
        {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"2002-12-21",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let newState = Reducer(undefined, getUsers(users))
    newState = Reducer(newState, newuser(user))
    expect(newState).toEqual({
        users: [
            {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"2002-12-21",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
            {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
            {accountname:"Bret",password:"Kulas Light",email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",username:"Leanne Graham",birthdate:"2002-12-21",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]}
        ],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"11111",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: []
    }) 
})


test('check update followed user', () => {
    let user = [{
        accountname:"Bret", 
        password:"Kulas Light", 
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        username:"Leanne Graham",
        birthdate:"1999-12-21",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }]
    let users = [
        {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"2002-12-21",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let newState = Reducer(undefined, getUsers(users))
    newState = Reducer(newState, updatefollowers(user))
    expect(newState).toEqual({
        users: [
            {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"2002-12-21",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
            {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        ],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"11111",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: [{
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"1999-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        }]
    })
})
 
///check if is followed user
test('check add followed user', () => {
    let user = { accountname:"Bret" }
    let users = [
        {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"2002-12-21",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let newState = Reducer(undefined, getUsers(users))
    newState = Reducer(newState, addfollowers(user))
    expect(newState).toEqual({
        users: [
            {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"2002-12-21",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
            {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        ],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"11111",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: [{
            accountname:"Bret",
            name: "Leanne Graham",
            email: "Sincere@april.biz",
            phone: "1-770-736-8031 x56442",
            birthdate: "2002-12-21",
            zipcode: "92998-3874",
            password: "Kulas Light",
            headline: "hi i am Leanne Graham",
            followed: [
                       "Antonette",
                        "Samantha",
                        "Karianne",
                      ],
        }]
    })
})




test('check delete followers', () => {
    // init user
    let user = "Bret";
    let users = [
        {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"2002-12-21",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let posts = [{
        author: "name1",
        accountname: "Bret" ,
        time: (new Date()).toLocaleString(),
        img: `https://picsum.photos/id/1/200/200`,
        content: "post content1",
        key: "key1"
    },
    {
        author: "name2",
        accountname: "accountname2" ,
        time: (new Date()).toLocaleString(),
        img: `https://picsum.photos/id/1/200/200`,
        content: "post content2",
        key: "key2"
    }]
    let newState = Reducer(undefined, getUsers(users));
    newState = Reducer(newState, updatepost(posts));
    newState = Reducer(newState, addfollowers({accountname: 'Bret'}));
    newState = Reducer(newState, deletefollowers(user));
    expect(newState).toEqual({
        users: [
            {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"2002-12-21",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
            {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        ],
        posts: [],
        Presentpost: [{
            author: "name2",
            accountname: "accountname2" ,
            time: (new Date()).toLocaleString(),
            img: `https://picsum.photos/id/1/200/200`,
            content: "post content2",
            key: "key2"
        }],
        isLogin: false,
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"11111",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: []
    })
})




test('test update user headline', () => {
    let users = [
        {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"2002-12-21",headline:"test",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let newState = Reducer(undefined, getUsers(users))
    let newHeadline = 'test'
    newState = Reducer(newState, changeheadline(newHeadline));
    expect(newState).toEqual({
        users: [
            {accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",username:"Leanne Graham",birthdate:"2002-12-21",headline:"test",zipcode:"11111",followed:["Antonette","Samantha","Karianne"]},
            {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"2002-12-21",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"2002-12-21",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"2002-12-21",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        ],
        posts: [],
        Presentpost: [],
        isLogin: false,
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"test",
            zipcode:"11111",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: []
    })
}) 

//////////////////

test('check id update posts', () => {
    let posts = [{
        author: "a",
        accountname: "accountname1" ,
        time: (new Date()).toLocaleString(),
        img: `https://picsum.photos/id/1/300/300`,
        content: "bbbbbb",
        key: "1"
    },
    {
        author: "b",
        accountname: "accountname2" ,
        time: (new Date()).toLocaleString(),
        img: `https://picsum.photos/id/1/300/300`,
        content: "aaaaaa",
        key: "2"
    }]
    let newState = Reducer(undefined, updatepost(posts));
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost: posts,
        isLogin: false,
        followers: [],
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"test",
            zipcode:"11111",
            followed:["Antonette","Samantha","Karianne"]
        }
     
    })
}) 


test('test add new post', () => {
    let post = {
        author: "name",
        accountname: "accountname" ,
        time: (new Date()).toLocaleString(),
        img: `https://picsum.photos/id/3/300/300`,
        content: "post content",
        key: "key"
    }
    let newState = Reducer(undefined, addpost(post))
    expect(newState).toEqual({
        users: [],
        posts: [],
        Presentpost:[post],
        isLogin: false,
        userInfo: {
            accountname:"Bret", 
            password:"Kulas Light", 
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            username:"Leanne Graham",
            birthdate:"2002-12-21",
            headline:"test",
            zipcode:"11111",
            followed:["Antonette","Samantha","Karianne"]
        },
        followers: []
    })
})

