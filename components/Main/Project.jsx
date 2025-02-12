"use client";
import Link from "next/link";
import Image from "next/image";

export default function Project({ id, title }) {
  return (
    <Link href={`/pages/${id}/`} className="form__div">
      <Image
        src={`/img/1.png`}
        width={100}
        height={100}
        alt={title}
      />
      {title}
    </Link>
  );
}
