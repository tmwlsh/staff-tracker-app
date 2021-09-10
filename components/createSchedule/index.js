import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

import * as styles from "./styles.module.scss";

import * as data from "../../data/index.json";

const CreateScheduleBlock = () => {

  const [rows, setRows] = useState([uuidv4()]);

  const addScheduleRow = (e) => {
    e.preventDefault();
    // Merge current rows with new one
    setRows([...rows, uuidv4()])
  }

  const createSchedule = (e) => {
    alert("Create Schedule")
  }

  const saveAsTemplate = (e) => {
    alert("Save As Template")
  }

  const deleteScheduleRow = (e, rowId) => {
    // https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value#answer-20827100
    const filteredRows = rows.filter(row => row !== rowId)
    setRows(filteredRows)
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

        <label className={styles.scheduleFormLabel}>
          <span>Schedule Slots</span>
          {rows.map((rowId) => {
            return (
              <div key={rowId} className={styles.scheduleSlotRow}>
                <input type="text" placeholder="Location. eg. Kitchen / Vehicle 2 / Leeds Office" />
                <select>
                  <option disabled selected="selected">Staff Member</option>
                  {data.staff.map((item, index) => (
                    <option key={`${item.name.replace(/\s+/g, '-').toLowerCase()}-${index}`}>{item.name}</option>
                  ))}
                </select>
                <div onClick={(e) => deleteScheduleRow(e, rowId)} className={styles.deleteScheduleSlotRow} />
              </div>
            )
          })}
        </label>

        <div className={styles.formOptions}>
          <p onClick={(e) => addScheduleRow(e)}>Add Schedule Slot</p>
          <p onClick={(e) => createSchedule(e)}>Create Schedule</p>
          <p onClick={(e) => saveAsTemplate(e)}>Save as Template</p>
        </div>

      </form>
    </div>
  )
}

export { CreateScheduleBlock };