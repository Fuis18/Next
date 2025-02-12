export default function Input({ id, name, value, onChange, children }) {
  return (
    <div className={`from__input-content ${name}`}>
      <label htmlFor={id}>{children}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
    </div>
  );
}