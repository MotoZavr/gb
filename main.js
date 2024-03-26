// Ваш React-компонент (например, ParamEditor)
import React from 'react';
import ReactDOM from 'react-dom';
import ParamEditor from './ParamEditor'; // Путь к вашему компоненту ParamEditor

// Данные для параметров
const params = [
  { id: 1, name: 'Назначение', type: 'string' },
  { id: 2, name: 'Длина', type: 'string' }
];

const model = {
  paramValues: [
    { paramId: 1, value: 'повседневное' },
    { paramId: 2, value: 'макси' }
  ]
};

ReactDOM.render(
  <ParamEditor params={params} model={model} />,
  document.getElementById('root')
);
