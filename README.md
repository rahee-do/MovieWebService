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

## Vanilla JS 와 React JS 차이점은? 
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
