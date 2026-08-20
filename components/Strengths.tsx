"use client";

import { useState } from "react";
import { strengths } from "@/data/portfolio";

export default function Strengths() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleStrength = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index,
    );
  };

  return (
    <section
      className="section"
      id="strengths"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            01 / STRENGTHS
          </p>

          <h2>
            말보다 작업으로 보여드립니다.
          </h2>
        </div>

        <p>
          제가 잘한다고 생각하는 것을
          <br />
          상황 · 행동 · 결과로 정리했습니다.
        </p>
      </div>

      <div className="strength-list">
        {strengths.map((strength, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              className={`strength-card ${
                isOpen ? "is-open" : ""
              }`}
              key={strength.number}
            >
              <button
                type="button"
                className="strength-trigger"
                aria-expanded={isOpen}
                aria-controls={`strength-detail-${index}`}
                onClick={() =>
                  toggleStrength(index)
                }
              >
                <span className="strength-number">
                  {strength.number}
                </span>

                <span className="strength-title-wrap">
                  <span className="strength-keyword">
                    {strength.keyword}
                  </span>

                  <span className="strength-title">
                    {strength.title}
                  </span>
                </span>

                <span
                  className="plus"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div
                  className="strength-detail"
                  id={`strength-detail-${index}`}
                >
                  <div>
                    <span>상황</span>
                    <p>{strength.situation}</p>
                  </div>

                  <div>
                    <span>행동</span>
                    <p>{strength.action}</p>
                  </div>

                  <div>
                    <span>결과</span>
                    <p>{strength.result}</p>
                  </div>

                  <div className="evidence-link">
                    <span>공개 가능한 근거</span>

                    <a href="#evidence">
                      {strength.evidence} →
                    </a>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}