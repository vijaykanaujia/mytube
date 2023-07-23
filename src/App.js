import { Provider } from "react-redux";
import "./App.css";
import store from "./Utils/store";
import Body from "./components/Body";
import Head from "./components/Head";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainConatainer from "./components/MainConatainer";
import WatchPage from "./components/WatchPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainConatainer /> },
      { path: "/watch", element: <WatchPage /> },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App p-2">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
