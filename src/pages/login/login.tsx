import React from "react";
import { Input, Button, Row, Col } from "antd";
import { useFormik } from "formik";
import * as Y from "yup";
import { signIn } from "src/services";
import { saveLocal } from "src/utils";
import { ACCESS_TOKEN } from "src/constants";
import { useDispatch } from "react-redux";
import { loginSuccess } from "src/redux/userSlice";

const validationSchema = Y.object({
  email: Y.string().email().required(),
  password: Y.string().required(),
});

function Login() {
  const dispatch = useDispatch();

  const { handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);

      signIn(values).then((resp) => {
        saveLocal(ACCESS_TOKEN, resp.accessToken);
        dispatch(
          loginSuccess({
            email: resp.email,
          }),
        );

        
      });
    },
  });

  return (
    <form onSubmit={handleSubmit} className="px-16 py-16">
      <Row>
        <Col lg={24}>
          <label>Email</label>
          <Input {...getFieldProps("email")} />
        </Col>
        <Col lg={24}>
          <label>Pass Word</label>
          <Input {...getFieldProps("password")} />
        </Col>
      </Row>

      <button
        type="submit"
        className="bg-lime-600 text-white px-4 py-2 rounded-2xl mt-4"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
