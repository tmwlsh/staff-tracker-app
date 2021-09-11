import * as React from "react";

import * as styles from "./styles.module.scss";

const Form = ({children}) => {

  return (
    <div className={styles.formOuter}>
      <form>
        {children}
      </form>
    </div>
  )
}

export { Form };
