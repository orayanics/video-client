import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// Import Pages
import Join from "./components/Join";
import Meeting from "./components/Meeting";

// Router Config
const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Join />
    },
    {
      path:'/meeting/:roomid',
      element: <Meeting />
    }
  ]
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;