import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Select from "../commons/select";
import { getRoles } from "../../actions/actions";
import { getUsers } from "../../actions/userActions";
import { userFilterChange } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
  padding: {
    margin: "10px",
  },
}));
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function Filter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userFilterReducer);
  const commonsReducer = useSelector((state) => state.commonsReducer);

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  useEffect(() => {
    console.log("roles-------------------", commonsReducer);
  }, [commonsReducer.roles]);

  useEffect(() => {
    console.log("filter-------------------", userState);
  }, [userState]);

  const search = () => {
      console.log('userStateuserStateuserState,userState',userState)
    dispatch(getUsers({...userState, pageIndex: 1}));
  };

  const handleChange = (event) => {
    console.log("userState.filter", userState.userFilterState);
    const { name, value } = event.target;
    let newFilter = { ...userState.userFilterState, [name]: value };
    console.log(1999, name, value, newFilter);
    console.log("newFilter", newFilter);
    dispatch(userFilterChange(newFilter));
  };

  const handleSelectChange = (v) => {
    console.log("vvvvvvvvvvvvvv444v", v);
    let newFilter = { ...userState.userFilterState, rolesId: v };
    dispatch(userFilterChange(newFilter));
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <TextField
            label="მომხმარებლის სახელი"
            name="userName"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField label="სახელი" name="firstName" onChange={handleChange} />
        </Grid>
        <Grid item xs={2}>
          <TextField label="გვარი" name="lastName" onChange={handleChange} />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="პირადი ნომერი"
            name="personalId"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Select
            name="როლი"
            data={commonsReducer.roles}
            values={(v) => handleSelectChange(v)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="საიდენტიფიკაციო კოდი"
            name="organizationTax"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="ორგანიზაციის დასახელება"
            name="organization"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Button
        onClick={search}
        className={classes.padding}
        variant="contained"
        color="primary"
      >
        ძებნა
      </Button>
      <Button variant="contained">გასუფთავება</Button>
    </div>
  );
}

export default Filter;
