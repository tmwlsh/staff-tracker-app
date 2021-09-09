import React, { useState } from "react";

import * as styles from "./styles.module.scss";

import * as data from "../../data/index.json";

const CreateScheduleBlock = () => {

  const createSchedule = (e) => {
    alert("Create Schedule")
  }

  const saveAsTemplate = (e) => {
    alert("Save As Template")
  }

  return (
    <div className={styles.createSchedule}>
      <form className={styles.createScheduleForm}>

        <label className={styles.scheduleFormLabel}>
          <span>Date</span>
          <div className={styles.scheduleSlotRow}>
            <input type="text" placeholder="Date. eg. 09/10/2021" />
          </div>
        </label>

        {  }

        <label className={styles.scheduleFormLabel}>
          <span>Schedule Slot</span>
          <div className={styles.scheduleSlotRow}>
            <input type="text" placeholder="Location. eg. Kitchen / Vehicle 2 / Leeds Office" />
            <select>
              <option disabled selected="selected">Staff Member</option>
              {data.staff.map(item => (
                <option>{item.name}</option>
              ))}
            </select>
          </div>
        </label>


        <div className={styles.formOptions}>
          <p>Add Schedule Slot</p>
          <p onClick={(e) => createSchedule(e)}>Create Schedule</p>
          <p onClick={(e) => saveAsTemplate(e)}>Save as Template</p>
        </div>

      </form>
    </div>
  )
}

export { CreateScheduleBlock };