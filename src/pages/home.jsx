import React, { useEffect, useState } from "react"; //importamento de funções da biblioteca do React
import { Container, Grid } from '@mui/material';
import NavBar from '../Components/NavBar';
import PokemonCard from '../Components/PokemonCard';
import axios from "axios";

export const Home = () => {
   const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        getPokemons();
    },[])

    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=50').
            then((res) => setPokemons(res.data.results)).
            catch((err) => console.log(err))
    } //THEN, SE TUDO DER CERTO, RETORNE

    return (
        <div>
            <NavBar />
            <Container maxWidth='false'> <Grid container>
                {pokemons.map((pokemon)=>
                    (<Grid item xs={3}><PokemonCard /></Grid>))}
            </Grid>
            </Container>
        </div>
    )
}