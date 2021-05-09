import React from 'react'

export default function SearchBox(props) {
  return (
    <div className='col col-sm-4'>
      <input 
        className="form-control" 
        placeholder="Search Movies Here" 
        type="text" 
        onChange={(event) => props.setSearchValue(event.target.value)}
        value={props.value}
      />
    </div>
  )
}
