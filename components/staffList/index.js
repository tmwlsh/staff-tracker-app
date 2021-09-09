import React, { useState } from "react";

import * as styles from "./styles.module.scss";

import * as data from "../../data/index.json";

const StaffList = () => {

  const [staffList, setStaffList] = useState(data.staff);

  const updateStaffList = (e) => {
    alert("Update Staff Member")
  }

  const deleteStaffMember = (e) => {
    alert("Delete Staff Member")
  }

  const addStaffMember = (e) => {
    alert("Add Staff Member")
  }

  const list = staffList.map((item, index) => {
    return (
      <li key={`${item.name.replace(/\s+/g, '-').toLowerCase()}-${index}`}>
        {item.name}
        <span className={styles.listItemOptions}>
          <p onClick={(e) => updateStaffList(e)}>Edit</p>
          <p onClick={(e) => deleteStaffMember(e)}>Delete</p>
        </span>
      </li>
    )
  })

  return (
    <div className={styles.staffList}>
      <ul className={styles.staffListItems}>
        {list}
      </ul>
      <div onClick={(e) => addStaffMember(e)} className={styles.addStaffMember}>
        Add Staff Member
      </div>
    </div>
  )
}

export { StaffList };