const Shot = ({ espresso }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{espresso.date}</h5>
        <h6 className="mb-1">Flavor: {espresso.flavor}</h6>
      </div>
      <h6 className="mb-1">Brew Ratio: {espresso.ratio}</h6>
    </li>
  );
};

export default Shot