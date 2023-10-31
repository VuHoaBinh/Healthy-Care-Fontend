import actionTypes from "../actions/actionTypes";

const initialState = {
  genderArray: [],
  roleIDArray: [],
  positionArray: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      console.log("Fire gender start:", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      let copyState = { ...state }; // mean copyState == initialState
      copyState.genderArray = action.data;
      console.log("Fire gender success:", copyState);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_FAIL:
      console.log("Fire gender fail:", action);

      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
