import Logo from './Logo';
import { MovieData } from './types';
import styles from './styles.module.css';

interface Props {
    movies: MovieData[];
    count: number | undefined;
    setMovie: any;
    currentMovieId: number;
}

const TableOfContents = ({movies, 
                          count, 
                          setMovie,
                          currentMovieId}: Props) => {

    return (
        <div 
            className="d-flex flex-column align-content-center p-2"
            style={{minWidth: '220px'}} 
        >
            <Logo numOfMovies={count} />
            <div className="d-flex flex-column ">
                {movies.map((movie) => {
                    return (
                        <div key = {movie.episode_id} 
                                  onClick={() => setMovie(movie)}
                                  className={ (currentMovieId === movie.episode_id) ? `${styles.current} mt-2 p-2 text-center`: `${styles.clickable} mt-2 p-2 text-center border`}
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