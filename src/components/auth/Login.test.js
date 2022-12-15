import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from '../../reducers'
import Login from './Login'
import { getUsers } from '../../actions'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, {mount} from 'enzyme';
Enzyme.configure({adapter:new Adapter()});



test("check login",()=>{
    const store = createStore(Reducer)
    const wrapper = mount(
   
        <Provider store={store}>
            <Login/>
        </Provider>
    )
    store.dispatch(getUsers([
        {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        {accountname:"Kamren",password:"Skiles Walks",email:"Lucio_Hettinger@annie.ca",phone:"(254)954-1289",name:"Chelsey Dietrich",birthdate:"1990-01-01",headline:"hi i am Chelsey Dietrich",zipcode:"33263",followed:["Leopoldo_Corkery","Elwyn.Skiles","Maxime_Nienow"]},
        {accountname:"Leopoldo_Corkery",password:"Norberto Crossing",email:"Karley_Dach@jasper.info",phone:"1-477-935-8478 x6430",name:"Mrs. Dennis Schulist",birthdate:"1990-01-01",headline:"hi i am Mrs. Dennis Schulist",zipcode:"23505-1337",followed:["Elwyn.Skiles","Maxime_Nienow","Delphine"]},
    ]))

    
   wrapper.find("#testUsername").simulate("change",{target:{value:"Samantha"}})
    console.log(wrapper.find("#testUsername").props())
    wrapper.find("#testPassword").simulate("change",{target:{value:"Douglas Extension"}})
    console.log(wrapper.find("#testPassword").props())
    wrapper.find("#submitLogin").simulate("click")
    expect(store.getState().isLogin).toEqual(true) 


})

test("check login is both is empty",()=>{
    const store = createStore(Reducer)
    const wrapper = mount(
   
        <Provider store={store}>
            <Login/>
        </Provider>
    )
    store.dispatch(getUsers([
        {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        {accountname:"Kamren",password:"Skiles Walks",email:"Lucio_Hettinger@annie.ca",phone:"(254)954-1289",name:"Chelsey Dietrich",birthdate:"1990-01-01",headline:"hi i am Chelsey Dietrich",zipcode:"33263",followed:["Leopoldo_Corkery","Elwyn.Skiles","Maxime_Nienow"]},
        {accountname:"Leopoldo_Corkery",password:"Norberto Crossing",email:"Karley_Dach@jasper.info",phone:"1-477-935-8478 x6430",name:"Mrs. Dennis Schulist",birthdate:"1990-01-01",headline:"hi i am Mrs. Dennis Schulist",zipcode:"23505-1337",followed:["Elwyn.Skiles","Maxime_Nienow","Delphine"]},
    ]))

    
   wrapper.find("#testUsername").simulate("change",{target:{value:""}})
    console.log(wrapper.find("#testUsername").props())
    wrapper.find("#testPassword").simulate("change",{target:{value:""}})
    console.log(wrapper.find("#testPassword").props())
    wrapper.find("#submitLogin").simulate("click")
    expect(store.getState().isLogin).toEqual(false) 


})


test("check login is incorrect",()=>{
    const store = createStore(Reducer)
    const wrapper = mount(
   
        <Provider store={store}>
            <Login/>
        </Provider>
    )
    store.dispatch(getUsers([
        {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        {accountname:"Kamren",password:"Skiles Walks",email:"Lucio_Hettinger@annie.ca",phone:"(254)954-1289",name:"Chelsey Dietrich",birthdate:"1990-01-01",headline:"hi i am Chelsey Dietrich",zipcode:"33263",followed:["Leopoldo_Corkery","Elwyn.Skiles","Maxime_Nienow"]},
        {accountname:"Leopoldo_Corkery",password:"Norberto Crossing",email:"Karley_Dach@jasper.info",phone:"1-477-935-8478 x6430",name:"Mrs. Dennis Schulist",birthdate:"1990-01-01",headline:"hi i am Mrs. Dennis Schulist",zipcode:"23505-1337",followed:["Elwyn.Skiles","Maxime_Nienow","Delphine"]},
    ]))

    
   wrapper.find("#testUsername").simulate("change",{target:{value:"cdsds"}})
    console.log(wrapper.find("#testUsername").props())
    wrapper.find("#testPassword").simulate("change",{target:{value:"cdscdca"}})
    console.log(wrapper.find("#testPassword").props())
    wrapper.find("#submitLogin").simulate("click")
    expect(store.getState().isLogin).toEqual(false) 


})

