// eslint-disable-next-line import/no-webpack-loader-syntax
import LogoSVG from "-!svg-react-loader!.././images/logo.svg";

interface Props {
    numOfMovies: number | undefined;
}

const Logo = ({numOfMovies}: Props) => {
    return (
        <div className="m-2 align-self-center border-bottom ">
            <LogoSVG />
            <div className="m-2 align-self-center">
                {`${numOfMovies} movies:`}
            </div>
        </div>
    );
}

export default Logo;
