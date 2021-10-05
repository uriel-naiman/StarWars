import React from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import { MovieData } from './types';

interface Props {
    movieToShow: MovieData | undefined;
} 

function MovieComponent({movieToShow}: Props) {
    
    return (
        <div className="align-self-center">
            <Header text={movieToShow ? movieToShow.title : "Choose a movie from the sidebar please"} />
            <div>
                {movieToShow ? movieToShow.opening_crawl :""}
            </div>
            {movieToShow &&
            <Button variant="primary" size="lg">
                Save movie
            </Button>}
        </div>
    );
}

export default MovieComponent;