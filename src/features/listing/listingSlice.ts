import { createSlice } from '@reduxjs/toolkit';
import listings from '../../data.json'

const initialState = {
    allListing: listings,
    filteredListing: [],
    filters:[]
 
};

const listingSlice = createSlice({
  name: 'listing',
    initialState,
    reducers: {
        filterList: (state) => {
            if (state.filters.length > 0) {
                state.filters.forEach(fil => {
                state.filteredListing = state.allListing.filter((list) => {
                    return fil == list.role || fil == list.level || list.languages.includes(fil) || list.tools.includes(fil)
                })
                })
                
            } else {
                state.filteredListing = state.allListing
            }
        },
        updateFilter: (state, { payload }) => {
            state.filters.push(payload)
        },
        removeFilter: (state, { payload }) => {
            state.filters = state.filters.filter((fil) => {
               return fil != payload
            })
        },
        clearFilters: (state) => {
            state.filters = []
        }
    }
});

export const {filterList,updateFilter,removeFilter,clearFilters} = listingSlice.actions
export default listingSlice.reducer;








