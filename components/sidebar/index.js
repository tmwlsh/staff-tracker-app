import * as React from "react";
import Link from 'next/link';

import * as styles from "./styles.module.scss";

const Sidebar = ({hambOpen}) => {
  const sidebarClasses = [styles.sidebar, hambOpen ? styles['sidebar-open'] : styles['sidebar-closed']];
  return (
    <div className={sidebarClasses.join(" ")}>
      <Link href="/">
        <a className={styles.sidebarTitle}><h1>Staff Tracker</h1></a>
      </Link>
      <ul className={styles.sidebarMenu}>
        <li><Link href="/staff-members"><a>Staff Members</a></Link></li>
        <li><Link href="/staff-schedules"><a>Staff Schedules</a></Link></li>
        <li><Link href="/create-schedule"><a>Create Schedule</a></Link></li>
      </ul>
    </div>
  )
}

export { Sidebar };