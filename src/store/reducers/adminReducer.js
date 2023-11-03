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
      return {
        ...copyStateGender1,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      let copyStateGender2 = { ...state }; // mean copyState == initialState
      copyStateGender2.genderArray = action.data;
      copyStateGender2.isLoadingGender = false;
      return {
        ...copyStateGender2,
      };
    case actionTypes.FETCH_GENDER_FAIL:
      let copyStateGender3 = { ...state }; // mean copyState == initialState
      copyStateGender3.isLoadingGender = false;
      copyStateGender3.genderArray = [];
      return {
        ...copyStateGender3,
      };

    case actionTypes.FETCH_POSITION_START:
      let copyStatePosition1 = { ...state }; // mean copyState == initialState
      copyStatePosition1.isLoadingGender = true;
      return {
        ...copyStatePosition1,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      let copyStatePosition2 = { ...state }; // mean copyState == initialState
      copyStatePosition2.positionArray = action.data;
      copyStatePosition2.isLoadingGender = false;
      return {
        ...copyStatePosition2,
      };
    case actionTypes.FETCH_POSITION_FAIL:
      let copyStatePosition3 = { ...state }; // mean copyState == initialState
      copyStatePosition3.isLoadingGender = false;
      copyStatePosition3.positionArray = [];
      return {
        ...copyStatePosition3,
      };

    case actionTypes.FETCH_ROLEID_START:
      let copyStateRole1 = { ...state }; // mean copyState == initialState
      copyStateRole1.isLoadingGender = true;
      return {
        ...copyStateRole1,
      };
    case actionTypes.FETCH_ROLEID_SUCCESS:
      let copyStateRole2 = { ...state }; // mean copyState == initialState
      copyStateRole2.roleIDArray = action.data;
      copyStateRole2.isLoadingGender = false;
      return {
        ...copyStateRole2,
      };
    case actionTypes.FETCH_ROLEID_FAIL:
      let copyStateRole3 = { ...state }; // mean copyState == initialState
      copyStateRole3.isLoadingGender = false;
      copyStateRole3.roleIDArray = [];
      return {
        ...copyStateRole3,
      };

    default:
      return state;
  }
};

export default adminReducer;
