const Filteredcountries = ({filtered,input,search,handlechange}) => {
    const searched = filtered.filter(element => element.country.includes(input) || element.country.toLocaleLowerCase().includes(input))
    return (
      <section>
      <input defaultValue={input} onChange= {handlechange } onClick={() => search()} />
 <ul className="grid">
      {searched.map(element => {
        return (
          <li className="elements flex col" key={element.index}><i className="fa-solid fa-arrow-up-from-bracket absolute" style={{ color: '#4e5665' }}>
            </i><section className="data"><div><h4 className="country">{element.country}</h4>
            </div><article className="flex article"><p>{element.confirmed}</p></article></section></li>
        )
      })}
    </ul>
    </section>
)
}

export default Filteredcountries