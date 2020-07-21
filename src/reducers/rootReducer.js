import { combineReducers } from "redux";
import reduxIntro from "./reduxIntroReducer";
import reduxIntroSolution from "./reduxIntroSolutionReducer";

const rootReducer = combineReducers({
  reduxIntro,
  reduxIntroSolution,
});

export default rootReducer;
//Defining rootReducer as a variable and exporting it makes it testable
