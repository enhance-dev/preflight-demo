export default function MyHeader({ html, state }) {
  const { attrs = {} } = state
  const { title = 'default title' } = attrs
  return html`
<style>
  :host {
    display: block;
  }
  :host > header {
    max-width: 30rem; 
  }
  :host > header > h1 {
    display: block;
    margin-block-end: var(--space--3);
  }
  :host > header > nav {
    display: flex;
    justify-content: space-between;
    margin-block-end: var(--space-0);
    border: 1px solid var(--fore);
    border-radius: 2px;
  }

  :host > header > nav > a {
    text-align: center;
    flex-grow: 1;
    padding: var(--space--3);
  }

  :host > header > nav > a:hover {
    background: var(--fore);
    color: var(--back);
  }

  :host > header > nav > a:active {
    background: var(--back);
    color: var(--fore);
  }

</style>
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
