import * as React from "react";

import { Layout } from "../components/layout";
import { StaffList } from "../components/staffList";

const StaffMembers = () => {
  return (
    <Layout title="Staff Members">
      <StaffList />
    </Layout>
  )
}

export default StaffMembers;