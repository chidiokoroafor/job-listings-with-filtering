import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterList } from './features/listing/listingSlice'
import FilterPannel from './components/FilterPannel'
import JobList from './components/JobList'
import { TStore } from './utils/types'

function App() {
  const { filters} = useSelector((store:TStore)=>store.listing)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterList())
  },[filters])

  return (
    <main className="w-full min-h-screen bg-LightGrayishCyan font-LeagueSpartan">
      <div className="h-[20vh] w-full bg-BgHeaderMobile md:bg-BgHeaderDesktop bg-no-repeat bg-cover bg-DesaturatedDarkCyan"></div>

      {filters.length > 0 && <FilterPannel />}

      <JobList />
      
    </main>
  )
}

export default App
