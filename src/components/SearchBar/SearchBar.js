import React from 'react'
import './SearchBar.css'
// import Button from '../UI/Button'
// import { useSelector } from 'react-redux'
const SearchBar = () => {
  // const {data} = useSelector(( e ) => (e.contact));
  // const [searchVal, setSearchVal] = useState('')
  // const handleSearch = (e) => {
  //   e.preventDefault()

  //   console.log(data)
  // }

  return (
    <div className='horizontal-nav'>
      <div className='profile'>
        <h2>Car Rent</h2>
      </div>
      {/* <form className='search-box' onSubmit={handleSearch}>
        <input type='text' placeholder='Who are you looking for?'
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value)
          }} />
        <Button name='Search' />
      </form> */}
    </div>
  )
}

export default SearchBar