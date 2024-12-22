import { useSelector } from "react-redux"

import Job from "./Job"
import { TStore } from "../utils/types"

const JobList = () => {
    const { filteredListing } = useSelector((store:TStore) => store.listing)
   

  return (
    <div className="py-14 w-[95%] max-w-[80%] mx-auto ">
        {
          filteredListing.map((list) => {
            return (
              <Job key={list.id} list={list} />
            )
          })
          }
      </div>
  )
}

export default JobList