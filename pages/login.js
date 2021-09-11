import * as React from "react";

import { Layout } from "../components/layout";
import { Form } from "../components/form";

const Login = () => {
  return (
    <Layout title="Login">
      <Form>
        <label>
          <p>Email Address</p>
          <input placeholder="Email Address" type="email" />
        </label>
        <label>
          <p>Password</p>
          <input placeholder="Password" type="password" />
        </label>
        <label>
          <input type="submit" value="Login" />
        </label>
      </Form>
    </Layout>
  )
}

export default Login;
