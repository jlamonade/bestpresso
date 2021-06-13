import Shot from "./Shot";

const Shots = ({ espressoData }) => {
  return (
    <ul className="list-group my-2">
      {espressoData.map((espresso) => (
        <Shot espresso={espresso} key={espresso._id}/>
      ))}
    </ul>
  );
};

export default Shots;
