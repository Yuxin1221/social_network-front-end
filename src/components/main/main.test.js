import {createStore} from 'redux'
import Reducer from '../../reducers'
import Headline from './Headline'
import article from '../../components/article/Article'
import Navigation from './Navigation'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, {mount} from 'enzyme';
import {Provider} from 'react-redux'
import Following from './Following';
import Main from './main'
import { MemoryRouter, Router } from 'react-router'
Enzyme.configure({adapter:new Adapter()});

test('check landing page',()=>{
    const store=createStore(Reducer)
   const wrapper=mount(
      <Provider store={store}>
          <MemoryRouter>
           <Main/>
           </MemoryRouter>
        </Provider>
   )
   expect(wrapper.find(Headline)).toHaveLength(1);
   expect(wrapper.find(article)).toHaveLength(1);
   expect(wrapper.find(Following)).toHaveLength(1);
   expect(wrapper.find(Navigation)).toHaveLength(1);


})