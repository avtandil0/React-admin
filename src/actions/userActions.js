import { ROLES_LOAD_SUCCESS, USER_FILTER_CHANGE, USERS_LOAD_SUCCESS } from "./actionTypes";
import { getRolesFromApi, getUsersFromApi } from "../api/index";

export const getRoles = () => async (dispatch) => {
  // dispatch({type: LOADING, payload: true})
  try {
    const result = await getRolesFromApi();
    dispatch({
      type: ROLES_LOAD_SUCCESS,
      payload: result,
    });
  } catch (error) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", error);
  }
};

export const userFilterChange = (filter) => ({
  type: USER_FILTER_CHANGE,
  payload: filter,
});

export const getUsers = (filter) => async (dispatch) => {
  // dispatch({type: LOADING, payload: true})
  console.log('getUsersgetUsersgetUsers',filter)
  try {
    const result = await getUsersFromApi(filter);
    dispatch({
      type: USERS_LOAD_SUCCESS,
      payload: result,
    });
  } catch (error) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", error);
  }
};
