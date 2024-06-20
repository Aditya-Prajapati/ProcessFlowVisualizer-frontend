const LabelAndInput = ({ label, description, placeholder }) => {
  return (
    <div className="flex flex-wrap mx-auto p-1">
      <div className="flex items-center w-full md:w-1/3 p-2 text-sm md:text-lg">
        <details className="rounded-lg cursor-pointer">
          <summary className="">
            <span className="w-full">{label}</span>
          </summary>
          <div className="mt-1 text-sm">
            <p>{description}</p>
          </div>
        </details>
      </div>
      <div className="w-full md:w-2/3 p-1">
        <input
          type="text"
          className="inputStyles w-full"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default LabelAndInput;
