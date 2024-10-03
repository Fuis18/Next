import Link from "next/link";
export default function Home() {
  return (
    <Link href="/" className="home">
      <svg viewBox="0 0 100 100">
        <path
          strokeWidth=".5"
          d="
				M15 65 L15 95 Q15 100 20 100 L42 100 L42 75 L58 75 L58 100 L80 100 Q85 100 85 95 L85 65 L50 35z
				M50 30 L90.5 64.55 Q93 66.8 95 64.55 L97.5 61.6 Q100 58.5 97.5 56.3 L85 45.5 L85 18 Q85 15 82 15 L73 15 Q70 15 70 18 L70 33 L53.34 18 Q50 15 46.55 18 L2.5 56.3 Q0 58.5 2.6 61.6 L5.1 64.55 Q7 66.8 9.8 64.55z"
        ></path>
      </svg>
    </Link>
  );
}
