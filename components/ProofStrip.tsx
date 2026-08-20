const proofs = [
  {
    number: "01",
    title: "구조화",
    description:
      "복잡한 정보를 사용자가 이해하기 쉽게 정리합니다.",
  },
  {
    number: "02",
    title: "시각화",
    description:
      "데이터를 화면에서 빠르게 이해할 수 있도록 표현합니다.",
  },
  {
    number: "03",
    title: "개선",
    description:
      "반복되는 작업과 실제 사용상의 불편을 찾아 개선합니다.",
  },
];

export default function ProofStrip() {
  return (
    <section
      className="proof-strip"
      aria-label="핵심 역량"
    >
      {proofs.map((proof) => (
        <div key={proof.number}>
          <span>{proof.number}</span>
          <strong>{proof.title}</strong>
          <p>{proof.description}</p>
        </div>
      ))}
    </section>
  );
}