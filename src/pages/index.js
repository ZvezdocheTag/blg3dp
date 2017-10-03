import React from 'react'
import Link from 'gatsby-link'

class Counter extends React.Component {
  render() {
    return <div>Hello Class Component</div>
  }
}

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>
    {data.site.siteMetadata.title}
    </h3>
    <Counter />
    <Link to="/page-2/">Go to page 2</Link>
    <h3>some text</h3>
    <Link to="/page-3/">Go to page 2</Link>
    <h3>some text</h3>
    <Link to="/my-files/">my files</Link>
  </div>
)

export default IndexPage
export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`
