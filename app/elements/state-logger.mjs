export default function StateLogger({ html, state }) {
  const { store = {} } = state
  return html`
    <details>
      <summary>State logger</summary>
        <pre>
          ${JSON.stringify(store, null, 2)}
        </pre>
    </details>
  `
}
