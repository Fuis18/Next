export default function Button({ type,text,value }) {
  let name = ""
  if (type == "0") name = "f4__button-b";
  else name = "f4__button-s";
  return (
    <button className={`f4__button-n ${name}`} value={value}>{text}</button>
  );
}
