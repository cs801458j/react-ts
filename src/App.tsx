import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import Counter from './components/Counter';
import { useState } from 'react';
import MyForm from './MyForm';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

const App: React.FC = () => {
  // 훅 형태 사용
  const onSubmit = (form : {name: string; description: string}) => {
    console.log(form);
  };

  return <MyForm onSubmit={onSubmit} />;

};

export default App;


// 제네릭을 사용할 의무는 없지만 사용하는 이유 

// type Information = {name: string; description: string }
// const [ info, setInformation ] = useState<Information | null>(null);
