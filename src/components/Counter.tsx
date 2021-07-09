// import { useState } from 'react';
// import * as React from 'react';

// interface CounterProps {
//     name: string
// }

// interface CounterState {
//     count: number
// }

// // FC, PureComponent, Component 
// // props를 통해 name이 있다는 것을 알려줌

// //1. 속성 타입을 인터페이스로 분리함
// class Counter extends React.Component<CounterProps, CounterState> {
    
//     constructor(props: CounterProps) {
//         super(props)
//         this.state = {
//             count: 0,
//         }
//     }


    
//     render() {
//         const [count, setCount] = useState<number>(0)
//         const { name } = this.props;

//         return <p>{name}counter</p>

//     }
    
// }

// export default Counter;

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;