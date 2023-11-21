import { Input, Col, Row, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { useFormik } from "formik";


const validate = (values) => {
  type A = typeof values; 
  type B = keyof A; 

  
  const errors: Record<B, string> = {};

 
  if (values.email.trim().length === 0) {
    errors.email = "Email Không Được Bỏ Trống";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (values.phone.trim().length === 0) {
    errors.phone = "Phone Không Được Bỏ Trống";
  } else if (!(values.phone.length <= 10 && values.phone.length >= 5)) {
    errors.phone = "Phone Không Được Bỏ Trống";
  }

  if (!(values.name.length <= 50 && values.name.length >= 10)) {
    errors.name = "Name Không Được Bỏ Trống";
  }

  return errors;
  
  
};

import * as Y from "yup";
import { signUp } from "src/services";
import { useNavigate } from "react-router-dom";

const validationSchema = Y.object({
  email: Y.string().email("Email không hợp lệ.").required(),
  name: Y.string()
    .min(10, "Không được phép nhỏ hơn 10")
    .max(30, "Không được phép lớn hơn 30")
    .required(),
  passWord: Y.string().min(6).max(50).required(),
  confirmPassWord: Y.string().oneOf([Y.ref("passWord"), null]),
});

function Register() {
  const navigate = useNavigate();

 
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      gender: false,
      passWord: "",
      confirmPassWord: "",
    },

    validationSchema,

   
    onSubmit: (values) => {
     
      const payload = {
        email: values.email,
        password: values.passWord,
        gender: values.gender,
        phone: values.phone,
        name: values.name,
      };

      signUp(payload).then(() => {
        navigate("/login");
      });
    },
  });
 

  console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit} className="px-16 py-16">
      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
           

            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600 text-xl">{formik.errors.email}</p>
          )}

          <label htmlFor="pw">Password</label>
          <Input
            id="pw"
           

            {...formik.getFieldProps("passWord")}
          />

          {formik.touched.passWord && formik.errors.passWord && (
            <p className="text-red-600 text-xl">{formik.errors.passWord}</p>
          )}

          <label htmlFor="cpw">Confirm Password</label>
          <Input
            id="cpw"
           

            {...formik.getFieldProps("confirmPassWord")}

            
          />
          {formik.touched.confirmPassWord && formik.errors.confirmPassWord && (
            <p className="text-red-600 text-xl">
              {formik.errors.confirmPassWord}
            </p>
          )}
       
        </Col>
        <Col lg={12} xs={24}>
          <label htmlFor="name">Name</label>
          <Input id="name" {...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-600 text-xl">{formik.errors.name}</p>
          )}
          <label htmlFor="phone">Phone</label>
          <Input id="phone" {...formik.getFieldProps("phone")} />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-600 text-xl">{formik.errors.phone}</p>
          )}

          <Radio.Group {...formik.getFieldProps("gender")}>
            <Radio value={true}>Male</Radio>
            <Radio value={false}>Female</Radio>
          </Radio.Group>
        </Col>
      </Row>

      <button
        type="submit"
        className="rounded-full bg-indigo-700 text-slate-50 px-[1.1rem]"
      >
        Register
      </button>
    </form>
  );
}

export default Register;
