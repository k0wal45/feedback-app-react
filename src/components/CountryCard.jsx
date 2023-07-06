import Response from "../Response"

import { useNavigate } from "react-router-dom"

function CountryCard() {
    const data = Response()

    const navigation = useNavigate()

    const navigateParams = (itemParam) => {
        const endpoint = itemParam.name.common.replaceAll(" ", "-").toLowerCase()
        navigation(`/${endpoint}`, {state: { country: itemParam } })


        // navigation('/about', {state:{id: 1}})

    }


    return (
        data.map((item)=>(
            
           
              <li key={item.name.common} className="flex flex-col w-72 bg-dark-blue" 
              onClick={() => navigateParams(item)}
              >

                  <img src={item.flags.png} alt="flag" className="w-full"/>
                  <div className="flex flex-col p-4 gap-4 text-white">
                      <h2 className="font-bold">{item.name.official}</h2>
                      <ul>
                          <li>
                              <span className="font-bold">Population: </span>
                              {item.population}
                          </li>
                          <li>
                              <span className="font-bold">Region: </span>
                              {item.region}
                          </li>
                          <li>
                              <span className="font-bold">Capital: </span>
                              {item.capital}
                          </li>
      
                      </ul>
                  </div>

              </li>
              )
          )
      )
        

  
}

export default CountryCard
