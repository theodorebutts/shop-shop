import reducer from './reducers';
import { createStore } from 'react-redux'

const store = createStore(reducer)
export default store;