
<p align="center" >
<a href="https://scent-yonsei.com/" align="center"> <img src="https://github.com/user-attachments/assets/58bf2289-64b3-456e-9f4c-5aed1278f2ba" width="400px" height="400px" align="center"/></a>

</p>
<h1 align="center">
   
 [Scent of Blue](https://scent-yonsei.com/)
  <br/>  <br/> 
[연세대학교 대동제 공식 웹 사이트 <br/> (feat. 멋쟁이사자처럼 13기🦁)](https://scent-yonsei.com/)
  <br/>  <br/> 
  <div style="display: flex; gap: 10px; align-items: center; justify-content: center">
    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
    <img src="https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=for-the-badge"/>
  <div/>
</h1>



## 📘 목차

- [서비스 소개](#서비스-소개)
- [활용 기술](#활용-기술)
- [상세 페이지](#상세-페이지)

## 📝 서비스 소개

- 연세대학교 개교 제140주년 무악 대동제 공식 웹 사이트
- 대동제 공지사항, 주점 및 부스 정보, 연예인, 학생 공연 정보, 주요 시설 위치에 대한 정보를 제공
- 모바일 웹 사이트로 정보 제공 목적으로 만들어진 서비스입니다.
- 축제 모든 부스, 주점에 대한 위치, 상세정보 / 모든 공연에 대한 실시간 공연정보 및 공연팀 상세정보 제공

  
## 🛠️ 활용 기술
  
- **[Typescript]()**: Typescript는 Javscript의 문법에 타입 지정을 할 수 있도록 만들어진 언어로, 자바스크립트의 자유도와 타입 언어의 안정성까지 갖춘 언어입니다. 개발 과정에서 타입 추론의 도움을 받기 위해 사용했습니다.  
  
- **[NextJS]()**: ReactJS를 더욱 간편하게 사용하기 위해 만들어진 프레임워크로, 추가적인 설정 없이도 기본적으로 ServerSideRendering이 가능한 것이 장점입니다. 또한, 외부 라이브러리의 도움 없이도 자동으로 파일 구조 기반 라우팅이 가능하여 직관적인 폴더 구조를 구축할 수 있습니다. 레시피지에서 제공하는 레시피 페이지는 데이터가 자주 변경되지 않기 때문에 ISR을 적용하는 것이 효율적일거라 판단하여 도입하였습니다.
  
- **[TailwindCSS]()**: TailwindCSS는 Utility-first라는 컨셉을 갖고 나온 CSS 프레임워크로, html 태그에 인라인 스타일링을 적용할 수 있습니다. CSS-in-JS와는 다르게 런타임에 스타일에 적용이 되는게 아니기에 성능 측면에서 효율적이고, 개발과정에서 클래스 이름을 고민하지 않아도 되기에 빠른 개발이 가능하다는 것이 장점입니다. 

- **[React-Query]()**: React-Query는 Client-State와 Server-State를 확실하게 구분하기 위해 만들어진 라이브러리로, 서버에서 받아온 데이터를 키로 구분하여 캐싱을 할 수 있다는 큰 장점이 있습니다. 레시피지 서비스는 대부분 Server-State를 기반으로 동작하기 때문에, 추가적인 전역상태관리 툴을 이용해서 서버에서 받아온 데이터를 복사하여 관리하는 것 보다 React-Query를 이용하여 Server-State를 확실하게 분리해서 관리하는 것이 효율적일거라 판단하여 도입했습니다. 

- **[ShadcnUI]()**: Radix Primitives와 Tailwind CSS 기반으로 만들어진 컴포넌트 라이브러리로, 각 컴포넌트의 마크업과 구조만 제공하고 스타일은 Tailwind 유틸리티 클래스를 통해 직접 커스터마이징할 수 있습니다. 버튼, 입력 폼, 모달, 드롭다운, 토스트, 탭 등 주요 UI 요소가 미리 준비되어 있어, 일관된 디자인 시스템을 빠르게 구축하기 위해 사용하였습니다.

