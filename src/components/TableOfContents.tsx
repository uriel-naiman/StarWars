import React from 'react';
import Logo from './Logo';
import { MovieData } from './types';

interface Props {
    movies: MovieData[];
    count: number | undefined;
    handleOnClick: any;
    currentMovieId: number;
}

const TableOfContents = ({movies, 
                          count, 
                          handleOnClick,
                          currentMovieId}: Props) => {
    
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
                                  className="m-1 mb-auto"
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