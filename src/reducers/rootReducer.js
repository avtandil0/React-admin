import {combineReducers} from 'redux'
import dialisysReportReducer from './dialisysReportReducer'
import filterReducer from './filterReducer'
import settingReducer from './settingReducer'
import genryReducer from './genryReducer'
import movieReducer from './movieReducer'
import movieByGenreReducer from './movieByGenreReducer'
import castReducer from './castReducer'
import commonsReducer from './commonsReducer'
import userReducer from './userReducer'
import userFilterReducer from './userFilterReducer'
import dialisysServiceProvidersReducer from "./dialisysServiceProvidersReducer";

const rootReducer = combineReducers({
    dialisysReportReducer,
    filterReducer,
    settingReducer,
    genryReducer,
    movieReducer,
    movieByGenreReducer,
    dialisysServiceProvidersReducer,
    castReducer,
    commonsReducer,
    userReducer,
    userFilterReducer,
})
export default rootReducer