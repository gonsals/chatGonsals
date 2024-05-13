import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { LoadingContainer } from "./LoadingPage.styles";

const LoadingPage = () => {
    return (
        <LoadingContainer>
            <ClimbingBoxLoader color="#3E3C61" size={25} speedMultiplier={2} />
        </LoadingContainer>
    );
};

export default LoadingPage;
