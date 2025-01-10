import React from '../lib/react.js';

// HTML = Hyper Text Markup Language
// h = hyperscript (JavaScript Markup)
const { createElement: h } = React;

type OperationFn = (left: number, right: number) => number;
type Operator = '+' | '-' | '*' | '/' | '**';

const operations = {
  '+': (left: number, right: number): number => left + right,
  '-': (left: number, right: number): number => left - right,
  '*': (left: number, right: number): number => left * right,
  '/': (left: number, right: number): number => left / right,
  '**': (left: number, right: number): number => left ** right,
};

function add({ a, b }: { a: number; b: number }): number {
  return a + b;
}

function Calculator({ operator = '+', elements }: { elements?: [number, number]; operator: string }) {
  let left = 0;
  let right = 0;

  if (elements) {
    [left, right] = elements;
  }

  const outputValue: number = operations[operator](left, right);

  return h(
    'div',
    {
      className: 'calculator',
    },
    h('code', null, `${left} ${operator} ${right} = `, h('output', null, outputValue))
  );
}

export default Calculator;
