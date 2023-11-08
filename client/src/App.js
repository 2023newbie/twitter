import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/', element: <Login />, errorElement: <Error />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
