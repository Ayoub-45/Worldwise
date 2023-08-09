import styles from "./CountryList.module.css"
import Message from "./Message"
import Spinner from "./Spinner"
import CountryItem from "./CountryItem"
export default function CityList({cities,isLoading}){
    if(isLoading) return <Spinner/>
    const countries=cities.reduce((arr,city)=> 
        {
            if(!arr.map(el=>el.country).includes(city.country))
            return [...arr,{country:city.country,emoji:city.emoji}]
            else return arr
        },[])
    if(!countries.length) return <Message message="Add your first city by clicking on a city on the map"/>
    return(
        <ul className={styles.countryList}>
            {countries.map(country=>{
                return <CountryItem  country={country}/>
            })}
        </ul>
    )
}