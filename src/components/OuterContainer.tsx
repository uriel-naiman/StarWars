import { useEffect, useState } from 'react';
import { getMovies } from '../lib/movieApi';
import BodyContainer from './BodyContainer';
import TableOfContents from './TableOfContents';
import { APIResponse, MovieData } from './types';
import styles from './styles.module.css';
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

    const handleOnSaveClick = async(id: number) => {
        setSavedMovieId(id);
        await localforage.setItem( movieIdKey, id, (err)=>{
            if(err) window.alert(err.message);
          });
    }

    return (
        <div className={`${styles.container} d-flex`}>
            <TableOfContents 
                movies= {moviesArray} 
                count= {numOfMovies} 
                setMovie={(movie: MovieData) => setCurrentMovie(movie)}
                currentMovieId={currentMovie ? currentMovie.episode_id : 7}
                />
           <BodyContainer 
                currentMovie={currentMovie}
                handleOnClick={handleOnSaveClick}
                savedMovieId={savedMovieId}
            />
        </div>
    )
}

export default OuterContainer;

