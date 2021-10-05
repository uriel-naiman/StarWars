import Header from './Header';
import MovieComponent from './MovieComponent';
import { MovieData } from './types';

interface Props {
    currentMovie: MovieData | undefined;
}
const BodyContainer = ({currentMovie}: Props) => {

    return (
        <div className="d-flex flex-column flex-fill align-content-center">
            <Header 
                text="Choose your favorite Star Wars Movie"
            /> 
            <MovieComponent movieToShow = {currentMovie} />
        </div>
    );
}

export default BodyContainer;
