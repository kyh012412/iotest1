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

case 1 : try hashrouter + basename = '/iotest1' -> 로컬에서도 배포쪽에서 출력이 아무것도 되지 않았다..
문서를 봐도 Hashrouter는 절대경로가 필요한것이 아니라면 권장하지 않는다고 나와있다.

case 2 : try browserRotuer + base name = '/iotest1' 로컬쪽에서 모든 경로가 /iotest1이 됨을 확인 할 수 잇었고
내용도 정상적으로출력이 되고 있다 이 버전을 배포해본다면  
배포에서도 모든 경로와 내용이 정상적이다. 다만,  
kyh012412.github.io/iotest1/path1을 수동으로 입력후엔터를 할시에 원하는 페이지에 도달하지 못하기에
검색을 햇고 그결과 404.html을 public 폴더에 넣으라고 되어있었다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    />
    <link rel="stylesheet" href="%PUBLIC_URL%/index.css" />
    <script defer src="%PUBLIC_URL%/index.js"></script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

case 3: try with 404.html
특이사항 gpt친구는 홈페이지를 /iotest1로 하라고했지만 현재는 기존경로에따라서
`"homepage": "https://kyh012412.github.io/iotest1/"`로 되어있다
잘 되지 않았다.

case 4 : 새로운 404.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Single Page Apps for GitHub Pages</title>
    <meta
      name="description"
      content="Lightweight solution for deploying single page apps with GitHub Pages."
    />

    <style>
      html {
        background-color: rgb(0, 120, 0);
      }
    </style>

    <!-- favicon -->
    <link rel="icon" type=”image/svg+xml”
    href="/favicon/green-grid-144-168-192.svg">
    <link
      rel="alternate icon"
      type="image/png"
      href="/favicon/green-grid-144-168-192-512x512.png"
    />
    <link
      rel="apple-touch-icon"
      href="/favicon/green-grid-144-168-192-180x180.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <meta name="theme-color" content="#000000" />

    <!-- Start Single Page Apps for GitHub Pages -->
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      // This script checks to see if a redirect is present in the query string,
      // converts it back into the correct url and adds it to the
      // browser's history using window.history.replaceState(...),
      // which won't cause the browser to attempt to load the new url.
      // When the single page app is loaded further down in this file,
      // the correct url will be waiting in the browser's history for
      // the single page app to route accordingly.
      (function (l) {
        if (l.search[1] === '/') {
          var decoded = l.search
            .slice(1)
            .split('&')
            .map(function (s) {
              return s.replace(/~and~/g, '&');
            })
            .join('?');
          window.history.replaceState(
            null,
            null,
            l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      })(window.location);
    </script>
    <!-- End Single Page Apps for GitHub Pages -->
  </head>
  <body>
    <div id="root"></div>
    <!-- single page app in bundle.js -->
    <script src="/build/bundle.js"></script>
  </body>
</html>
```

이름부터가 싱글페이지 github 어쩌고이다.

결국 되지 않았고 더찾아보니 [이런 글](https://hell-of-company-builder.tistory.com/m/275)을 찾을 수 잇었다.

404.html과 index.html을 같이 수정해준다.

case 5: try fixed 404.html and index.html
404.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Single Page Apps for GitHub Pages</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // https://github.com/rafrex/spa-github-pages
      // Copyright (c) 2016 Rafael Pedicini,  licensed under the MIT License
      //  ---------------------------------------------- ------------------------
      // This script takes the current url and  converts the path and query
      // string into just a query string, and then  redirects the browser
      // to the new url with only a query string  and hash fragment,
      // e.g. http://www.foo.tld/one/two?a=b& c=d#qwe, becomes
      // http://www.foo.tld/?p=/one/two&  q=a=b~and~c=d#qwe
      // Note: this 404.html file must be at least  512 bytes for it to work
      // with Internet Explorer (it is currently >  512 bytes)

      // If you're creating a Project Pages site  and NOT using a custom domain,
      // then set segmentCount to 1 (enterprise   users may need to set it to > 1).
      // This way the code will only replace the  route part of the path, and not
      // the real directory in which the app  resides, for example:
      //  https://username.github.io/repo-name/one/two?  a=b&c=d#qwe becomes
      // https://username.github.io/repo-name/? p=/one/two&q=a=b~and~c=d#qwe
      // Otherwise, leave segmentCount as 0.
      var segmentCount = 1;

      var l = window.location;
      l.replace(
        l.protocol +
          '//' +
          l.hostname +
          (l.port ? ':' + l.port : '') +
          l.pathname
            .split('/')
            .slice(0, 1 + segmentCount)
            .join('/') +
          '/?p=/' +
          l.pathname
            .slice(1)
            .split('/')
            .slice(segmentCount)
            .join('/')
            .replace(/&/g, '~and~') +
          (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
          l.hash
      );
    </script>
  </head>
  <body></body>
</html>
```

index.html

```html
<head>
  ...
  <!-- Start Single Page Apps for GitHub Pages -->
  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // https://github.com/rafrex/spa-github-pages
    // Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
    // ----------------------------------------------------------------------
    // This script checks to see if a redirect is present in the query string
    // and converts it back into the correct url and adds it to the
    // browser's history using window.history.replaceState(...),
    // which won't cause the browser to attempt to load the new url.
    // When the single page app is loaded further down in this file,
    // the correct url will be waiting in the browser's history for
    // the single page app to route accordingly.
    (function (l) {
      if (l.search) {
        var q = {};
        l.search
          .slice(1)
          .split('&')
          .forEach(function (v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
          });
        if (q.p !== undefined) {
          window.history.replaceState(
            null,
            null,
            l.pathname.slice(0, -1) +
              (q.p || '') +
              (q.q ? '?' + q.q : '') +
              l.hash
          );
        }
      }
    })(window.location);
  </script>
  <!-- End Single Page Apps for GitHub Pages -->
</head>
```

그리고 혹시 몰라서 직접만든 notfound 컴포넌트감지는 제외했다.

[참조링크가 많은 링크](https://velog.io/@jknine929/Github-Pages%EC%97%90-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0)
