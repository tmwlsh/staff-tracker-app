import * as React from "react";

import { Layout } from "../components/layout";
import { Form } from "../components/form";

const Login = () => {
  return (
    <Layout title="Signup">
      <Form>
        <label>
          <p>Email Address</p>
          <input placeholder="Emaill Address" type="email" />
        </label>
        <label>
          <p>Password</p>
          <input placeholder="Password" type="password" />
        </label>
        <label>
          <p>Repeat Password</p>
          <input placeholder="Password" type="password" />
        </label>
        <label>
          <input type="submit" value="Signup" />
        </label>
      </Form>
    </Layout>
  )
}

export default Login;
