import React from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import { MovieData } from './types';

interface Props {
    movieToShow: MovieData | undefined;
} 

function MovieComponent({movieToShow}: Props) {
    
    return (
        <div>
            <Header text="Name of Movie" />
            <div>
                {movieToShow}
            </div>
            <Button variant="primary" size="lg">
                {}
            </Button>
        </div>
    );
}

export default MovieComponent;