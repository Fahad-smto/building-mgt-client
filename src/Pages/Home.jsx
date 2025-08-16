import Banner from "../Components/Banner";
import FaqSection from "../Components/FaqSection";
import FeaturedProducts from "../Components/FeaturedProducts";
import FeatureHighlights from "../Components/FeatureHighlights";
import HighlightsNearby from "../Components/HighlightsNearby";
import Newsletter from "../Components/Newsletter";
import ScheduleVisit from "../Components/ScheduleVisit";

import Welcome from "../Components/Welcome";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <FeaturedProducts></FeaturedProducts>
            <HighlightsNearby></HighlightsNearby>
            <FeatureHighlights></FeatureHighlights>
            <ScheduleVisit></ScheduleVisit>
            <FaqSection></FaqSection>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;