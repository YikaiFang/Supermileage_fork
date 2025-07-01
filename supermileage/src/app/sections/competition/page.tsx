import Footer from "tsx/Footer";
import Navbar from "tsx/Navbar";
import Results from "app/sections/competition/Results";
import Title from "tsx/Title";

export default function Competition() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Title imageSrcPath="/media/images/comp.jpg" name="Competition" />
            <section className="bg-white page-section pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="section-heading text-uppercase pt-12 mb-6">Competitions</h2>
                        </div>
                    </div>
                    <div className="row mb-8">
                        <div className="col-md-8 mx-auto">
                            <h4 className="text-heading mb-3">Shell Eco-Marathon Americas</h4>
                            <p className="text-muted mb-0">
                                The Shell Eco-marathon Americas competition takes place annually in
                                varying locations year-after-year. The competition was held in
                                Detroit, Michigan from 2015 to 2017 and in Sonoma, California from
                                2018 to 2019. Roughly 100 teams from Canada, the United States,
                                Central America, and South America gather to put their vehicles to an
                                efficiency marathon. All three vehicles have competed in the
                                Shell Eco-marathon Americas, with the gasoline Prototype winning 2nd place in
                                2019 with 1372 miles per gallon. Our Urban Concept won second place in 2015
                                with 325 miles per gallon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="my-16" />
            <Results />
            <div className="my-16" />
            {/* Past Events Section */}
            <section className="bg-white page-section pt-0 pb-16">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="section-heading text-uppercase mt-10 mb-6">Past Events</h2>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 mb-6">
                            <h4 className="text-heading mb-2">SAE Supermileage</h4>
                            <p className="text-muted">
                                The SAE Supermileage competition takes place annually in Marshall,
                                Michigan during the second weekend in June. Teams from across North
                                America compete their vehicles at the Eaton Vehicle Group Proving
                                Grounds and try to set new records for efficiency. Our Gasoline Prototype
                                vehicle participates in the SAE Supermileage competition, and scored
                                third in 2018 with 1407 miles per gallon, second place in 2019 with
                                2229 miles per gallon, and second place again in 2022 with 1038
                                miles per gallon.
                            </p>
                        </div>
                        <div className="col-md-6 mb-6">
                            <h4 className="text-heading mb-2">CSQ Supermileage</h4>
                            <p className="text-muted">
                                The Competition Supermileage Quebec competition is a new competition that began at Laval University in June 2023. Teams from across North
                                America compete their vehicles in a lengthy endurance race with the goal of earning both a high mileage covered as well as a good fuel efficiency. Our Gasoline Prototype and Battery Electric Urban Concept
                                vehicles participated in this recently, and earned best overall fuel efficiency, second best mileage, and third place overall at competition
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="my-16" />
            <Footer />
        </div>
    );
};