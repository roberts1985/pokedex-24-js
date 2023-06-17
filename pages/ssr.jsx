import PokemonCard from "@/components/pokemon-card"
import { useEffect, useState } from "react"

export default function Home(props) {
  

 
  return (
    <>
      <header className="p-10">
          <img 
          className="mx-auto"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"/>
      </header>
      <section className="grid grid-cols-2 md:grid-cols-6 gap-5 p-10">
        {
          props.pokemonList.map(pokemon =>{
            return <PokemonCard key={pokemon.url} url={pokemon.url}/>
          })
        }
      </section>
    </>
  )
}

export async function getServerSideProps() {
    console.log('Hola desde el server')
    const pokemonList = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => res.json())
      .then((res)=>res.results)
    
    console.log("pokemontList: ",pokemonList)
    return {
        props: {
            pokemonList,
        },
    }
}