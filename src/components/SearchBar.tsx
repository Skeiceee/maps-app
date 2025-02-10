import { ChangeEvent, useContext, useRef } from 'react'
import { PlacesContext } from '../context/places/PlacesContext'
import SearchResults from './SearchResults'

const SearchBar = () => {

    const { searchPlacesbyTerm } = useContext(PlacesContext)
    const debounceRef = useRef<NodeJS.Timeout | null>(null)

    const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;

        if(debounceRef.current){
            clearTimeout(debounceRef.current)
        }
        
        debounceRef.current = setTimeout(() => {
            searchPlacesbyTerm(query)
        }, 1000)
    }

  return (
    <div className='search-container'>
      <input type="text" className='form-control' placeholder='Buscar lugar...'
        onChange={onQueryChange}
      />

      <SearchResults/>
    </div>
  )
}

export default SearchBar