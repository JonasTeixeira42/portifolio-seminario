import React from 'react'
import cx from 'classnames'

import './styles.css'

const Heading = ({ lineBottom = false, children, size = 'normal', id = '' }) => (
  <div className={cx({ 'heading--bottom': lineBottom })}>
    <h2 id={id} className={cx({ [size]: true, 'line--bottom': lineBottom })}>
      {children}
    </h2>
  </div>
)

export default Heading