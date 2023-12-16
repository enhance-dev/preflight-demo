# preflight-demo

This app is a demonstration of the preflight pattern for pre-populating initial application state.
This pattern is useful for setting up application state based on incoming requests as well as passing default state modules may need.

```bash
app
├── api ............... data routes
│   └── index.mjs
├── browser ........... browser JavaScript
│   └── index.mjs
├── components ........ single file web components
│   └── my-card.mjs
├── elements .......... custom element templates
│   └── my-header.mjs
├── pages ............. file-based routing
│   └── index.html
├── head.mjs .......... custom <head> component
└── preflight.mjs ..... pre-populate application state

```

## The preflight file

The preflight file is passed the request Object enabling you to update the application state based on the route requested.

```JavaScript
export default function Preflight ({ req }) {
  return { //...Your data here }
}
```

### Example of setting the page title using preflight

```JavaScript
export default function Preflight ({ req }) {
  return {
    pageTitle: getPageTitle(req.path),
    account: {
      username: 'bobsyouruncle',
      id: '23jk24h24'
    }
  }
}

function getPageTitle (path) {
  const titleMap = {
    '/': 'Home',
    '/about': 'About',
    '/account': 'My Account'
  }

  return titleMap[path] || 'My App Name'
}
```
