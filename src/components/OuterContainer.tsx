import React, { useEffect, useState } from 'react';
import { getMovies } from '../lib/movieApi';
import BodyContainer from './BodyContainer';
import TableOfContents from './TableOfContents';
import { APIResponse, MovieData } from './types';
import localforage from 'localforage';
localforage.config();


const OuterContainer = () => {

    const [moviesArray, setMoviesArray] = useState<MovieData[]>([]);
    const [numOfMovies, setNumOfMovies] = useState<number>();
    const [currentMovie, setCurrentMovie] = useState<MovieData>();
    const [savedMovieId, setSavedMovieId] = useState<number>(0);

    const movieIdKey = 'movieId';

    useEffect(() => {
        getMovies().then((response: APIResponse) => {
            setNumOfMovies(response.count);
            setMoviesArray(response.results);
            localforage.getItem(movieIdKey)
                .then(id => {
                    if (id) setSavedMovieId(id as number);
                });
        }).catch((error) => {
            window.alert(error);
        });
    },[])

    const handleOnTocClick = (movie: MovieData) => {
        setCurrentMovie(movie);
    }

    const handleOnSaveClick = async(movieId: number) => {
        setSavedMovieId(movieId);
        await localforage.setItem( movieIdKey, movieId, (err)=>{
            if(err) window.alert(err.message);
          });
    }

    return (
        <div className="d-flex">
            <TableOfContents 
                movies= {moviesArray} 
                count= {numOfMovies} 
                handleOnClick={handleOnTocClick}
                currentMovieId={currentMovie ? currentMovie.episode_id : 0}
                savedMovieId={savedMovieId}
            />
           <BodyContainer 
                currentMovie={currentMovie}
                handleOnClick={handleOnSaveClick}
            />
        </div>
    )
}

export default OuterContainer;

