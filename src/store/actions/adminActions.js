import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  getCreateUserService,
} from "../../services/userServices";

//fetch is in HTTP
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START });
      let res = await getAllCodeService("gender");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFail());
      }
    } catch (e) {
      dispatch(fetchGenderFail());
    }
  };
};

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_POSITION_START });
      let res = await getAllCodeService("position");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFail());
      }
    } catch (e) {
      dispatch(fetchPositionFail());
    }
  };
};

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_ROLEID_START });
      let res = await getAllCodeService("role");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFail());
      }
    } catch (e) {
      dispatch(fetchRoleFail());
    }
  };
};

export const createUserStart = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.CREATE_USER_START });
      let res = await getCreateUserService(data);
      if (res && res.errCode === 0) {
        dispatch(createUserSuccess(res.data));
      } else {
        dispatch(createUserFail());
      }
    } catch (e) {
      dispatch(createUserFail());
    }
  };
};

//gender
export const fetchGenderSuccess = (data) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: data,
});

export const fetchGenderFail = () => ({
  type: actionTypes.FETCH_GENDER_FAIL,
});

//position
export const fetchPositionSuccess = (data) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: data,
});

export const fetchPositionFail = () => ({
  type: actionTypes.FETCH_POSITION_FAIL,
});

//role
export const fetchRoleSuccess = (data) => ({
  type: actionTypes.FETCH_ROLEID_SUCCESS,
  data: data,
});

export const fetchRoleFail = () => ({
  type: actionTypes.FETCH_ROLEID_FAIL,
});

// add user

export const createUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const createUserFail = () => ({
  type: actionTypes.CREATE_USER_FAIL,
});
