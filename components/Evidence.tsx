export default function Evidence() {
  return (
    <section
      id="projects"
      className="section"
    >
      <div className="section">
        <div className="evidence-layout">
          <div>
            <p className="eyebrow">
              02 / EVIDENCE
            </p>

            <h2>
              실제로 만든 것에서
              <br />
              근거를 찾습니다.
            </h2>
          </div>

          <article className="evidence-card">
            <div className="evidence-top">
              <span>PUBLIC EVIDENCE</span>
              <span>01</span>
            </div>

            <div className="dashboard-preview">
              <div className="preview-header">
                <span>Dashboard</span>
                <span>2024</span>
              </div>

              <div className="chart-area">
                <div className="chart-line line-one" />
                <div className="chart-line line-two" />
                <div className="chart-line line-three" />

                <div className="chart-bars">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="preview-stats">
                <div>
                  <span>Total</span>
                  <strong>1,284</strong>
                </div>

                <div>
                  <span>Completed</span>
                  <strong>942</strong>
                </div>

                <div>
                  <span>Rate</span>
                  <strong>73.4%</strong>
                </div>
              </div>
            </div>

            <div className="evidence-info">
              <p className="evidence-category">
                PROJECT / DASHBOARD
              </p>

              <h3>
                개인회생 개시결정 대시보드
              </h3>

              <p>
                실제 업무 데이터를 기반으로 주요
                지표를 시각화하고 관리자가 필요한
                정보를 빠르게 확인할 수 있도록
                구성한 관리자용 대시보드입니다.
              </p>

              <div className="tag-list">
                <span>React</span>
                <span>ECharts</span>
                <span>Highcharts</span>
                <span>REST API</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}