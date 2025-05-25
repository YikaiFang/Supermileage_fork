import Footer from "tsx/Footer";
import Navbar from "tsx/Navbar";
import Title from "tsx/Title";

const Teams = () => {
  return (
    <div>
        <Navbar/>
        <Title imageSrcPath="/media/images/team.jpg" name="TEAMS"/>
        <section className="bg-light page-section" id="modal">
  <div className="container py-10">
    <div className="row">
      <div className="col-lg-12">
        <h2 className="section-heading text-uppercase">Our Teams</h2>
        <h3 className="section-subheading text-muted">
          Learn more about the teams at Supermileage.
        </h3>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-12 modal-item">
        <a className="modal-link" data-toggle="modal" href="#vmech">
          <div className="modal-hover">
            <div className="modal-hover-content">
              Learn More
            </div>
          </div>
          <img className="img-fluid" src={"/media/images/vehicle mechanics photo.jpg"} alt="" />
        </a>
        <div className="modal-caption">
          <h4>Vehicle Mechanics</h4>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 modal-item">
        <a className="modal-link" data-toggle="modal" href="#electrical">
          <div className="modal-hover">
            <div className="modal-hover-content">
              Learn More
            </div>
          </div>
          <img className="img-fluid" src={"/media/images/electrical division photo.jpg"} alt="" />
        </a>
        <div className="modal-caption">
          <h4>Electrical</h4>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 modal-item">
        <a className="modal-link" data-toggle="modal" href="#powertrain">
          <div className="modal-hover">
            <div className="modal-hover-content">
              Learn More
            </div>
          </div>
          <img className="img-fluid" src={"/media/images/powertrain division photo.jpg"} alt="" />
        </a>
        <div className="modal-caption">
          <h4>Powertrain</h4>
        </div>
      </div>
    </div>
  </div>
</section>
        <Footer/>
    </div>
    );
}

export default Teams;