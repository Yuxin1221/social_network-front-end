import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { createReducer } from '../../reducers'
import PostArticle from './PostArticle';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});
import Reducer from '../../reducers'

test('test post new articles',()=>{
    const store = createStore(Reducer);
    const wrapper = mount(
        <Provider store={store}>
            <PostArticle/>
        </Provider>
    )
    wrapper.find('textarea').simulate('change',{target:{value:"cdsdc"}})
    wrapper.find("button").at(0).simulate("click")
     expect(store.getState().Presentpost.length).toEqual(1)


})

