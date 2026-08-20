export default function Header() {
  return (
    <header className="topbar">
      <a
        href="#top"
        className="logo"
        aria-label="홈으로 이동"
      >
        GK<span>.</span>
      </a>

      <nav aria-label="주요 메뉴">
        <a href="#strengths">Strengths</a>
        <a href="#projects">Projects</a>
        <a href="#verification">Verification</a>
      </nav>
    </header>
  );
}