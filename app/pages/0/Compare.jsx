export default function Compare({ mode, left, right, onChange }) {
  let type = "text";
  if (mode === "block") {
    type = "string";
  } else if (mode === "active") {
    type = "number";
  } else if (mode === "inactive") {
    type = "text";
  } else {
    console.error("Modo desconocido:", mode);
  }

  return (
    <>
      <input
        type={type}
        name="left"
        value={left}
        onChange={onChange ? onChange : undefined}
        readOnly={!onChange}
      />
      <div className="f0-middle">-</div>
      <input
        type={type}
        name="right"
        value={right}
        onChange={onChange ? onChange : undefined}
        readOnly={!onChange}
      />
    </>
  );
}
