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

## 기록

homepage가 https://kyh012412.github.io/iotest1/일때

최초 접속링크 https://kyh012412.github.io/iotest1/
path1로 갔을때 url에 보이는 링크
https://kyh012412.github.io/path1
이때 보이는 내용 path1 과 동일 (정상출력)
개발자 도구상 href 에 적혀잇는 주소 /path1

## 해결계획 2가지 계획

.env로 빌드할때부터 앞에 이름을 붙여준다 또는
basename을 사용해본다. 정도로 고려됨

### 해결검색

[참조 링크](https://velog.io/@wlwl99/GitHub-Pages-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%EB%B2%95)이 링크를 보면은 BrowserRouter대신에
HashRouter를 쓰는 것을권장한다고 되어있고

try hashrouter + basename = '/iotest1'
