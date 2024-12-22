import { useDispatch } from 'react-redux'
import {  updateFilter } from '../features/listing/listingSlice'
import { TJopProps } from '../utils/types'


const Job = ({list}:TJopProps) => {
    const dispatch = useDispatch()

    return (
        <div  className='flex flex-col md:flex-row justify-between md:items-center mb-16 md:mb-6 space-y-8 bg-white p-6 shadow-lg rounded-lg'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-6  md:items-center'>
            <div className='-mt-16 md:mt-0'>
            <img src={list.logo} alt="company logo" />
            </div>

            <div>
            <div className='flex gap-3'>
                <p className='text-DesaturatedDarkCyan font-[500]'>{list.company} </p>
                {list.new && <div className='bg-DesaturatedDarkCyan text-white text-xs px-2 w-10 h-5 flex justify-center items-center rounded-2xl'>NEW!</div>}
                {list.featured && <div className='bg-VeryDarkGrayishCyan text-white rounded-xl text-xs px-2 w-auto h-5 flex justify-center items-center'>FEATURED</div>}
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
}

export default Job