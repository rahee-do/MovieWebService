# Creat React App 개발 환경 세팅

## [Node.js](https://nodejs.org/ko/) 설치

node 설치 버전 확인하기
```shell
node -v
> v14.17.3
> v16.6.1 // 현재 설치되어 있는 버전
```
npx 커맨드 실행되는 지 확인하기
```shell
npx
> soyeon100@soyeons-MacBook-Pro ~ % npx
> Entering npm script environment at location:
> /Users/soyeon100
> Type 'exit' or ^D when finished
```
Ceate React App 설치하기  

```shell
npx create-react-app 폴더명
> Need to install the following packages:
> create-react-app
> Ok to proceed? (y)
y
> install ... (react, react-dom, react-scripts ...)
```
설치가 완료되면 ```code 폴더명``` 명령어로 VSCode 로 폴더 열기

## yarn 설치
MacOS 의 경우 Homebrew 를 사용해서 설치하기
```shell
$ brew install yarn
```
Windows 의 경우 Chocolatey 또는 Scoop 사용해서 설치하기
```shell
$ choco install yarn
$ scoop install yarn
```
npm 으로 설치하기 (전역) 
```shell
$ npm install -g yarn
```

yarn 설치 버전 확인하기
```shell
$ yarn --version
```

yarn 설치 후 전역 사용에 문제가 있을 경우 Path 설정해주기
```shell
$ export PATH="$PATH:/opt/yarn-[version]/bin"
```

> Create React App 의 장점은 *Auto-Reload(자동 재실행)* 이다.

## PropTypes 설치
```shell
$ npm install prop-types
```

# style modular(모듈러)
style modular 로 사용하면 Component 에서 독립적으로 유지 시켜줄 수 있다. 

Button.module.css 파일
```css
.btn {
    color: white;
    background-color: tomato;
}
```
Button 컴포넌트
```jsx
import styles from "./Button.module.css";

function Button({text}) {
    return (
        <button className={styles.btn}>{text}</button>
    )
}
```

## Router 설치
[V5 React Router 사용법](https://v5.reactrouter.com/web/guides/quick-start)
```shell
$ npm install react-router-dom@5.3.0
$ npm install react-router-dom
```
