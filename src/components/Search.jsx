import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function Search(props) {

  // Destructuring filterFood function
  const {filterFood} = props;

  // Searched input element state
  const [searchInput, setSearchInput] = useState('');
  
  // Handle search by user
  const handleChange = (event) => {
    setSearchInput(event.target.value)
    filterFood(event.target.value)
  }

  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor='query'>Search</label>
      <Input value={searchInput} type="text" name="query" onChange={handleChange} />
    </>
  )
}

export default Search