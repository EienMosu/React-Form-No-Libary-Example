import React, { useRef, useState } from "react";
import "./app.scss";
import FormInput from "./components/FormInput";

const App = () => {
  // Ref handle
  // const usernameRef = useRef();

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      // regex code for only letter and numbers
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        " Passwrod should be 8-16 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (event) => {
    // All Form Controling handle way
    // const data = new FormData(event.target)
    // console.log(Object.fromEntries(data.entries()))

    // Ref handle
    // console.log(usernameRef)

    event.preventDefault();
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {/* !!!All Form Controling!!! <FormInput name="username" placeholder="Username"/> */}
        {/* !!!Ref handle!!! <FormInput placeholder="Username" refer={usernameRef}/> */}
        {inputs.map((item) => (
          <FormInput
            key={item.id}
            // placeholder={item.placeholder}
            // type={item.type}
            // name={item.name}
            // label={item.label}
            // OR
            {...item}
            value={values[item.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
