# 프로젝트 소개
공동 계좌의 관리 플랫폼

## ▶️시연 영상

[![richaker 영상 썸네일]()](https://tv.kakao.com/v/441262435)

## ⏰개발 기간

- 2023/09/04 ~ 2023/09/22

<div align="center"><h2>🔧기술 스택</h2></div>
</br>
<div align="center">FRONTEND</div>
<div align="center">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">

</div>
</br>
<div align="center">BACKEND</div>
<div align="center">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">

</div>
</br>
<div align="center">CO-OP TOOLS</div>
<div align="center">  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white">
  <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=Trello&logoColor=white">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
  <a href="https://www.figma.com/file/Phdi4zHwhyDcAekaz7AJuN/Untitled?type=design&node-id=0%3A1&mode=design&t=zs6cMceeNlEBAYrg-1"><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/></a>
</div>

## ERD
![alt text](image.png)

## User Flow Chart
![alt text](image-1.png)

## 📌구현 기능

### 1. 회원 관리
- 회원가입: 전화번호 본인인증, 이름과 패스워드 입력
- 로그인: 사용자 정보를 토큰에 담아 전달
- 패스워드 변경: 기존 패스워드 확인 후 새 패스워드로 변경
- 프로필 이미지 변경: AWS S3를 활용한 이미지 업로드 및 URL 저장

### 2. 메인 페이지
- 사용자 대시보드 표시
- 연결된 카드 및 은행 계좌 정보 요약

### 3. 카드/은행 관리
- 카드/은행 선택 화면
- 카드/은행 추가하기
- 카드/은행 삭제하기

### 4. 마이데이터 연동
- 마이데이터 계좌 데이터 조회
- 마이데이터 금융 조회
- 본인인증 데이터 조회

### 5. 공동 계좌 관리
- 공동관리 메인 페이지
- 공동관리 계좌 상세 정보
- 구성원 추가
- 그룹 연결 해지
- 구성원 리스트 조회
- 공유계좌 카드 리스트
- 계좌/카드 공유 설정 및 해지

### 6. 거래 내역 및 통계
- 년월별 수입/지출 수치화
- 월별 거래 내역 조회
- 메인 화면 거래 내역 요약

### 7. 보안 및 인증
- 본인인증 프로세스
- 토큰 기반 인증 시스템

이 프로젝트는 사용자들이 개인 및 공동 계좌를 효율적으로 관리할 수 있도록 다양한 기능을 제공합니다. 금융 데이터의 통합 조회, 공동 계좌 관리, 그리고 직관적인 거래 내역 분석 등을 통해 사용자들의 재무 관리를 돕습니다.
