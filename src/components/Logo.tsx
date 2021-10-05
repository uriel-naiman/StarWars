// eslint-disable-next-line import/no-webpack-loader-syntax
import LogoSVG from "-!svg-react-loader!.././images/logo.svg";

interface Props {
    numOfMovies: number | undefined;
}

const Logo = ({numOfMovies}: Props) => {
    return (
        <div>
            <LogoSVG />
            <div>
                {`${numOfMovies} movies:`}
            </div>
        </div>
    );
}

export default Logo;
