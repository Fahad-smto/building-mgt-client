import Banner from "../Components/Banner";
import FaqSection from "../Components/FaqSection";
import FeatureHighlights from "../Components/FeatureHighlights";
 
import Welcome from "../Components/Welcome";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <FeatureHighlights></FeatureHighlights>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;