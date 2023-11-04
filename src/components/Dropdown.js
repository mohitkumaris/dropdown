const Dropdown = ({ labelText, options, onChange }) => {
  return (
    <>
      <select value={labelText} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
