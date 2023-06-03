export default function InputCard({ name, handleFormInput, size, type }) {
  return (
    <label className='font-extrabold uppercase'>
      {name}
      <br />
      <input
        type={type}
        name={name}
        size={size}
        className='border-gray-400 bg-gray-50 indent-2.5 w-full h-10 border outline-0 normal-case font-normal h-8 focus:border-gray-700 focus:border-2'
        onChange={handleFormInput}
      />
    </label>
  );
}
