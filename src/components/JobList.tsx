import { useSelector } from "react-redux"

import Job from "./Job"
import { TStore } from "../utils/types"

const JobList = () => {
    const { filteredListing } = useSelector((store:TStore) => store.listing)
   

  return (
    <div className="py-14 w-[95%] max-w-[80%] mx-auto [&>*:nth-child(-n+2)]:border-l-4 [&>*:nth-child(-n+2)]:border-l-DesaturatedDarkCyan ">
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