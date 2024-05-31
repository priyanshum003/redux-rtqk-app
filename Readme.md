# Redux with RTK Query Example

This project is a simple example demonstrating the use of Redux Toolkit with RTK Query for state management and API interaction.

## Description

This project was created for learning purposes to explore Redux Toolkit (with a focus on RTK Query) for state management in a React application. The server component provides a basic API for adding, deleting, and retrieving items.

## Features

- Utilizes Redux Toolkit for state management.
- Implements RTK Query for making API requests.
- Allows adding and deleting items.

## Server

The server component provides a basic RESTful API for managing items. It includes endpoints for adding, deleting, and retrieving items.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/priyanshum003/redux-rtqk-app
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:5173/](http://localhost:5173) to view the application.

## Folder Structure

```
src/
├── components/          # React components
├── store/               # Redux store setup and API slice
│   ├── itemsApi.js      # RTK Query API slice
│   └── store.js         # Redux store configuration
└── App.jsx              # Main component
```

## Built With

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

## Author

[Priyanshu Mishra](https://github.com/priyanshum003)

## License

This project is licensed under the MIT License.