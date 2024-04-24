# 프로젝트 소개
공동 계좌의 관리 플랫폼

## 프로젝트 회고
- <a href="https://kimmangyu.tistory.com/entry/wecode-3%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D">티스토리 회고</a>

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

## 📌구현 기능

### 1. 로그인/회원가입
- 회원가입 시 전화번호를 입력하여 본인인증을 시도합니다.
- 사용자는 이름과 패스워드를 입력하여 회원가입을 완료할 수 있습니다.
- 로그인 시도 시, 사용자 정보를 토큰에 담아 전달합니다.

### 2. 패스워드 변경
- 사용자는 토큰, 기존 패스워드와 새 패스워드를 입력하여 변경을 시도할 수 있습니다.
- 기존 패스워드가 일치하지 않는 경우, 사용자에게 "비밀번호를 확인해주세요" 알림이 표시됩니다.
- 기존 패스워드가 일치하는 경우, 패스워드를 변경합니다.

### 3. 프로필 이미지 변경
- 사용자는 토큰과 변경할 이미지를 받아 AWS S3에 업로드한 후, 이미지 URL을 받아와 프로필 이미지를 변경할 수 있습니다.

