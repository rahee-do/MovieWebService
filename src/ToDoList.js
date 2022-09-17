import React, {useState} from "react";

function ToDoList() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        /*
            const fruit = ["apple", "banana", "blueberry", "cherry", "blackberry"];
            const newFruit = ["coconut", "avocado", ...fruit];
            console.table({
                "fruit": fruit,
                "newFruit": newFruit,
            })
            setToDos([] => ["hello", ...[]]);
            setToDos(["hello"] => "bye bye", ...["hello"]);
            setToDos(["bye bye", "hello"] => "another one", ...["bye bye", "hello"]);
            > ["another one", "bye bye", "hello"]

            map 함수란?
            하나의 array 에 있는 item 을 내가 원하는 무엇이든지로 바꿔주는 역할을 한다.
            그리고 그것을 새로운 array 로 return 해준다.
            newFruit.map(() => ":)");
            > [':)', ':)', ':)', ':)', ':)', ':)', ':)']
            newFruit.map(() => ":)");
            map 함수의 첫번째 argument 는 array 의 각 item 들을 의미한다.
            어떤 값을 return 하던지 map 함수는 새로운 array 를 return 한다.
            newFruit.map((item) => item.toUpperCase());
            > ['COCONUT', 'AVOCADO', 'APPLE', 'BANANA', 'BLUEBERRY', 'CHERRY', 'BLACKBERRY']
            결론적으로 예전 array 를 가져와서 변형하는 것이다.
        */
        setToDos(currentArray => [toDo, ...currentArray]);
        setToDo("");
    };

    // console.log(toDos);
    // react element 인 array 를 확인할 수 있다.
    // console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
    return (
        <div>
            <h1>My To Dos({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
