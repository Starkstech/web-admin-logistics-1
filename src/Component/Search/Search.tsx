import React, { FC } from 'react'
import './Search.scss'

const Search:FC = () => {
  return (
        <div className="search d-flex justify-content-between align-items-center">
            <input className="search_input" type="text" name="search" id="search" placeholder="Search" aria-label="Search Here" />
            <button className="search_btn">Search</button>
        </div>
  )
}

export default Search;
