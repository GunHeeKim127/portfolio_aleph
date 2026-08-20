import type { BugFix, Project, Strength } from "@/types/portfolio";

export const strengths: Strength[] = [
  {
    number: "01",
    title: "복잡한 정보를 구조화합니다",
    keyword: "INFORMATION ARCHITECTURE",
    situation:
      "관리자 시스템에서 많은 업무 정보와 상태를 한 화면에서 확인해야 하는 상황이 있었습니다.",
    action:
      "사용자가 실제로 확인해야 하는 정보를 우선순위에 따라 나누고, 재사용 가능한 UI와 상태 관리 구조를 설계했습니다.",
    result:
      "필요한 정보를 빠르게 파악할 수 있도록 화면 구조를 단순화하고 반복되는 UI를 컴포넌트화했습니다.",
    evidence: "관리자 시스템 · 대시보드",
  },
  {
    number: "02",
    title: "데이터를 화면으로 연결합니다",
    keyword: "DATA VISUALIZATION",
    situation:
      "개인회생 관련 데이터를 관리자가 빠르게 파악해야 하는 대시보드가 필요했습니다.",
    action:
      "ECharts와 Highcharts를 활용해 데이터를 시각화하고 중요한 지표가 먼저 보이도록 화면을 구성했습니다.",
    result:
      "복잡한 데이터를 그래프와 지표로 한눈에 확인할 수 있는 대시보드를 구현했습니다.",
    evidence: "개인회생 개시결정 대시보드",
  },
  {
    number: "03",
    title: "반복되는 작업을 줄입니다",
    keyword: "AUTOMATION",
    situation:
      "관리자 페이지에서 반복적으로 데이터를 정리하고 다운로드해야 하는 업무가 있었습니다.",
    action:
      "ExcelJS를 활용해 화면의 데이터를 엑셀 파일로 변환하고 다운로드할 수 있는 기능을 구현했습니다.",
    result:
      "반복적인 데이터 정리 작업을 화면에서 바로 처리할 수 있도록 개선했습니다.",
    evidence: "문의유입 총괄 페이지",
  },
];

export const projects: Project[] = [
  {
    number: "01",
    period: "2023.04 — 2023.12",
    title: "개인회생 개시결정 대시보드",
    description:
      "관리자가 개인회생 관련 주요 데이터를 빠르게 확인할 수 있도록 차트와 지표 중심의 대시보드를 구현했습니다.",
    stack: ["React", "ECharts", "Highcharts"],
    result: "업무 보고 준비 과정에서 반복적으로 발생하던 작업을 줄이는 데 기여",
  },
  {
    number: "02",
    period: "2023.12 — 2024.06",
    title: "광고문의 현황 페이지",
    description:
      "광고를 통해 유입되는 문의 데이터를 확인하고 관리할 수 있는 관리자 화면을 구축했습니다.",
    stack: ["React", "Recoil", "REST API"],
    result: "문의 상태와 유입 정보를 한 화면에서 확인할 수 있도록 구성",
  },
  {
    number: "03",
    period: "2024.06 — 2024.12",
    title: "문의유입 총괄 페이지",
    description:
      "문의 유입 데이터를 관리하고 필요한 데이터를 엑셀로 내려받을 수 있는 기능을 구현했습니다.",
    stack: ["React", "TypeScript", "ExcelJS"],
    result: "반복적인 데이터 정리 및 다운로드 업무를 화면에서 처리",
  },
  {
    number: "04",
    period: "2024.11 — 2024.12",
    title: "콘텐츠 관리자 페이지",
    description:
      "개발자가 아닌 사용자도 콘텐츠를 직접 관리할 수 있도록 CMS 형태의 관리자 페이지를 구현했습니다.",
    stack: ["React", "Editor.js", "TypeScript"],
    result: "콘텐츠 작성 및 수정 과정을 관리자 화면에서 직접 처리",
  },
];

export const bugFixes: BugFix[] = [
  {
    number: "01",
    before: "링크에 키보드 포커스가 명확하지 않았음",
    after: "Tab 이동 시 현재 포커스 위치가 명확하게 표시되도록 수정",
  },
  {
    number: "02",
    before: "일부 화면에서 콘텐츠 폭이 viewport를 넘어감",
    after: "max-width와 overflow 구조를 수정하여 가로 넘침 제거",
  },
  {
    number: "03",
    before: "제목 단계가 화면 구조와 맞지 않았음",
    after: "h1 → h2 → h3 순서로 제목 구조를 정리",
  },
];