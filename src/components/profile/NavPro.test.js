import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import Reducer from '../../reducers'
import {changepage} from '../../actions'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
import {MemoryRouter} from 'react-router'
import  NavPro from './NavPro'
import {Link } from 'react-router-dom'
Enzyme.configure({adapter: new Adapter()});  

test('test navigation',()=>{
    const store=createStore(Reducer)
    store.dispatch(changepage())
    const wrapper= mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['./profile']}>
                <NavPro/>
            </MemoryRouter>
        </Provider>
    )

     expect(wrapper.find(NavPro)).toHaveLength(1)
    /////怎么传link
})


