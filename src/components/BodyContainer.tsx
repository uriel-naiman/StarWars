import React from 'react';
import { useEffect, useState } from 'react';
import { getMovies } from '../lib/movieApi';
import MovieComponent from './MovieComponent';
import TableOfContents from './TableOfContents';
import { APIResponse, MovieData } from './types';

const BodyContainer = () => {
    const [moviesArray, setMoviesArray] = useState<MovieData[]>([]);
    const [numOfMovies, setNumOfMovies] = useState<number>();
    const [currentMovie, setCurrentMovie] = useState<MovieData>();

    useEffect(() => {
        getMovies().then((response: APIResponse) => {
            setNumOfMovies(response.count);
            setMoviesArray(response.results);
        }).catch((error) => {
            window.alert(error);
        });
    },[])

    const handleOnClick = (movieId:number) => {

    }

    return (
        <div className="d-flex">
            <TableOfContents movies = {moviesArray} count= {numOfMovies} handleOnClick={handleOnClick}/>
            <MovieComponent movieToShow = {currentMovie} />
        </div>
    );
}

export default BodyContainer;
