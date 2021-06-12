const ShotForm = ({ onSubmit }) => {
  return (
    <form className="my-3" onSubmit={onSubmit}>
      <label className="form-label">Date</label>
      <input
        type="date"
        className="form-control"
        placeholder="Enter Date"
      ></input>
      <label className="form-label">Beans Weight</label>
      <input
        type="number"
        className="form-control"
        placeholder="Enter Weight In Grams"
      ></input>
      <label className="form-label">Espresso Weight</label>
      <input
        type="number"
        className="form-control"
        placeholder="Enter Weight In Grams"
      ></input>
      <label className="form-label">Flavor</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Flavor"
      ></input>
      <button type="submit" className="btn btn-primary my-2">
        Save
      </button>
    </form>
  );
};

export default ShotForm;
