import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'


function CountryPage() {

    const {state: {country}} = useLocation()

    console.log(country)

    const nativeNameKey = Object.keys(country.name.nativeName)[0]
    const nativeName = country.name.nativeName[nativeNameKey]
    
    const currencyKey =  Object.keys(country.currencies)

    const languageKey = Object.keys(country.languages)
    const languageName = country.languages[languageKey]

    const borders = country.borders

    const ifBorders = () => {
        if (borders) {
            return(
                    borders.map((item) => <div className="p-4 py-2 mx-4 bg-dark-blue rounded-md">{item}</div>)
            )
        } return <div className="p-4">No Countries near</div>

    }


    console.log(borders)

   
  return (
    <main className="pt-28 flex flex-col gap-8 w-screen min-h-[100vh] p-4 lg:p-16 bg-very-dark-blue">
        <Link to='/' className="grid place-items-center bg-dark-blue p-4 rounded-full aspect-square shadow-inner w-min">
            <FontAwesomeIcon icon={faArrowLeft} className="text-white "/>
        </Link>
        
        <section className="flex flex-col md:flex-row justify-between text-white gap-12">
            <img src={country.flags.png} alt="Flag"  className="w-full flex-1 flex-shrink"/>
            <div className="flex flex-col gap-4 flex-1">
                <h2 className="text-6xl font-bold">{country.name.official}</h2>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <li>
                        <span className="font-bold">Native Name: </span>
                        {nativeName.official}
                    </li>
                    <li>
                        <span className="font-bold">Top Level Domain: </span>
                        {country.tld[0]}
                    </li>
                    <li>
                        <span className="font-bold">Population: </span>
                        {country.population}
                    </li>
                    <li>
                        <span className="font-bold">Cuerrencies: </span>
                        {currencyKey[0]}

                    </li>
                    <li>
                        <span className="font-bold">Region: </span>
                        {country.region}
                    </li>
                    <li>
                        <span className="font-bold">Languages: </span>
                        {`${languageKey[0].toUpperCase()} ${languageName}`}

                    </li>
                    <li>
                        <span className="font-bold">Sub Region: </span>
                        {country.subregion}
                    </li>
                    <li>
                        <span className="font-bold">Capital: </span>
                        {country.capital}
                    </li>

                </ul>

                <div className="flex flex-wrap mt-10 justify-start items-center">
                    <span className="font-bold">Border Countries</span>
                    {
                        ifBorders()
                    }
                </div>
            </div>
        </section>
    </main>

  )
}

export default CountryPage
