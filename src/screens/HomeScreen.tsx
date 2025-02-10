
import MapView from '../components/MapView'
import BtnMyLocation from '../components/BtnMyLocation'
import ReactLogo from '../components/ReactLogo'
import SearchBar from '../components/SearchBar'

const HomeScreen = () => {
  return (
    <div>
        <MapView/>
        <SearchBar/>
        <BtnMyLocation/>
        <ReactLogo/>
    </div>
  )
}

export default HomeScreen
