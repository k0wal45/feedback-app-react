import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function SearchBar() {

    const [text, setText] = useState('')

    const handleChange = (e) => {
      setText(e.target.value)
    }
 

  return (
    <div className='flex flex-col lg:flex-row justify-between w-3/4 gap-4'>
        <form className="flex justify-start items-center gap-4 p-4 text-white bg-dark-blue rounded-md">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <input type="text" value={text} placeholder="Search for a country..." onChange={handleChange} className="w-72 bg-transparent outline-none border-none"/>
        </form>
        <div>
          <select name="pets" id="pet-select" className="bg-dark-blue p-4 text-white rounded-md">
              <option value="Filter by REgion">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Europa">Europa</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceania</option>
          </select>
        </div>
    </div>
  )
}

export default SearchBar
