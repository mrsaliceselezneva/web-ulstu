import { combineReducers } from 'redux'
import dialogs from './dialogs'
import messages from './messages'
import lastmess from './lastmess'


export default combineReducers({
    dialogs,
    messages,
    lastmess

})