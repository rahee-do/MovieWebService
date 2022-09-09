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
- 기본적으로 React 요소를 만들 수 있게 해주는데, HTML 에서 사용한 문법과 흡사한 문법으로 사용할 수 있다. (React Element 를 생성하는 방법)
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
- Perfect !

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

- JSX 문법 사용 규칙
- 컴포넌트 첫 글자는 반드시 대문자여야 한다.
- Button 컴포넌트를 소문자로 쓰면 HTML element 로 해석되기 때문이다.

```jsx
const root = document.getElementById("root");
    function Title() {
        return (
            <h3
                id="title"
                onMouseEnter={() => console.log("i'm mouseEnter !")}
            >
                Hello, I'm a span
            </h3>
        )
    };

    const Button = () => (
        <button
            style={{ backgroundColor: "tomato" }}
            onClick={() => console.log("i'm clicked")}
        >
            Click me
        </button>
    );

    const Container = (
        <div>
            <Title />
            <Button />
        </div>
    );
    ReactDOM.render(Container, root);
```

- Container 도 컴포넌트로 바꿔주면 반드시 함수로 만들어줘야 한다.
- 어떻게 하면 컴포넌트를 다른 컴포넌트 안에 넣는 지를 보여주는 예시. (arrow function 과 return 문을 포함하고 있는 것)

```jsx
// Container function
function Container() {
    return (
        <div>
            <Title />
            <Button />
        </div>
    )
} 
// Container arrow function 와 return 문을 포함하고 있는 것
const Container = () => (
    <div>
        <Title />
        <Button />
    </div>
);
const Container = () => (
    <div>
        <Title />
        <Button />
    </div>
);
// 위 두 함수 다 동일한 함수이다.

ReactDOM.render(<Container />, root);
```

## State
- state 는 기본적으로 데이터가 저장되는 곳이다. 
- 어떻게 하면 React.js 어플에 값이 바뀔 데이터를 담아줄 수 있을까?

#### React state 예제 1 (별로 좋지 못한 방식)
```jsx
let counter = 10; // 1을 넣든, 10을 넣든 변수로 바로 연결해준다.
const Container = () => (
    <div>
        <h3>Total clicks : {counter}</h3>
        <button>Click me</button>
    </div>
);



// button 을 클릭할 때 countUp 함수를 호출하면 counter 증가 로직에 의해 counter 의 값은 증가하지만,
// 렌더링은 진입 시 한번만 실행되기 때문에 화면에서 counter 의 값은 업데이트 되지 않는다. (리렌더링되지 않음)
// 즉 React.render() 되는 시점엔  counter 는 0 인 것이다. 

let counter = 0;
function countUp() {
    counter = counter + 1;
}
const Container = () => (
    <div>
        <h3>Total clicks : {counter}</h3>
        <button onClick={countUp}>Click me</button>
    </div>
);



let counter = 0; // 변수로 바로 연결해준다.
function countUp() {
    counter = counter + 1;
    // countUp 함수를 호출할 때마다  ReactDOM.render(<Container />, root); 렌더링을 시켜주고 싶은 것
    // counter 가 증가할 때마다 리렌더링되서 화면에 보여지게 된다.
    // ReactDOM.render(<Container />, root); => render 함수에 담아 호출하기
    render();
}
function render() {
    ReactDOM.render(<Container />, document.getElementById("root"));
}
const Container = () => (
    <div>
        <h3>Total clicks : {counter}</h3>
        <button onClick={countUp}>Click me</button>
    </div>
);
render();
```

- React 는 오로지 바뀐 부분만 업데이트 시켜준다. (강점)

## useState 함수

#### React state 예제 2 (Reactjs 방식)
```jsx
function App() {
    // useState 함수 이해하기
    const data = React.useState(0);
    console.log(data);
    // 출력 결과 > [0, ƒ]
    // 1. 배열의 첫 번째 값은 초기 값아고,
    // 2. 두 번째 요소는 그 값을 바꾸는 함수이다.
    // 아래 코드가 useState 함수와 똑같은 역할을 하는 것이다.
    /*
    const counter = 0;
    function countUp() {}
    */
    // useState 문법 이해하기
    // 예시 코드
    const food = ["apple", "tomato"];
    const [myFavFood, mySecondFavFood] = food;
    console.log(myFavFood, mySecondFavFood); // 출력 결과 > apple tomato

    // useState 함수 실전
    // React.js 가 data 를 담는 것과 업데이트 하는 방법
    const [counter, setCounter] = React.useState(0);
    // const [counter, modifier] = React.useState(0);
    // let [counter, modifier] = React.useState(0);

    const onClick = () => {
        // modifier 함수는 인자 값을 하나만 가지고 있고,
        // 1. 기존 값을 인자 값으로 업데이트 해주고,
        // 2. 그리고 리렌더링을 시켜준다.
        setCounter(counter + 1);
        // modifier(a => a + 1);
        /*
        counter = counter + 1;
        modifier(counter);
        console.log(counter, modifier);
        */
    };

    return (
      <div>
          <h3>Total click : {counter}</h3>
          <button onClick={onClick}>Click me</button>
      </div>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));
```
- state 가 바뀌면, React 가 Component 를 바뀐 부분만 refresh(rerender) 해주는 원리이다.

> state 를 바꾸는 2가지 방법
1. 직접 값을 설정해주는 것.
```jsx
const [counter, setCounter] = useState(0);
setCounter(777);
console.log(counter); // 출력 결과 : 777
```
2. 이전 값을 이용해서 현재 값을 계산해내는 것. (함수를 전달하기)
```jsx
const [counter, setCounter] = useState(0);
setCounter((current) => current + 1);
console.log(counter); // 출력 결과 : 1
```
### State 연습 예제 2가지
#### unit 의 converter (단위 변환기) 만들기
- 분 단위(minute) 를 넣으면 그걸 단위(hour) 로 값을 출력해주는 것
- 예를 들어 55km 입력하면 이게 몇 mile 인지 얻어내고, 1시간을 넣으면 몇 초인지 알려주는 것 
```jsx

```
#### money converter 배우기
- 예를 들어 10달러를 입력하면 이게 원화로 얼마인지를 알려주는 것
```jsx

```
