import { combineReducers } from 'redux';

import crud from './crud';
import fetch from './fetch';
import mail from './mail';

export const reducers = combineReducers({ crud ,mail,fetch});
