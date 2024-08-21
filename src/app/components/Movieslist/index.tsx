'use client';

import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import MovieCard from "../MovieCard";
import Movie from "@/app/types/movie";


export default function Movieslist(){
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params:{
                api_key: 'cf9104b4aa46481567ec252a15af7eb4',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
        })
    }
    return(
        <ul className="movies-list">
            {movies.map((movie)=>
            <MovieCard 
            key={movie.id}
            movie={movie}
            />
            )}
        </ul>
    );
}
