const Shot = ({ espresso }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <h6 className="mb-1">Flavor: {espresso.flavor}</h6>
        <h6 className="mb-1">Brew Time: {espresso.brewTime}</h6>
        <h6 className="mb-1">Brew Ratio: {espresso.ratio}</h6>
        <h6 className="mb-1">Grind Setting: {espresso.grind}</h6>
      </div>
    </li>
  );
};

export default Shot