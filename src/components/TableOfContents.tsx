import React from 'react';
import Logo from './Logo';
import { MovieData } from './types';
import Nav from 'react-bootstrap/Nav';

interface Props {
    movies: MovieData[];
    count: number | undefined;
    handleOnClick: any;
}

const TableOfContents = ({movies, count, handleOnClick}: Props) => {
    
    return (
        <div>
            <Logo numOfMovies={count}/>
            <Nav className="d-flex flex-column">
                {movies.map((movie) => {
                    return (
                        <Nav.Item as="li" key = {movie.episode_id} onClick={handleOnClick(movie.episode_id)}>
                             {movie.title}
                        </Nav.Item>
                    )
                })}
            </Nav>

            
        </div>
    );
}

export default TableOfContents;
;