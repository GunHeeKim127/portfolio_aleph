import { bugFixes } from "@/data/portfolio";

const verificationItems = [
  {
    number: "01",
    title: "어디로 가나요?",
    description:
      "공개된 포트폴리오 주소에서 페이지를 열고 상단부터 확인합니다.",
  },
  {
    number: "02",
    title: "무엇을 하나요?",
    description:
      "강점 카드를 클릭하고 프로젝트와 근거를 확인합니다. 3단계 이내로 주요 내용을 확인할 수 있습니다.",
  },
  {
    number: "03",
    title: "무엇이 보이면 통과인가요?",
    description:
      "소개 · 활동 · 근거가 첫 화면에서 보이고 링크와 상호작용이 정상적으로 작동하면 통과입니다.",
  },
  {
    number: "04",
    title: "안 될 때",
    description:
      "링크 → Tab 이동 → 제목 구조 → 콘솔 오류 순서로 확인하고 하나씩 수정합니다.",
  },
];

export default function Verification() {
  return (
    <section
      className="section verification"
      id="verification"
    >
      <div className="verification-header">
        <div>
          <p className="eyebrow">
            05 / VERIFICATION
          </p>

          <h2>
            직접 확인할 수 있게 만들었습니다.
          </h2>
        </div>

        <p>
          이 페이지는 결과뿐만 아니라
          <br />
          결과를 검증하는 과정까지 공개합니다.
        </p>
      </div>

      <div className="verification-grid">
        {verificationItems.map((item) => (
          <article
            className="verify-card"
            key={item.number}
          >
            <span className="verify-number">
              {item.number}
            </span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className="bug-section">
        <div>
          <p className="eyebrow">
            BUG FIX LOG
          </p>

          <h3>실제 결함 수정 기록</h3>
        </div>

        <div className="bug-list">
          {bugFixes.map((bug) => (
            <div
              className="bug-item"
              key={bug.number}
            >
              <span>{bug.number}</span>

              <div>
                <p className="before">
                  <b>BEFORE</b>
                  {bug.before}
                </p>

                <p className="after">
                  <b>AFTER</b>
                  {bug.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ai-log">
        <div>
          <p className="eyebrow">
            AI 3 LINES
          </p>

          <h3>
            AI를 사용하되 판단은 직접 합니다.
          </h3>
        </div>

        <div className="ai-lines">
          <p>
            <strong>AI에게 맡긴 일</strong>
            페이지 구조와 UI 구현 방향에 대한 초안 작성
          </p>

          <p>
            <strong>내가 판단한 일</strong>
            실제 포트폴리오에 필요한 정보와 공개 범위 결정
          </p>

          <p>
            <strong>AI 말을 안 들은 일</strong>
            불필요한 개인정보와 확인할 수 없는 성과 수치는 제외
          </p>
        </div>
      </div>
    </section>
  );
}