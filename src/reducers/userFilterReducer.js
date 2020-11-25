import { USER_FILTER_CHANGE } from "../actions/actionTypes";

const userFilterState = {
    userName: "",
    personalId: "",
    rolesId: [],
    firstName: "",
    lastName: "",
    organizationTax: "",
    organization: "",
};

const userFilterReducer = (state = userFilterState, action) => {
  const { type, payload } = action;
  console.log("userReducer - ------------------", type, payload);
  switch (type) {
    case USER_FILTER_CHANGE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default userFilterReducer;
