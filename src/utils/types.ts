export type Tjob = {
    id: number,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages:  string[],
    tools: string[ ]
}

export type TListingState = {
    allListing: Tjob[]
    filteredListing: Tjob[]
    filters: string[]
}

export type TStore = {
    listing: TListingState
}

export type TJopProps = {
    list: Tjob
}