import React, { FC } from 'react'
import './Search.scss'

interface SearchTypes {
  handleSearch: Function
}

const Search:FC<SearchTypes> = ({ handleSearch }) => {
  return (
        <div className="search d-flex justify-content-between align-items-center">
          <span><i className="fas fa-spinner"></i></span>
            <input onChange={(e:any) => handleSearch(e.target.value)} className="search_input" type="text" name="search" id="search" placeholder="Search with keywords..." aria-label="Search Here" />
        </div>
  )
}

export default Search;
