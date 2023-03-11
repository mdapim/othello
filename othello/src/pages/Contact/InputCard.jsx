export default function InputCard({ name, handleFormInput, size, type }) {
  return (
    <label className="font-extrabold uppercase">
      {name}
      <br />
      <input
        type={type}
        name={name}
        size={size}
        className="border-gray-700 border-b-2 outline-0 normal-case font-normal h-8"
        onChange={handleFormInput}
      />
    </label>
  );
}
