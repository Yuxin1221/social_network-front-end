import {createStore} from 'redux'
import Reducer from '../../reducers'
import Article from './Article'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, {mount} from 'enzyme';
import {Provider} from 'react-redux'
import { MemoryRouter } from 'react-router'
import Articlebody from './Articlebody';
import PostArticle from './PostArticle'
Enzyme.configure({adapter:new Adapter()});

test('check article component',()=>{
    const store=createStore(Reducer)
   const wrapper=mount(
      <Provider store={store}>
          <MemoryRouter>
           <Article/>
           </MemoryRouter>
        </Provider>
   )
   expect(wrapper.find(Articlebody)).toHaveLength(1);
   expect(wrapper.find(PostArticle)).toHaveLength(1);

})