import React from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import { MovieData } from './types';

interface Props {
    movieToShow: MovieData | undefined;
    handleOnClick: any;
} 

function MovieComponent({movieToShow, handleOnClick}: Props) {
    
    return (
        <div className="d-flex flex-column align-items-center">
            <Header text={movieToShow ? movieToShow.title : "Choose a movie from the sidebar please"} />
            <div className="mx-auto w-75 text-center align-self-center">
                {movieToShow ? movieToShow.opening_crawl :""}
            </div>
            {movieToShow &&
            <Button 
                variant="primary" 
                size="sm" 
                className="w-25 m-3"
                onClick={handleOnClick(movieToShow.episode_id)}
            >
                Save movie
            </Button>}
        </div>
    );
}

export default MovieComponent;