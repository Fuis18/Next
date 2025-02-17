export default function Input({ id, name, value, onChange, children, textarea = false }) {
  return (
    <div className={`from__input-content ${name}`}>
      <label htmlFor={id}>{children}</label>
      {textarea ? <textarea id={id} name={name} value={value} onChange={onChange}></textarea> : <input id={id} name={name} value={value} onChange={onChange} />}
    </div>
  );
}