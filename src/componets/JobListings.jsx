import { useState, useEffect } from "react"
import Joblisting from "./Joblisting"
import Spinner from "./Spinner"


const JobListings = ({ishome=false}) => {

   const [jobs,setjobs] = useState([])
   const [loading,setloading] = useState(true)

   useEffect(()=>{
    const fetchJobs = async()=>{
      const apiURL = ishome ? "/api/posts?_limit=3" : "/api/posts"
      
     try{
      const res = await fetch(apiURL)
      const data = await res.json()
      setjobs(data)
     }
     catch(error){
      console.log('Error: error Fetching data')
     }
     finally{
    {!ishome ? setTimeout(()=>{
      setloading(false)
    },4000) : setloading(false)}  
      
     }
      
    }
    fetchJobs()
   },[])

  return (
    
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {(ishome ? "Recent jobs" : "Browse All Jobs")}
        </h2>
        
          {loading ? <Spinner/> :(<div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {jobs.map((job)=>(
            <Joblisting key={job.id} job={job}/>
          ))}</div>)}
         
        
         
        
      </div>
    </section>
  )
}

export default JobListings
