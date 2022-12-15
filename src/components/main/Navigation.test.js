import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import Reducer from '../../reducers'
import {changepage} from '../../actions'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
import {MemoryRouter} from 'react-router'
import  Navigation from './Navigation'
import {Link } from 'react-router-dom'
Enzyme.configure({adapter: new Adapter()});  

test('test navigation',()=>{
    const store=createStore(Reducer)
    store.dispatch(changepage())
    const wrapper= mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['./main']}>
                <Navigation/>
            </MemoryRouter>
        </Provider>
    )

     expect(wrapper.find(Navigation)).toHaveLength(1)
    /////怎么传link
})
test("should log out a user",()=>{
    const store = createStore(Reducer)
    store.dispatch(changepage())
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['./main']}>
                <Navigation/>
            </MemoryRouter>
        </Provider>
    )
    wrapper.find('#log_out').at(0).simulate('click')
    expect(store.getState().isLogin).toEqual(false) 

    /////

})
