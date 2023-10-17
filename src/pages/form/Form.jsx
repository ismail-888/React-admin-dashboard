import {
  Box,
  MenuItem,
  Stack,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import {
  useForm,
  //  SubmitHandler
} from "react-hook-form";
import Header from "../../components/Header";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const lebanesePhoneRegex = /^(\(\+961\)\s)?\d{2}\d{6}$/;

// const customPhoneRegex = /^\(\+\d+\)\s?\d+$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log("doneeeeeeeeee");
    handleClick();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Header isDashboard={true} title={"CREATE USER"} subTitle={"Create a New User Profile"} />
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName ? "This Field Is Required & min 3 character" : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.lasttName)}
          helperText={
            errors.lasttName ? "This Field Is Required & min 3 character" : null
          }
          {...register("lasttName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={
          errors.email ? "Please Provide a valid email address" : null
        }
        {...register("email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />

      <TextField
        error={Boolean(errors.ContactNumber)}
        helperText={
          errors.ContactNumber ? "Please Provide a valid Phone Number" : null
        }
        {...register("ContactNumber", {
          required: true,
          pattern: lebanesePhoneRegex,
        })}
        label="Contact Number"
        variant="filled"
      />

      <TextField label="Adress 1" variant="filled" />
      <TextField label="Adress 2" variant="filled" />

      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account Created Succssfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
