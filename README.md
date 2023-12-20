# Full Stack Developer Coding Challenge

## Backend

### Task

Create a GraphQL Service using [Nest.js](https://nestjs.com/) and TypeScript. The service should manage information about clients, with the following attributes:

- **name**
- **product**
- **description**

You should implement functionalities to create and update clients and store then in Postgres (or SQLite)

### Instructions

1. Set up a [Nest.js](https://nestjs.com/) project with TypeScript.
2. Define a GraphQL schema for the "Client" object using the code-first approach.
3. Implement resolvers to handle creating and updating clients.

## Front-end

### Task

Create a [Vite](https://vitejs.dev) React app using TypeScript. Implement the following features:

- A reusable collapsible component that includes a header, description, and main content.
- A home page with a "Create Client" button that redirects to "/client".
- A client form on "/client" using the collapsible component, including all the fields for creating a client.
- Use [react-query](https://tanstack.com/query/latest/) to call the API for creating the client.
- After saving, redirect to "/client/[id]" with the pre-filled form and the ability to update. Disable the button while the form is submitting.

### Instructions

1. Set up a [Vite](https://vitejs.dev) React app with TypeScript.
2. Create a reusable collapsible component.
3. Implement the home page with a "Create Client" button and redirection.
4. Create a client form on "/client" using [react-query](https://tanstack.com/query/latest/) for queries & mutations.
5. Implement client update functionality on "/client/[id]".
6. Disable the form submission button while the form is submitting.

### Bonus

- Use [TailwindCSS](https://tailwindcss.com/) for styling.
- Use [Next.js](https://nextjs.org/)/[Remix](https://remix.run/)/[React Router](https://reactrouter.com/) for routing.
- Make the home page display a list of clients with edit buttons.
