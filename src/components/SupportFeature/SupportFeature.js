import square from "../../assets/SupportFeature/square.avif";
// import "./SupportFeature.css";

function SupportFeature() {
  return (
    <div className="container ">
          <div className="row">
          <div className="col-md-10 ">
            <h1>Learning Support Features</h1>
          </div>
          <div className="col-md-2 mt-5">
            <button className="button btn btn-info rounded-pill ">
              Learn more
            </button>
          </div>
        </div>
        <div className=" pt-5 ">
        <div className="row ">
          <div className="col-md-4">
            <img src={square}  alt='' />

            <h5 className="mt-5"> Watch online video</h5>

            <p>
              Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque non
              iusto nihiaS technology
            </p>
          </div>
          <div className="col-md-4">
            <img src={square} alt=''  />
            <h5 className="mt-5">Question and Discussion</h5>
            <p>
              Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque non
              iusto nihi
            </p>
          </div>

          <div className="col-md-4">
            <img src={square} alt=''  />

            <h5 className="mt-5"> Download Study Notes</h5>

            <p>
              Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque non
              iusto nihistomer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportFeature;