import React from 'react'

import Link from '../../components/Link'
import Heading from '../../components/Heading'

import './styles.css'

const Introduction = () => (
  <section>
  <Heading size="normal">
    Hi, I'm Jonas <br /> I love to build amazing apps.
  </Heading>
  <div className="introduction__description">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed
      cumque deserunt soluta accusantium recusandae?
    </p>
  </div>
  <Link link="mailto:portifolio@teste.com" title="Work With Me" />
</section>
)

export default Introduction