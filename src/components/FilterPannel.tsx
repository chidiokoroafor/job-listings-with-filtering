import { useDispatch, useSelector } from "react-redux"
import { removeFilter,clearFilters } from '../features/listing/listingSlice'
import removeIcon from '../assets/images/icon-remove.svg'
import { TStore } from "../utils/types"

const FilterPannel = () => {
    const { filters } = useSelector((store:TStore) => store.listing)
    const dispatch = useDispatch()


  return (
    <div className='w-[95%] max-w-[80%] mx-auto -mt-8'>
          <div className='flex justify-between items-center gap-4 bg-white p-3 shadow-lg rounded'>
        <div className="flex items-center gap-4">
          {
            filters.map((fil) => {
              return <div key={fil} className='flex'>
                <p className='text-DesaturatedDarkCyan font-[700] bg-LightGrayishCyan px-2 py-1 rounded'>{fil}</p> <button className='bg-DesaturatedDarkCyan hover:bg-VeryDarkGrayishCyan text-white px-2 rounded-r-md' onClick={()=>dispatch(removeFilter(fil))}><img src={removeIcon} alt="" /></button>
              </div>
            })
            }
              </div>
              <button onClick={()=>dispatch(clearFilters())} className="text-DesaturatedDarkCyan hover:underline">Clear</button>
        </div>
      </div>
  )
}

export default FilterPannel