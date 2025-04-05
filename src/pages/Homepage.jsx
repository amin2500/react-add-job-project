import Navbar from "../componets/Navbar"
import Hero from "../componets/Hero"
import HomeCards from "../componets/HomeCards"
import JobListings from "../componets/JobListings"
import ViewAllJobs from "../componets/ViewAllJobs"

const Homepage = () => {
  return (
    <>
     
      <Hero/>
      <HomeCards/>
     <JobListings ishome={true}/>
     <ViewAllJobs/>
    </>
  )
}

export default Homepage
