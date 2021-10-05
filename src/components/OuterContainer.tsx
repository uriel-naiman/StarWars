import React, { useEffect, useState } from 'react';
import { getMovies } from '../lib/movieApi';
import BodyContainer from './BodyContainer';
import TableOfContents from './TableOfContents';
import { APIResponse, MovieData } from './types';

const OuterContainer = () => {

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

    const handleOnClick = (movie: MovieData) => {
        setCurrentMovie(movie);
    }
    return (
        <div className="d-flex">
            <TableOfContents 
                movies= {moviesArray} 
                count= {numOfMovies} 
                handleOnClick={handleOnClick}
                currentMovieId={currentMovie ? currentMovie.episode_id : 0}
            />
           <BodyContainer currentMovie={currentMovie}/>
        </div>
    )
}

export default OuterContainer;

