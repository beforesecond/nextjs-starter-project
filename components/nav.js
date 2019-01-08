import React, { Component } from 'react'
import Link from 'next/link'
import { fetchPosts } from '../actions/todo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

class Nav extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link prefetch href="/">
              <a>Home</a>
            </Link>
          </li>
          <ul>
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>

        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          nav {
            text-align: center;
          }
          ul {
            display: flex;
            justify-content: space-between;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 8px;
          }
          a {
            color: #067df7;
            text-decoration: none;
            font-size: 13px;
          }
        `}</style>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: bindActionCreators(fetchPosts, dispatch)
})
export default connect(
  null,
  mapDispatchToProps
)(Nav)
