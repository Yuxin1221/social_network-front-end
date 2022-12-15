import {createStore} from 'redux'
import Reducer from '../../reducers'
import Landing from './Landing'
import Login from './Login'
import Registerform from './Registerform'
import { getUsers } from '../../actions'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, {mount} from 'enzyme';
import {Provider} from 'react-redux'
Enzyme.configure({adapter:new Adapter()});

test('check landing page',()=>{
    const store=createStore(Reducer)
   const wrapper=mount(
      <Provider store={store}>
           <Landing/>
      </Provider>
   )
   expect(wrapper.find(Login)).toHaveLength(1);
   expect(wrapper.find(Registerform)).toHaveLength(1);

})