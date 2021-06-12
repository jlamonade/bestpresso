const Shot = ({ espresso }) => {
  return (
    <li className="list-group-item">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{espresso.date}</h5>
        <h6 class="mb-1">{espresso.ratio}</h6>
      </div>
    </li>
  );
};

export default Shot