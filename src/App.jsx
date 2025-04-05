import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Homepage from "./pages/Homepage"
import NotFoundPage from "./pages/NotFoundPage"
import MainLayouts from "./Layouts/MainLayouts"
import Jobpage from "./pages/Jobpage"

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayouts/>}>

   <Route path="https://amin2500.github.io/react-add-job-project/" element={<Homepage/>}/>
   <Route path="https://amin2500.github.io/react-add-job-project/jobs" element={<Jobpage/>}/>
   <Route path="*" element={<NotFoundPage/>}/>

   </Route>
  ))

  return (<RouterProvider router={router}/>)
}

export default App
