const LabelAndInput = ({ label, description, placeholder, value, onChange, inputType }) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col mx-auto p-1">
      <div className="flex-1 items-center p-2 text-sm md:text-lg">
        <details className="rounded-lg cursor-pointer">
          <summary>
            <span className="w-full">{label}</span>
          </summary>
          <div className="mt-1 text-sm">
            <p>{description}</p>
          </div>
        </details>
      </div>
      <div className="flex-1 p-1">
        <input
          type={inputType || "text"}
          className="inputStyles w-full"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default LabelAndInput;
