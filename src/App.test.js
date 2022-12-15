import React from 'react';
import { MemoryRouter } from 'react-router';
import { Provider } from "react-redux";
import Landing from './components/auth/Landing'
import Main from './components/main/main'
import Profile from './components/profile/profile'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import {createStore} from 'redux'
import Reducer from './reducers'
import { changepage } from './actions';
import App from './App'

Enzyme.configure({adapter: new Adapter()});

test("test entry at './",()=>{
    const store=createStore(Reducer);
    const wrapper=mount(
        <MemoryRouter initialEntries={['/']}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper.find(Landing)).toHaveLength(1);
    expect(wrapper.find(Main)).toHaveLength(0);
    expect(wrapper.find(Profile)).toHaveLength(0);

})

test("test entry at './",()=>{
    const store=createStore(Reducer);
    const wrapper=mount(
        <MemoryRouter initialEntries={['/profile']}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper.find(Landing)).toHaveLength(1);
    expect(wrapper.find(Main)).toHaveLength(0);
    expect(wrapper.find(Profile)).toHaveLength(0);

})
test("test entry at './",()=>{
    const store=createStore(Reducer);
    const wrapper=mount(
        <MemoryRouter initialEntries={['/main']}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper.find(Landing)).toHaveLength(1);
    expect(wrapper.find(Main)).toHaveLength(0);
    expect(wrapper.find(Profile)).toHaveLength(0);

})


test("test entry at './",()=>{
    const store=createStore(Reducer);
    const wrapper=mount(
        <MemoryRouter initialEntries={['/profile']}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper.find(Landing)).toHaveLength(1);
    expect(wrapper.find(Main)).toHaveLength(0);
    expect(wrapper.find(Profile)).toHaveLength(0);

})

test("test at main",()=>{
    const store=createStore(Reducer);
    store.dispatch(changepage())
    const wrapper=mount(
        <MemoryRouter initialEntries={['/profile']}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper.find(Landing)).toHaveLength(0);
    expect(wrapper.find(Main)).toHaveLength(1);
    expect(wrapper.find(Profile)).toHaveLength(0);

})
///////???????????

test("test at profile'", () => {
    const store = createStore(Reducer);
    store.dispatch(changepage());
    const wrapper = mount(
    <MemoryRouter initialEntries={[ '/main' ]}>
        <Provider store={store}>
            <App/>
        </Provider>
    </MemoryRouter>
  );
  expect(wrapper.find(Landing)).toHaveLength(0);
  expect(wrapper.find(Main)).toHaveLength(1);
  expect(wrapper.find(Profile)).toHaveLength(0);
});