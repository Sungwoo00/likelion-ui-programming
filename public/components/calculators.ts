import { Fragment } from 'vue';
import React from '../lib/react';
import Calculator from './calculator';

const { createElement: h } = React;

function Calculators() {

  return h(
    Fragment,
    null,
    h(Calculator),
    h(Calculator, { operator: '-'}),
    h(Calculator, {elements:[12,2], operator:'*'}),
    h(Calculator, {elements:[72,4], operator:'/'}),
    h(Calculator, {elements:[-23,5], operator:'*'}),
  )

  // return [
  //   h(Calculator, { key: 'child-1' }),
  //   h(
  //     Calculator,
  //     { key: 'child-2' },
  //     {
  //       operator: '-',
  //     }
  //   ),
  //   h(
  //     Calculator,
  //     { key: 'child-3' },
  //     {
  //       elements: [12, 2],
  //     }
  //   ),
  //   h(
  //     Calculator,
  //     { key: 'child-4' },
  //     {
  //       elements: [-12, 23],
  //       operator: '*',
  //     }
  //   ),
  // ];
}
