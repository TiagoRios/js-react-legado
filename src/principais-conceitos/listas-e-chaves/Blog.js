import React, { Fragment } from "react"

export default function Blog(props) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        posts={props.posts}
        styles={{
          border: '2px solid yellow',
          height: "auto"
        }}
      />

      <MainContent>
        <h1 style={{ border: "2px solid orange", textAlign: 'center', margin: "15px" }}>
          Documentação React
        </h1>

        <Content
          posts={props.posts}
          styles={{
            border: "2px solid white",
            margin: "15px"
          }}
        />
      </MainContent>

      <Sidebar
        posts={props.posts}
        styles={{
          border: '2px solid blue',
        }}
      />

    </div>
  );
}

function Sidebar({ posts, styles }) {
  return (
    <div style={styles}>
      <ul>
        {
          posts.map(post =>
            <li key={post.id}>
              {post.title}
            </li>
          )
        }
      </ul>
    </div>
  )
}

function MainContent({ children }) {
  return (
    <div style={{ border: "2px solid lightgreen", margin: "0 5px" }}>
      {children}
    </div>
  )
}

function Content({ posts, styles }) {
  return (
    <div style={styles}>
      {
        posts.map(post =>
          <Fragment key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Fragment>
        )
      }
    </div>
  )
}