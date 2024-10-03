function Sun({ theme }) {
  let display = theme === "light" ? "block" : "none";
  return (
    <>
        <circle className="sun" cx="12" cy="12" r="5" style={{display}}></circle>
        <line className="sun" x1="1" y1="12" x2="3" y2="12" style={{display}}></line>
        <line className="sun" x1="4.22" y1="4.22" x2="5.64" y2="5.64" style={{display}}></line>
        <line className="sun" x1="12" y1="1" x2="12" y2="3" style={{display}}></line>
        <line className="sun" x1="18.36" y1="5.64" x2="19.78" y2="4.22" style={{display}}></line>
        <line className="sun" x1="21" y1="12" x2="23" y2="12" style={{display}}></line>
        <line className="sun" x1="18.36" y1="18.36" x2="19.78" y2="19.78" style={{display}}></line>
        <line className="sun" x1="12" y1="21" x2="12" y2="23" style={{display}}></line>
        <line className="sun" x1="4.22" y1="19.78" x2="5.64" y2="18.36" style={{display}}></line>
    </>
  )
}

function Moon({ theme }) {
  let display = theme === "dark" ? "block" : "none";
    return (
      <path
        className="moon"
        style={{ display }}
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      ></path>
    );
}


export default function Mode({ toggleTheme, theme }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mode"
      onClick={toggleTheme}
    >
      <Sun theme={theme} />
      <Moon theme={theme} />
    </svg>
  );
}