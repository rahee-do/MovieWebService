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







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
