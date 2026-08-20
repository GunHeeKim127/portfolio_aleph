const process = [
  {
    number: "01",
    title: "Observe",
    description:
      "사용자의 흐름과 화면의 문제를 확인합니다.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "재사용 가능한 구조로 기능을 구현합니다.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "브라우저, 키보드, 콘솔에서 실제 동작을 확인합니다.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "발견한 결함을 수정하고 다시 확인합니다.",
  },
];

export default function Process() {
  return (
    <section className="process-section" id="defects">
      <div className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              04 / PROCESS
            </p>

            <h2>
              문제를 발견하고 수정합니다.
            </h2>
          </div>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <article
              className="process-step"
              key={item.number}
            >
              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}