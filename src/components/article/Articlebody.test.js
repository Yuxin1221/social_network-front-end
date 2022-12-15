import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import  Reducer from '../../reducers'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

import Articlebody from './Articlebody'
import {getUsers, getpost, updateusers} from '../../actions'

test('test the current post', () => {
    const store = createStore(Reducer);
    let posts = []
    for (let i=0; i<100; i++) {
        posts.push('something')
    }
  
    store.dispatch(getUsers([{accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",username:"Leanne Graham",birthdate:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
    {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",username:"Ervin Howell",birthdate:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
    {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",username:"Clementine Bauch",birthdate:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
    {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",username:"Patricia Lebsack",birthdate:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    {accountname:"Kamren",password:"Skiles Walks",email:"Lucio_Hettinger@annie.ca",phone:"(254)954-1289",username:"Chelsey Dietrich",birthdate:"1990-01-01",headline:"hi i am Chelsey Dietrich",zipcode:"33263",followed:["Leopoldo_Corkery","Elwyn.Skiles","Maxime_Nienow"]},
    {accountname:"Leopoldo_Corkery",password:"Norberto Crossing",email:"Karley_Dach@jasper.info",phone:"1-477-935-8478 x6430",username:"Mrs. Dennis Schulist",birthdate:"1990-01-01",headline:"hi i am Mrs. Dennis Schulist",zipcode:"23505-1337",followed:["Elwyn.Skiles","Maxime_Nienow","Delphine"]},
    {accountname:"Elwyn.Skiles",password:"Rex Trail",email:"Telly.Hoeger@billy.biz",phone:"210.067.6132",username:"Kurtis Weissnat",birthdate:"1990-01-01",headline:"hi i am Kurtis Weissnat",zipcode:"58804-1099",followed:["Maxime_Nienow","Delphine","Moriah.Stanton"]},
    {accountname:"Maxime_Nienow",password:"Ellsworth Summit",email:"Sherwood@rosamond.me",phone:"586.493.6943 x140",username:"Nicholas Runolfsdottir V",birthdate:"1990-01-01",headline:"hi i am Nicholas Runolfsdottir V",zipcode:"45169",followed:["Delphine","Moriah.Stanton","Bret"]},
    {accountname:"Delphine",password:"Dayna Park",email:"Chaim_McDermott@dana.io",phone:"(775)976-6794 x41206",username:"Glenna Reichert",birthdate:"1990-01-01",headline:"hi i am Glenna Reichert",zipcode:"76495-3109",followed:["Moriah.Stanton","Bret","Antonette"]},
    {accountname:"Moriah.Stanton",password:"Kattie Turnpike",email:"Rey.Padberg@karina.biz",phone:"024-648-3804",username:"Clementina DuBuque",birthdate:"1990-01-01",headline:"hi i am Clementina DuBuque",zipcode:"31428-2261",followed:["Bret","Antonette","Samantha"]}]))
   
    store.dispatch(updateusers({
        accountname: "Bret",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        phone: "",
        birthdate: "",
        zipcode: "31428-2261",
        password: "Kattie Turnpike",
        headline: "Hi i am Moriah.Stanton",
        followed: []}
        ))
    store.dispatch(getpost(posts));
  

    const wrapper = mount(
        <Provider store={store}>
            <Articlebody/>
        </Provider>
    );
    
   /*  expect(wrapper.find("content")).toHaveLength(10);
    wrapper.find("input").at(0).simulate("change", {target: {value: "aaa"}});
    expect(wrapper.find("content")).toHaveLength(10); */
})