const SizeItem = ({ size = {}, handleCheck = () => {} }) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" name={size.id} id={size.id} value={size.name} onChange={e => handleCheck(e)}/>
      <label htmlFor={size.id} className="mx-2 select-none cursor-pointer">{size.name}</label>
    </div>
  );
};

export default SizeItem
