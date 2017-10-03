import React from "react"

export default ({ data }) => {
  console.log(data.allFile.edges)
  return (
      <ul>
          {
            data.allFile.edges.map(({ node },i) => (
                <li key={i}>
                    <a href="">{node.birthTime}</a>
                    <a href="">{node.relativePath}</a>
                    <span>{node.extension}</span>
                </li>
            ))
          }
      </ul>
  )
}

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`