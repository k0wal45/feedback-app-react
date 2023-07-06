import CountryCard from "../components/CountryCard"
import SearchBar from '../components/SearchBar'

function Home() {
    

  return (
    <main className="pt-28 flex flex-col w-full justify-center items-center bg-very-dark-blue">       
            <SearchBar />
        <div className="flex justify-center flex-wrap gap-8 p-4 w-full">
            <CountryCard />
        </div>
    </main>
  )
}

export default Home
