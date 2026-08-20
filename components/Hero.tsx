export default function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-content">
        <p className="eyebrow">
          FRONTEND DEVELOPER · PORTFOLIO
        </p>

        <h1>
          복잡한 정보를
          <br />
          <span>사용하기 쉬운 화면</span>으로 만듭니다.
        </h1>

        <p className="hero-description">
          React · Next.js · TypeScript를 기반으로
          <br />
          관리자 시스템과 데이터 중심의 웹 서비스를 개발합니다.
        </p>

        <div className="hero-actions">
          <a
            href="#projects"
            className="primary-button"
          >
            프로젝트 보기
          </a>

          <a
            href="#verification"
            className="secondary-button"
          >
            검증 안내서
          </a>
        </div>
      </div>

      <aside
        className="scope-card"
        aria-label="공개 범위"
      >
        <div className="scope-label">
          PUBLIC SCOPE
        </div>

        <h2>이 페이지는</h2>

        <p className="scope-main">
          채용 담당자와 실무자가
          <br />
          개발 역량과 작업 방식을
          <br />
          확인하기 위한 페이지입니다.
        </p>

        <div className="scope-divider" />

        <div className="scope-grid">
          <div>
            <span>공개</span>
            <strong>프로젝트</strong>
            <strong>기술 스택</strong>
            <strong>작업 방식</strong>
          </div>

          <div>
            <span>비공개</span>
            <strong>개인 연락처</strong>
            <strong>사내 기밀</strong>
            <strong>인증 정보</strong>
          </div>
        </div>
      </aside>
    </section>
  );
}