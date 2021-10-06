import React from 'react';
import Logo from './Logo';
import { MovieData } from './types';
import styles from './styles.module.css';

interface Props {
    movies: MovieData[];
    count: number | undefined;
    handleOnClick: any;
    currentMovieId: number;
    savedMovieId: number;
}

const TableOfContents = ({movies, 
                          count, 
                          handleOnClick,
                          currentMovieId,
                          savedMovieId}: Props) => {
    
    return (
        <div 
            className="d-flex flex-column align-content-center"
            style={{minWidth: '200px'}} 
        >
            <Logo numOfMovies={count} />
            <div className="d-flex flex-column ">
                {movies.map((movie) => {
                    return (
                        <div key = {movie.episode_id} 
                                  onClick={handleOnClick(movie)}
                                  className={`${styles.clickable} mt-2 p-2 text-center border`}
                        >
                             {movie.title}
                        </div>
                    )
                })}
            </div>

            
        </div>
    );
}

export default TableOfContents;
;