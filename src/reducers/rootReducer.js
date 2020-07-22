import { combineReducers } from 'redux'
import reduxIntro from '../components/exercises/intro-to-redux/reducer'
import reduxIntroSolution from '../components/solutions/intro-to-redux/reducer'

const rootReducer = combineReducers({
  reduxIntro,
  reduxIntroSolution,
})

export default rootReducer
//Defining rootReducer as a variable and exporting it makes it testable
