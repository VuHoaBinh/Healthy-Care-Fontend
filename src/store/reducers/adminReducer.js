import actionTypes from "../actions/actionTypes";

const initialState = {
  genderArray: [],
  roleIDArray: [],
  positionArray: [],
  isLoadingGender: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      let copyStateGender1 = { ...state }; // mean copyState == initialState
      copyStateGender1.isLoadingGender = true;
      console.log("Fire gender start:", action);
      return {
        ...copyStateGender1,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      let copyStateGender2 = { ...state }; // mean copyState == initialState
      copyStateGender2.genderArray = action.data;
      copyStateGender2.isLoadingGender = false;
      console.log("Fire gender success:", copyStateGender2);
      return {
        ...copyStateGender2,
      };
    case actionTypes.FETCH_GENDER_FAIL:
      let copyStateGender3 = { ...state }; // mean copyState == initialState
      copyStateGender3.isLoadingGender = false;
      copyStateGender3.genderArray = [];
      console.log("Fire gender fail:", action);
      return {
        ...copyStateGender3,
      };

    case actionTypes.FETCH_POSITION_START:
      let copyStatePosition1 = { ...state }; // mean copyState == initialState
      copyStatePosition1.isLoadingGender = true;
      console.log("Fire position start:", action);
      return {
        ...copyStatePosition1,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      let copyStatePosition2 = { ...state }; // mean copyState == initialState
      copyStatePosition2.positionArray = action.data;
      copyStatePosition2.isLoadingGender = false;
      console.log("Fire position success:", copyStatePosition2);
      return {
        ...copyStatePosition2,
      };
    case actionTypes.FETCH_POSITION_FAIL:
      let copyStatePosition3 = { ...state }; // mean copyState == initialState
      copyStatePosition3.isLoadingGender = false;
      copyStatePosition3.positionArray = [];
      console.log("Fire position fail:", action);
      return {
        ...copyStatePosition3,
      };

    case actionTypes.FETCH_ROLEID_START:
      let copyStateRole1 = { ...state }; // mean copyState == initialState
      copyStateRole1.isLoadingGender = true;
      console.log("Fire role start:", action);
      return {
        ...copyStateRole1,
      };
    case actionTypes.FETCH_ROLEID_SUCCESS:
      let copyStateRole2 = { ...state }; // mean copyState == initialState
      copyStateRole2.roleIDArray = action.data;
      copyStateRole2.isLoadingGender = false;
      console.log("Fire role success:", copyStateRole2);
      return {
        ...copyStateRole2,
      };
    case actionTypes.FETCH_ROLEID_FAIL:
      let copyStateRole3 = { ...state }; // mean copyState == initialState
      copyStateRole3.isLoadingGender = false;
      copyStateRole3.roleIDArray = [];
      console.log("Fire role fail:", action);
      return {
        ...copyStateRole3,
      };

    default:
      return state;
  }
};

export default adminReducer;
