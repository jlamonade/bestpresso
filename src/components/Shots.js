import Shot from "./Shot";

const Shots = ({ espressoData }) => {
  return (
    <ul className="list-group">
      {espressoData.map((espresso) => (
        <Shot espresso={espresso} />
      ))}
    </ul>
  );
};

export default Shots;
