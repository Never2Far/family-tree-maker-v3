import { combineReducers } from 'redux';
import manageRelatives from './manageRelatives'
import manageRegistration from './manageRegistration'

const rootReducer = combineReducers({
    relatives: manageRelatives,
    auth: manageRegistration
});

export default rootReducer