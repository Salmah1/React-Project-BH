import GetLocation from "./GetLocation";

const starStyle = {
  color: "red",
};

function LocationTab() {
  return (
    <section className="py-1" id="location">
      <div className="container mt-4 mb-5 w-50">
        <h2 className="mb-4 text-center">Choose your location: </h2>
        <form action="https://formspree.io/f/xlevkerw" method="POST">
          <div className="form-group col mb-5 ms-5 col-7">
            <label>
              State <span style={starStyle}>*</span>
            </label>
            <select className="form-control">
              <option value="">---</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Ajman">Ajman</option>
              <option value="Dubai">Dubai</option>
              <option value="Sharjah">Sharjah</option>
              <option value="Umm All Quwain">Umm All Quwain</option>
              <option value="Ras Al Khaimah">Ras Al Khaimah</option>
              <option value="Fujairah">Fujairah</option>
            </select>
          </div>
          <div className="form-group col ms-5 mb-5 col-7">
            <label>
              Area <span style={starStyle}>*</span>
            </label>
            <select className="form-control">
              <option value="">---</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Ajman">Ajman</option>
              <option value="Dubai">Dubai</option>
              <option value="Sharjah">Sharjah</option>
              <option value="Umm All Quwain">Umm All Quwain</option>
              <option value="Ras Al Khaimah">Ras Al Khaimah</option>
              <option value="Fujairah">Fujairah</option>
            </select>
          </div>
          <div className="mb-3 col ms-5 col-7">
            <a href>
              Building <span style={starStyle}>*</span>
            </a>
            <input type="text-light" className="form-control" name="building" />
          </div>
          <div className="col-md-4 d-flex justify-content-evenly mb-3 mt-4">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
        <GetLocation />
      </div>
    </section>
  );
}

export default LocationTab;
