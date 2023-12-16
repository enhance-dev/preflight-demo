export default function MyHeader({ html, state }) {
  const { attrs = {} } = state
  const { title = 'default title' } = attrs
  return html`
<header>
  <h1>${title}</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/account">Account</a>
  </nav>
</header>
`
}
