import * as React from 'react'
import { Link } from 'gatsby'
import { formatDate } from '../../utils'
import {
  projects,
  each,
  title,
  buttons,
  button,
  small,
} from './post.module.scss'

export default ({ posts }) => (
  <section className={projects}>
    {posts.map(({ node: { frontmatter, timeToRead, fields } }) => {
      const date = formatDate(frontmatter.date)
      const read = `${timeToRead} min read`

      return (
        <Link to={fields.slug} className={each} key={frontmatter.title}>
          <h2>
            <div className={title}>{frontmatter.title}</div>
            <small className={small}>{date}</small>
          </h2>
          <div className={buttons}>
            <span className={button}>{read}</span>
          </div>
        </Link>
      )
    })}
  </section>
)
