import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import Reducer from '../../reducers'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

import {getUsers, addfollowers} from '../../actions'
import Following from './Following';

test("test followed user component successful update", () => {
    const store = createStore(Reducer);
    store.dispatch(getUsers([{accountname:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",username:"Leanne Graham",birthdate:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
    {accountname:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",username:"Ervin Howell",birthdate:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
    {accountname:"Maxime_Nienow",password:"Ellsworth Summit",email:"Sherwood@rosamond.me",phone:"586.493.6943 x140",username:"Nicholas Runolfsdottir V",birthdate:"1990-01-01",headline:"hi i am Nicholas Runolfsdottir V",zipcode:"45169",followed:["Delphine","Moriah.Stanton","Bret"]},
    {accountname:"Delphine",password:"Dayna Park",email:"Chaim_McDermott@dana.io",phone:"(775)976-6794 x41206",username:"Glenna Reichert",birthdate:"1990-01-01",headline:"hi i am Glenna Reichert",zipcode:"76495-3109",followed:["Moriah.Stanton","Bret","Antonette"]},
    {accountname:"Moriah.Stanton",password:"Kattie Turnpike",email:"Rey.Padberg@karina.biz",phone:"024-648-3804",username:"Clementina DuBuque",birthdate:"1990-01-01",headline:"hi i am Clementina DuBuque",zipcode:"31428-2261",followed:["Bret","Antonette","Samantha"]}]))

    const wrapper = mount(
        <Provider store={store}>
            <Following/>
        </Provider>
    );
    wrapper.find("input").simulate('change', {target: {value: "Maxime_Nienow"}});
    wrapper.find("#ADD").simulate('click');
    expect(store.getState().followers).toEqual([{"accountname": "Maxime_Nienow", "birthdate": "1990-01-01", "email": "Sherwood@rosamond.me", "followed": ["Delphine", "Moriah.Stanton", "Bret"], "headline": "hi i am Nicholas Runolfsdottir V", "password": "Ellsworth Summit", "phone": "586.493.6943 x140", "username": "Nicholas Runolfsdottir V", "zipcode": "45169"}])
    wrapper.find("#Maxime_Nienow").simulate('click');
    //////???
    expect(store.getState().followers).toEqual([])
})
