# Todo app - React client

create new project from a template:

```
npm create vite
```

add bootstrap:
```
npm i bootstrap
```

in index.js:
```javascript
import "bootstrap/dist/css/bootstrap.css"
```

create .env file:

```
VITE_API_URL=http://localhost:3000
```

now your service can use the environment variable `VITE_API_URL` to access the API.

```javascript
class TodoService {
  http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });
```