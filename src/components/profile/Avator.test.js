import {createStore} from 'redux'
import Reducer from '../../reducers'

import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, {mount} from 'enzyme';
import {Provider} from 'react-redux'
import Avator from './Avator'

Enzyme.configure({adapter:new Adapter()});

test('check landing page',()=>{
    const store=createStore(Reducer)
   const wrapper=mount(
      <Provider store={store}>
           <Avator/>
        </Provider>
   )
   expect(wrapper.find('input')).toHaveLength(1)
 
})