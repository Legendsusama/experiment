

import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from '../components/search.svg'
import MovieCard from "./MovieCard";



function App(){

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=e0a204e4';


    const searchMovies = async (title)=>{

        const responce = await fetch(`${API_URL}&s=${title}`);
        const data = await responce.json();
        (data.Search) ? setMovies(data.Search) : setMovies('');

    }


    useEffect(()=>{
        searchMovies("Kung Fu Panda");
    }, []);


    return(

       <div className="app">
            <h1>Movies World</h1>

            <div className="search">

                <input type="text" 
                placeholder="Search For Movies"
                 value={searchTerm} 
                 onChange={(event)=> {setSearchTerm(event.target.value)} }
                 
                 />

                <img src={SearchIcon} 
                alt="search icon"
                onClick={ ()=>{ searchMovies(searchTerm)}} 
                />

            </div>


            {
                movies.length > 0 ? (
                    <div className="container">

                        {movies.map((movie, index)=> (
                            <MovieCard movies={movie} key={index} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }


        </div>




    )
}

export default App;