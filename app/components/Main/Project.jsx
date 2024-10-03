"use client";
import Link from "next/link";
// let a = document.createElement("a");
// a.href = `pages/${i}/index.html`;
// a.click();
export default function Project({ id, title }) {
  return (
    <Link href={`pages/${id}/`} key={id} className="form__div-link">
      <div className="form__div">{title}</div>
    </Link>
  );
}
