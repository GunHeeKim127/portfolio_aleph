const menus = [
  {
    label: "소개",
    href: "#top",
  },
  {
    label: "강점",
    href: "#strengths",
  },
  {
    label: "프로젝트",
    href: "#projects",
  },
  {
    label: "개선 기록",
    href: "#defects",
  },
  {
    label: "검증",
    href: "#verification",
  },
  {
    label: "AI 기록",
    href: "#ai-log",
  },
];

export default function Header() {
  return (
    <header className="site-header">
      <a
        href="#top"
        className="logo"
        aria-label="포트폴리오 처음으로 이동"
      >
        GH<span>.</span>
      </a>

      <nav
        className="site-navigation"
        aria-label="포트폴리오 주요 메뉴"
      >
        {menus.map((menu) => (
          <a key={menu.href} href={menu.href}>
            {menu.label}
          </a>
        ))}
      </nav>
    </header>
  );
}