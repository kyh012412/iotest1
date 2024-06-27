# github.io 테스트 리액트 라우터 테스트

repository name : iotest1

현재 예상되는 루트 경로 kyh012412.github.io/iotest1  
이하의 경로를 react의 Link 태그로 연결햇을시 정상적인 /iotest1/newlink 화면이 보여야하며
url에 kyh012412.github.io/iotest1/newlink을 적어도 동일한 화면이 출력되기를 기대

## 빠른 배포

`npm install gh-pages --save-dev`  
`npm i gh-pages` 로 설치  
`package.json`에는 `"deploy": "npm run build && gh-pages -d build"`를 추가하여 준다.  
그 이후 빠른 배포를 하기위해서는 `npm run deploy`를 치면 된다.

## 필수 연결

`npm run deploy`를 한번 실행시켜주면 gh-pages 라는 이름의 브랜치가 생기는데
`https://github.com/${유저명}/${레포지토리명}/settings/pages` 으로가서
branch를 gh-pages로 변경해준다.

## 추정

react이지만 빌드이후 후의 생기는 모든 과정을 동일하게 처리한다면
github.io에서의 기본적인 정적페이지 제공까지는 동일한 것으로 보인다.
`package.json`에 homepage라는 키를 추가해주고 값은 `${username}.github.io/${repositoryName}`으로 해주어야 하는것으로 보인다.

### 추정 이후의 실험계획

Link 태그를 추가하여 basename까지 고려하여 원하는 곳으로 접근이 가능하여야한다.  
`npm i react-router-dom`