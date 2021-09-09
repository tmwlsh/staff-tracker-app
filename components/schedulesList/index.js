import React, { useState } from "react";

import * as styles from "./styles.module.scss";

import * as data from "../../data/index.json";

const SchedulesList = () => {

  const schedules = data.schedules;

  const viewSchedule = (e) => {
    alert("View Schedule")
  }

  const editSchedule = (e) => {
    alert("Edit Schedule")
  }

  const archiveSchedule = (e) => {
    alert("Archive Schedule")
  }

  const unarchiveSchedule = (e) => {
    alert("Unarchive Schedule")
  }

  const list = schedules.map((item, index) => {
    return (
      <li
        key={`${item.date.replace(/\s+/g, '-').toLowerCase()}-${index}`}
        className={item.archived ? styles['archived'] : ''}
      >
        {item.archived ? (
          <div className={styles.archivedSchedule}>
            <p className={styles.archivedScheduleLabel}>Archived</p>
            {item.date}
          </div>
        ) : item.date }
        <span className={styles.listItemOptions}>
          {!item.archived ? (
            <>
              <p onClick={(e) => viewSchedule(e)}>View</p>
              <p onClick={(e) => editSchedule(e)}>Edit</p>
              <p onClick={(e) => archiveSchedule(e)}>Archive</p>
            </>
          ) : (
            <p onClick={(e) => unarchiveSchedule(e)}>Unarchive</p>
          )}
        </span>
        {/* <li key={`${item.name.replace(/\s+/g, '-').toLowerCase()}-${index}`}> */}
      </li>
    )
  })

  return (
    <div className={styles.schedulesList}>
      <ul className={styles.schedulesListItems}>
        {list}
      </ul>
    </div>
  )
}

export { SchedulesList };