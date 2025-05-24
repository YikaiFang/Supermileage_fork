import Footer from "tsx/Footer";
import Header from "tsx/Header";
import Title from "tsx/Title";

const Sponsors = () => {
  return (
    <div>
        <Header/>
        <Title imageSrcPath="/media/images/contact.jpg" name="SPONSOR"/>
        <section className="bg-light page-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2 className="section-heading text-uppercase">Sponsor Us</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6">
        <h4 className="text-heading">Become a sponsor</h4>
        <p className="text-muted">
          Why sponsor us? Because it is easy and there are a lot of benefits:
        </p>
        <ul className="text-muted">
          <li>
            We issue tax receipts and business acknowledgements
          </li>
          <li>
            We speak at many school, public, and engineering events
          </li>
          <li>
            We can come to speak at any of your events
          </li>
          <li>
            We promote sustainability and minimizing environmental impact
          </li>
          <li>
            We help develop hard-working, well-rounded students
          </li>
          <li>
            There are possibilities of logo placement on the vehicle, website
            and promotional materials
          </li>
          <li>
            We have great relationships with our existing sponsors
          </li>
        </ul>
      </div>
      <div className="col-sm-6">
        <h4 className="text-heading">Learn more</h4>
        <p className="text-muted">
          With our proven track record and previous media coverage, sponsoring
          us is a great way to show that your company is helping to support an
          environmental Canadian student engineering project.
          <br /><br />
          If you would like to learn more about sponsoring the team, please take
          a look at our <a> Sponsorship Package</a> or contact us at
          <a href="mailto:sponsor@supermileage.ca">sponsor@supermileage.ca</a>
        </p>
      </div>
    </div>
  </div>
</section>

<section className="page-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2 className="section-heading text-uppercase">Donate</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <p className="text-muted">
          To support UBC Supermileage via a donation, visit <a
            href="https://donate.support.ubc.ca/page/20924/donate/1?transaction.dirgift=UBC+Supermileage+Team%20O961">this
            page</a> to start the process. All donations are greatly appreciated!
        </p>
      </div>
    </div>
  </div>
</section>
        <Footer/>
    </div>
    );
}

export default Sponsors;