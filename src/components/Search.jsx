import React, { useState } from 'react'

const Search = () => {

    const [search, setSearch] = useState("zapatos")

    return (
        <div>
            <input type="search" onChange={(e) => {
                console.log(e.target.value)
                setSearch(e.target.value)
            }} value={search} />
        </div>
    )
}

export default Search