import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import Reducer  from '../../reducers'
import { getUsers } from '../../actions'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

import Registerform from './Registerform'


test("test under 18 years old", () => {
    const store = createStore(Reducer);
    store.dispatch(getUsers([
        {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        {accountname:"Kamren",password:"Skiles Walks",email:"Lucio_Hettinger@annie.ca",phone:"(254)954-1289",name:"Chelsey Dietrich",birthdate:"1990-01-01",headline:"hi i am Chelsey Dietrich",zipcode:"33263",followed:["Leopoldo_Corkery","Elwyn.Skiles","Maxime_Nienow"]},
        {accountname:"Leopoldo_Corkery",password:"Norberto Crossing",email:"Karley_Dach@jasper.info",phone:"1-477-935-8478 x6430",name:"Mrs. Dennis Schulist",birthdate:"1990-01-01",headline:"hi i am Mrs. Dennis Schulist",zipcode:"23505-1337",followed:["Elwyn.Skiles","Maxime_Nienow","Delphine"]},
    ]))
    const wrapper = mount(
        <Provider store={store}>
            <Registerform/>
        </Provider>
    );

    wrapper.find("#Myname").simulate("change", {target: {value: "aaaa"}});
    wrapper.find("#Myemail").simulate("change", {target: {value: "a@b.com"}});
    wrapper.find("#Myphone").simulate("change", {target: {value: "111-111-1111"}});
    wrapper.find("#Mybirth").simulate("change", {target: {value: "2021-01-01"}});
    wrapper.find("#Myzipcode").simulate("change", {target: {value: "11111"}});
    wrapper.find("#Mypassword").simulate("change", {target: {value: "1"}});
    wrapper.find("#Mycp").simulate("change", {target: {value: "1"}});
    wrapper.find("#check").simulate("click");
    expect(wrapper.find("#ERROR").props().children).toEqual("You cannot register under 18 years old");
}) 

   test("test if password is equal", () => {
    const store = createStore(Reducer);
    store.dispatch(getUsers([
        {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        {accountname:"Kamren",password:"Skiles Walks",email:"Lucio_Hettinger@annie.ca",phone:"(254)954-1289",name:"Chelsey Dietrich",birthdate:"1990-01-01",headline:"hi i am Chelsey Dietrich",zipcode:"33263",followed:["Leopoldo_Corkery","Elwyn.Skiles","Maxime_Nienow"]},
        {accountname:"Leopoldo_Corkery",password:"Norberto Crossing",email:"Karley_Dach@jasper.info",phone:"1-477-935-8478 x6430",name:"Mrs. Dennis Schulist",birthdate:"1990-01-01",headline:"hi i am Mrs. Dennis Schulist",zipcode:"23505-1337",followed:["Elwyn.Skiles","Maxime_Nienow","Delphine"]},
    ]))
    
    const wrapper = mount(
        <Provider store={store}>
            <Registerform/>
        </Provider>
    );
    wrapper.find("#Myname").simulate("change", {target: {value: "aaaa"}});
    wrapper.find("#Myemail").simulate("change", {target: {value: "a@b.com"}});
    wrapper.find("#Myphone").simulate("change", {target: {value: "111-111-1111"}});
    wrapper.find("#Mybirth").simulate("change", {target: {value: "1999-01-01"}});
    wrapper.find("#Myzipcode").simulate("change", {target: {value: "11111"}});
    wrapper.find("#Mypassword").simulate("change", {target: {value: "1111"}});
    wrapper.find("#Mycp").simulate("change", {target: {value: "1"}});
    wrapper.find("#check").simulate("click");
    expect(wrapper.find("#ERROR").props().children).toEqual("Password must be matched");
}) 




 test("test register with success", () => {
    const store = createStore(Reducer);
    store.dispatch(getUsers([{accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",name:"Leanne Graham",birthdate:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
    {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",name:"Ervin Howell",birthdate:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
    {accountname:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",name:"Clementine Bauch",birthdate:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
    {accountname:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",name:"Patricia Lebsack",birthdate:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    {accountname:"Kamren",password:"Skiles Walks",email:"Lucio_Hettinger@annie.ca",phone:"(254)954-1289",name:"Chelsey Dietrich",birthdate:"1990-01-01",headline:"hi i am Chelsey Dietrich",zipcode:"33263",followed:["Leopoldo_Corkery","Elwyn.Skiles","Maxime_Nienow"]},
    {accountname:"Leopoldo_Corkery",password:"Norberto Crossing",email:"Karley_Dach@jasper.info",phone:"1-477-935-8478 x6430",name:"Mrs. Dennis Schulist",birthdate:"1990-01-01",headline:"hi i am Mrs. Dennis Schulist",zipcode:"23505-1337",followed:["Elwyn.Skiles","Maxime_Nienow","Delphine"]},
    {accountname:"Elwyn.Skiles",password:"Rex Trail",email:"Telly.Hoeger@billy.biz",phone:"210.067.6132",name:"Kurtis Weissnat",birthdate:"1990-01-01",headline:"hi i am Kurtis Weissnat",zipcode:"58804-1099",followed:["Maxime_Nienow","Delphine","Moriah.Stanton"]},
    {accountname:"Maxime_Nienow",password:"Ellsworth Summit",email:"Sherwood@rosamond.me",phone:"586.493.6943 x140",name:"Nicholas Runolfsdottir V",birthdate:"1990-01-01",headline:"hi i am Nicholas Runolfsdottir V",zipcode:"45169",followed:["Delphine","Moriah.Stanton","Bret"]},
    {accountname:"Delphine",password:"Dayna Park",email:"Chaim_McDermott@dana.io",phone:"(775)976-6794 x41206",name:"Glenna Reichert",birthdate:"1990-01-01",headline:"hi i am Glenna Reichert",zipcode:"76495-3109",followed:["Moriah.Stanton","Bret","Antonette"]},
    {accountname:"Moriah.Stanton",password:"Kattie Turnpike",email:"Rey.Padberg@karina.biz",phone:"024-648-3804",name:"Clementina DuBuque",birthdate:"1990-01-01",headline:"hi i am Clementina DuBuque",zipcode:"31428-2261",followed:["Bret","Antonette","Samantha"]}]))
    const wrapper = mount(
        <Provider store={store}>
            <Registerform/>
        </Provider>
    );

    let userInfo = {
        accountname: "a123",
        username: "a123",
        email: "123@123.com",
        phone: "123-123-1234",
        birthdate: "1990-10-20",
        zipcode: "12345",
        password: "123",
        headline: "hi i am a123",
        followed: ["Bret"]
    };
    wrapper.find("#Myname").simulate("change", {target: {value: "aaaa"}});
    wrapper.find("#Myemail").simulate("change", {target: {value: "a@b.com"}});
    wrapper.find("#Myphone").simulate("change", {target: {value: "111-111-1111"}});
    wrapper.find("#Mybirth").simulate("change", {target: {value: "2021-10-01"}});
    wrapper.find("#Myzipcode").simulate("change", {target: {value: "11111"}});
    wrapper.find("#Mypassword").simulate("change", {target: {value: "1"}});
    wrapper.find("#Mycp").simulate("change", {target: {value: "1"}});
    wrapper.find("#check").simulate("click");
    expect(store.getState().userInfo).toEqual({
        "accountname": "",
       "birthdate": "",
       "email": "",
       "followed": [],
      "headline": "",
      "password": "",
      "phone": "",
      "username": "",
       "zipcode": "",
    });
})  