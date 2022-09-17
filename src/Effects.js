import React, {useState, useEffect} from "react";
import Button from "./Button";
import styles from "./App.module.css";

/*
* Recap !
* ReactJS 의 강점은 새로운 데이터가 들어올 때마다(변화가 일어날 때만) UI 를 refresh 한다는 것(component 를 재실행)이다.
* useEffect 함수
*   첫번째 argument 는 실행시키고 싶은 코드
*   두번째는 dependencies, dependencies 란? ReactJS 가 지켜보아야 하는 것들이다.
*       그것들이 변화할 때, react.js 가 코드를 실행시킨다.
* */

function Hello() {

    // 익명의 화살표 함수 사용
    useEffect(() => {
        // mount 시 실행될 코드
        console.log("hi :)");
        // unmount 시 실행될 코드
        // function 을 return 한 것 뿐.
        return () => console.log("bye :(");
    }, []);

    // 익명의 함수 사용
    useEffect(function() {
        // mount 시 실행될 코드
        console.log("hi :)");
        // unmount 시 실행될 코드
        // function 을 return 한 것 뿐.
        return function() {
            console.log("bye :(");
        }
    }, []);
    // component 를 없애버리거나(destroy), 생성(create) 하는 것을 확인할 수 있다.
    // component 가 처음 생성될때만 console.log 코드 실행.
    // 3. Cleanup function
    /*
        destroyed 되는 부분의 이해를 돕기 위한 함수 예제 코드.

        function destroyedFn() {
            console.log("bye :(");
        }
        function effectFn() {
            console.log("created :)");
            return destroyedFn;
        }
        useEffect(effectFn, []);
    */
    // component 가 destroy(return 되는 함수 부분)될 때 뭔가 할 수 있도록 해줌
    /*
        useEffect(() => {
            console.log("created :)");
            // console.log("I'm here!");
            return () => {
                console.log("destroyed :(");
            }
        }, []);
    */
    return <h1>Hello</h1>;
}

function Effects() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [showing, setShowing] = useState(false);
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    const onBtnClick = () => setShowing((prev) => !prev);

    // console.log("i run all the time");

    // useEffect 함수 기능
    // 코드가 언제 실행될지 결정하는 방법

    // 1. Component 가 생성되는 첫 시작점
    // console.log 코드를 실행하고, dependency 는 가지고 있지 않음 (ReactJS 가 지켜볼 대상이 없기 때문에 한번만 실행)
    useEffect(() => {
        console.log("I run only once.");
        // console.log("CALL THE API....");
    }, []);

    // 2. state 가 update 될 때만 코드 실행
    // console.log 코드를 실행하고, dependency 는 가지고 있음 (keyword 가 변화할 때 브라우저에 console.log 코드를 실행)
    useEffect(() => {
        console.log("I run when 'keyword' changes.");
        // Component 가 생성되는 시점 실행되지 않게 조건문 추가
        if (keyword !== "" && keyword.length > 5) {
            console.log("SEARCH FOR", keyword);
        }
    }, [keyword]);

    useEffect(() => {
        console.log("I run when 'counter' changes.");
    }, [counter]);

    // 2-1. keyword 와 counter 둘 중 하나가 update 될 때 코드 실행
    useEffect(() => console.log("I run when 'keyword & counter' change."), [keyword, counter]);

    /*
    const iRunOnlyOnce = () => {
        console.log("i run only once.");
    }
    useEffect(iRunOnlyOnce, []);
    */
    // console.log("call an api");
    return (
        <div>
            <div>
                {showing ? <Hello /> : null}
                <button onClick={onBtnClick}>{showing ? "Hide" : "Show"}</button>
            </div>
            <div>
                <label htmlFor="search">Search</label>
                <input
                    id="search"
                    value={keyword}
                    onChange={onChange}
                    type="text"
                    placeholder="Search here..."
                />
            </div>
            <div>
                <h1>{counter}</h1>
                <button onClick={onClick}>Click me</button>
            </div>
            {/*<h1 className={styles.title}>Welcome back!!!</h1>*/}
            {/*<Button onClick={onClick} text={"Click me"} />*/}
        </div>
    );
}

export default Effects;
