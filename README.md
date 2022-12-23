팀명 : 같이가조

팀장 - 이정민 백엔드 개발
팀원 - 윤수빈 프론트엔드 개발, 디자인
팀원 - 박도형 백엔드
팀원 - 백지훈 프론트엔드 개발
팀원 - 김윤수 백엔드, 프론트엔드 개발



client/src/
    |
    |-api           api 함수 폴더
    |-assets        font, image 등 폴더
    |-components    페이지 컴포넌트 폴더(파일의 첫 글자는 대문자 이용)
    |-pages         웹페이지 구현 폴더(파일의 첫 글자는 대문자 이용)
    |-utils         유틸 함수 폴더


server/routes/      URL별 라우팅
    |
    |-index         시작지점(메인 페이지 로딩)
    |-mint          민팅관련 페이지 라우팅
    |-mypage        마이페이지
    |-users         아직 생각 안해둠

server/controller/  라우팅된 메소드들 서비스 로직 구현
    |
    |-