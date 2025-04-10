import { FaRegFaceGrinBeamSweat } from "react-icons/fa6";
import {Link} from "react-router-dom"

const NotFoundPage = () => {
  return (
    <section class="text-center flex flex-col justify-center items-center h-96">
   <FaRegFaceGrinBeamSweat className="text-green-700 text-5xl"/>
   
    <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
    <p class="text-xl mb-5">This page does not exist</p>
    <Link
      to="/indexs"
      class="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >Go Back</Link>
  </section>
  )
}

export default NotFoundPage
