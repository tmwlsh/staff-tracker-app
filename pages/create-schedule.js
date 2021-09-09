import * as React from "react";

import { Layout } from "../components/layout";
import { CreateScheduleBlock } from "../components/createSchedule";

const CreateSchedule = () => {
  return (
    <Layout title="Create Schedule">
      <CreateScheduleBlock />
    </Layout>
  )
}

export default CreateSchedule;