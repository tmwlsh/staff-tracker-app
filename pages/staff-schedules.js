import * as React from "react";

import { Layout } from "../components/layout";
import { SchedulesList } from "../components/schedulesList";

const StaffSchedules = () => {
  return (
    <Layout title="Staff Schedules">
      <SchedulesList />
    </Layout>
  )
}

export default StaffSchedules;