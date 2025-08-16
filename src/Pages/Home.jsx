import Banner from "../Components/Banner";
import FaqSection from "../Components/FaqSection";
import FeatureHighlights from "../Components/FeatureHighlights";
import Newsletter from "../Components/Newsletter";
 
import Welcome from "../Components/Welcome";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <FeatureHighlights></FeatureHighlights>
            <FaqSection></FaqSection>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;