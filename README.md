# ReactJS로 영화 웹 서비스 만들기
>
> https://nomadcoders.co/react-for-beginners/lobby
>

## prepend 함수 
- 선택된 요소의 첫번째에 새로운 요소나 콘텐츠를 추가한다.
```javascript
<div id="counter-btn-wrap">
    // p 태그 생성되는 위치
    <p></p>
    <button id="counter-btn">Click me</button>
    <script>
        const btnWrap = document.getElementById("counter-btn-wrap");
        const btn = document.getElementById("counter-btn");
        const p = document.createElement("p");
        // prepend 함수 선택된 요소의 첫번째에 새로운 요소나 콘텐츠를 추가한다.
        btnWrap.prepend(p);
        let counter = 0;
        function clickCounterBtn() {
            counter = counter + 1;
            p.innerText = counter;
        }
        btn.addEventListener("click", clickCounterBtn);
    </script>
</div>
```

## append 함수
- 선택된 요소의 마지막에 새로운 요소나 콘텐츠를 추가한다.
```javascript
<div id="counter-btn-wrap">
    <button id="counter-btn">Click me</button>
    <script>
        const btnWrap = document.getElementById("counter-btn-wrap");
        const btn = document.getElementById("counter-btn");
        const p = document.createElement("p");
        btnWrap.append(p);
        let counter = 0;
        function clickCounterBtn() {
            counter = counter + 1;
            p.innerText = counter;
        }
        btn.addEventListener("click", clickCounterBtn);
    </script>
    // p 태그 생성되는 위치
    <p></p>
</div>
```

## react, react-dom
> React JS 는 interactive 한 UI 를 만들어 주는 엔진과 같은 것이다. 
> react-dom 은 React element 를 HTML 에 두는 역할을 한다.
```javascript
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>

    const root = document.getElementById("root");
    // createElement 함수의 두 번째 argument 로 둘 수 있는 것은 span 의 property 들이다.
    // 세 번째 argument 는 span 의 content(내용) 이다.
    const span = React.createElement(
        "span",
        { id: "sexy-span", style: { color: "red" } },
        "Hello, I'm a span"
    );
    // React JS 는 Application 이 아주 interactive 하도록 만들어 주는 library 이고,
    // react-dom 은 library 또는 package 인데 HTML 화면에 그려주기 위해서는 react-dom 을 사용해야 한다.
    // React element 들을 HTML body 에 둘 수 있도록 해준다.

    // render () 의 의미는 React element 를 가지고 HTML 로 만들어 배치한다는 것이다.
    // 즉 사용자에게 보여준다 는 뜻이다.
    // ReactDOM.render(HTML태그, ReactDOM 에게 HTML태그를 어디에 둘 것인지 알려주는 것)
    ReactDOM.render(span, root);

```

## Vanilla JS 와 React JS 차이점은? (비교해보기) 
> Vanilla JS 는 HTML 을 먼저 만들고, 요소를 Javascript 로 가져와서 HTML 을 수정하는 방식이였고,
> React JS 는 Javascript 에서 시작한 다음 HTML 이 된다.
> 
> 이게 바로 React JS 파워의 핵심이다!
> 
> React JS 는 업데이트가 필요한 element 를 업데이트할 수 있다.
> 즉 React JS 는 유저에게 보여질 내용을 컨트롤할 수 있다는 뜻이다.
> 우리는 React JS 에게 업데이트해야 하는 HTML 을 업데이트하라고 할 것이다.
```javascript
// React JS POWER!
// 여기 있는 statement 로만 HTML 을 만들고, content 도 넣고, event listener 도 등록하기
// 이것이 javascript 로 element 를 생성하고 HTML 로 바꾸는 방식의 힘이다!
const btn = React.createElement(
    // HTML element 만들기
    "button", 
    {
        // button 에 event listener 주기
        onClick: () => console.log("i'm clicked"),
        onMouseEnter: () => console.log("i'm mouseEnter !"),
        style: { backgroundColor: "tomato" }
    },
    // content 넣기
    "Click me");
```

## [JSX](https://reactjs.org/docs/introducing-jsx.html) 란?
- JSX 는 JavaScript 를 확장한 문법이다. 
- 기본적으로 React 요소를 만들 수 있게 해주는데, HTML 에서 사용한 문법과 흡사한 문법으로 사용할 수 있다.
> [Babel](https://babeljs.io/docs/en/babel-standalone) 은 코드를 변화시키는 트랜스파일러의 역할을 한다. 
> JSX 로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔주는 것이다. (바꿔주기 전까진 브라우저는 JSX 를 invalid 하다고 생각한다.)
> 
> 어떤 식으로 바꿔주는 지 보고 싶으면 공식 홈에서 [Try it out](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.18.13&externalPlugins=&assumptions=%7B%7D) 메뉴를 클릭해서 확인해보면 된다. 
> 
>"use strict";
> const Title = /*#__PURE__*/React.createElement("h3", {
> id: "title",
> onMouseEnter: () => console.log("i'm mouseEnter !")
> }, "Hello, I'm a span");
> 
> 바벨은 세 단계로 빌드를 진행한다.
> 1. 파싱(Parsing) :  코드를 읽고 추상 구문 트리(AST)로 변환하는 단계
> 2. 변환(Transforming) : 추상 구문 트리를 변경
> 3. 출력(Printing) : 변경된 결과물을 출력
>

```jsx
// JSX 문법
// Browser 는 JSX 문법을 다 이해하는 것은 아니라서 "SyntaxError: Unexpected token '<'" 에러가 발생한다.
// 그래서 Browser 가 이해할 수 있도록 Babel 을 설치해줘서 한 번 변환시켜줘야 한다.

const Title = (
    <h3
        id="title"
        style={{color: "red"}}
        onMouseEnter={() => console.log("i'm mouseEnter !")}
    >
        Hello, I'm a span
    </h3>
);

// Babel 이 위 JSX 문법을 아래와 같이 변환시켜주는 것이다. 
const Title = React.createElement(
    "h3",
    { 
        id: "sexy-span", 
        style: { color: "red" }, 
        onMouseEnter: () => console.log("i'm mouseEnter !")
    },
    "Hello, I'm a span"
);

// Babel 에서 어떤 식으로 바꿔주는 지 확인했을 때 출력물
"use strict";

const Title = /*#__PURE__*/React.createElement("h3", {
    id: "title",
    onMouseEnter: () => console.log("i'm mouseEnter !")
}, "Hello, I'm a span");
```

- Babel 설치 후, JSX 를 사용한 script 에 type 을 주면 된다.
- Perfect!!!!!!!!!!!!!!!

```jsx
<!-- Load Babel : babel 을 import 한뒤, type 을 지정해줘야 한다. -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<!-- type="text/babel -->
<script type="text/babel">
    const Title = (
    <h3
        id="title"
        style={{color: "red"}}
        onMouseEnter={() => console.log("i'm mouseEnter !")}
    >
        Hello, I'm a span
    </h3>
    );
</script>
```
