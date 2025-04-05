import { useState } from "react"
import { FaMapMarkerAlt } from "react-icons/fa";
import {Link} from "react-router-dom"

const Joblisting = ({job}) => {
    const [show,setshow] = useState(false)
    let description = job.description

    if(!show){
        description = description.substring(0,140) + '...'
    }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
              </div>

              <div className="mb-5">
              {description}
              </div>
              <button onClick={() => setshow((prevstate) => !prevstate)} className="text-indigo-600 hover:text-indigo-200 mb-2">{show ? "Less" : "More"}</button>

              <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarkerAlt className="inline mb-1 mr-1"/>
                 {job.location}
                </div>
                <Link
                  to="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
          </div>
  )
}

export default Joblisting
