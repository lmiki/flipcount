import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function TableCell(props) {
  return <span className="divTableCell">{props.value}</span>;
}

function CounterValue(props) {
  var str = parseInt(props.numbers).toString();
  var arr = [...str];

  if (arr.length < 6)
  for (var i = arr.length; i < 6; i++) {
    arr = [0].concat(arr);
  }
  return (
    <div className="props.numbers">
      {arr.map((number) =>
        <TableCell key={number.toString()}
                  value={number} />
      )}
    </div>
  );
}

var km = '1250.079';
ReactDOM.render(
  <div className="divTable">
  <div className="divTableBody">
  <div className="strikeout"/>
  <CounterValue numbers={km} />
  </div>
  </div>,
  document.getElementById('flipCounter')
);
