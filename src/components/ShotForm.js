import { useState } from 'react'

const ShotForm = ({ onAdd }) => {
  const [date, setDate] = useState('')
  const [beansWeight, setBeansWeight] = useState()
  const [espressoWeight, setEspressoWeight] = useState()
  const [flavor, setFlavor] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    onAdd({ date, beansWeight, espressoWeight, flavor })
    setDate('')
    setBeansWeight('')
    setEspressoWeight('')
    setFlavor('')
  }

  return (
    <form className="my-3" onSubmit={onSubmit}>
      <label className="form-label">Date</label>
      <input
        type="date"
        className="form-control"
        placeholder="Enter Date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value)
        }}
      ></input>
      <label className="form-label">Beans Weight</label>
      <input
        type="number"
        className="form-control"
        placeholder="Enter Weight In Grams"
        value={beansWeight}
        onChange={(e) => {
          setBeansWeight(e.target.value)
        }}
      ></input>
      <label className="form-label">Espresso Weight</label>
      <input
        type="number"
        className="form-control"
        placeholder="Enter Weight In Grams"
        value={espressoWeight}
        onChange={(e) => {
          setEspressoWeight(e.target.value)
        }}
      ></input>
      <label className="form-label">Flavor</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Flavor"
        value={flavor}
        onChange={(e) => {
          setFlavor(e.target.value)
        }}
      ></input>
      <button type="submit" className="btn btn-primary my-2">
        Save
      </button>
    </form>
  );
};

export default ShotForm;
