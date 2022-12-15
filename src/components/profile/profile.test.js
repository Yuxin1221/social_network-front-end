import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import  Reducer  from '../../reducers'
import {updateUsers} from '../../actions'
import Profile from './profile'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});
import {getUsers, updateusers} from '../../actions'
import { MemoryRouter } from 'react-router-dom';

test("test profile fetch userInfo", () => {
    const store = createStore(Reducer);
    store.dispatch(updateusers(
        {   accountname: "Bret",
            username:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            birthdate:"1999-12-21",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        }))

    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter>
            <Profile/>
            </MemoryRouter>
        </Provider>
    );

    expect(store.getState().userInfo.username).toEqual("Bret")
    expect(wrapper.find("#testname").props().children).toEqual("Bret");
    expect(wrapper.find("#testemail").props().children).toEqual("Sincere@april.biz");
    expect(wrapper.find("#testbirth").props().children).toEqual("1999-12-21");
    expect(wrapper.find("#testphone").props().children).toEqual("1-770-736-8031 x56442");
    expect(wrapper.find("#testzipcode").props().children).toEqual("92998-3874");
})




