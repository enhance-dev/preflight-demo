# preflight-demo

This app is a demonstration of the preflight pattern for pre-populating initial application state.
The preflight file needs to be added at the root of your app folder.

```bash
app
├── api ............... data routes
│   └── index.mjs ..... override default preflight application state with api data
└── preflight.mjs ..... pre-populate application state

```

## The preflight file

The preflight file is a function that returns a default state object.
The preflight function is passed the request object enabling you to customize default data per requested route.
API responses are merged with the default state returned from preflight allowing you to override default state with specific API data per requested route.

> app/preflight.mjs

```JavaScript
export default function Preflight ({ req }) {
  return { //...Your data here }
}
```

### Example of setting the page title using preflight

> app/preflight.mjs

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

### Example of overriding default application state from preflight with API response data

> app/preflight.mjs

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
```
> app/api/index.mjs

```JavaScript
export async function get() {
  return {
    json: {
      account: {
        username: 'thisshouldoverride',
        id: '39nr34n2'
      }
    }
  }
}
``
The account object will be overriden.
