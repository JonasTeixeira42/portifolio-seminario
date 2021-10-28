import React from 'react'
import cx from 'classnames'

import './styles.css'

const Heading = (props) => (
  <div className={cx({ 'heading--bottom': props.lineBottom })}>
    <h2 id={props.id} className={cx({ [props.size]: true, 'line--bottom': props.lineBottom })}>
      {props.children}
    </h2>
  </div>
)

export default Heading