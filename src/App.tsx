import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterList, updateFilter } from './features/listing/listingSlice'
import FilterPannel from './components/FilterPannel'

function App() {
  const {filteredListing, filters} = useSelector((store)=>store.listing)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterList())
    
  },[filters])

  return (
    <main className="w-full min-h-screen bg-LightGrayishCyan font-LeagueSpartan">
      <div className="h-[20vh] w-full bg-BgHeaderMobile md:bg-BgHeaderDesktop bg-no-repeat bg-contain bg-DesaturatedDarkCyan"></div>

      {filters.length > 0 && <FilterPannel />}

      <div className="py-14 w-[95%] max-w-[80%] mx-auto ">
        {
          filteredListing.map((list) => {
            return (
              <div key={list.id} className='flex flex-col md:flex-row justify-between md:items-center mb-16 md:mb-6 space-y-8 bg-white p-6 shadow-lg rounded'>
                <div className='flex flex-col md:flex-row gap-4 md:gap-6  md:items-center'>
                  <div className='-mt-16 md:mt-0'>
                    <img src={list.logo} alt="company logo" />
                  </div>

                  <div>
                    <div className='flex gap-3'>
                      <p className='text-DesaturatedDarkCyan font-[500]'>{list.company} </p>
                      {list.new && <button className='bg-DesaturatedDarkCyan text-white text-xs py-1 px-2 rounded-2xl'>NEW!</button>}
                      {list.featured && <button className='bg-VeryDarkGrayishCyan text-white rounded-xl text-xs py-1 px-2'>FEATURED</button>}
                    </div>
                    <p className='text-VeryDarkGrayishCyan text-lg font-[700] hover:text-DesaturatedDarkCyan cursor-pointer'>{list.position}</p>
                    <div className='text-DarkGrayishCyan flex items-center gap-2 tex-xs'>
                      <span>{list.postedAt }</span>
                      <span>.</span>
                      <span>{list.contract }</span>
                      <span>.</span>
                      <span>{list.location }</span>
                    </div>
                  </div>
                </div>
                <div className='flex gap-6 md:gap-2 flex-wrap'>
                  {
                    [list.role, list.level, ...list.languages, ...list.tools].map((filt,i) => {
                      return (
                        <button onClick={()=>dispatch(updateFilter(filt))} className='text-DesaturatedDarkCyan font-[700] bg-LightGrayishCyan hover:bg-DesaturatedDarkCyan hover:text-white px-2 py-1 rounded' key={i}>{filt }</button>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
          }
      </div>
    </main>
  )
}

export default App
