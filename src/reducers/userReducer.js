import { USERS_LOAD_SUCCESS } from "../actions/actionTypes";

const userState = {
    userName: "",
    personalId: "",
    rolesId: [],
    firstName: "",
    lastName: "",
    organizationTax: "",
    organization: "",
};

const userReducer = (state = userState, action) => {
  const { type, payload } = action;
  console.log("userReducer - ------------------", type, payload);
  switch (type) {
    case USERS_LOAD_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default userReducer;
