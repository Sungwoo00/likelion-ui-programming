import React from '../lib/react';
import Calculators from './calculator';
import Box from './box';

const { createElement: h } = React;

function App() {
  return h(
    'div',
    {
      className: 'app',
    },
    // h(Calculators)
    h(Box, null, '기본 박스'),
    h(
      Box,
      {
        size: 'small',
        style: {
          backgroundColor: '#0388d1',
        },
      },
      '작은 박스'
    ),
    h(
      Box,
      {
        size: 'big',
        style: {
          backgroundColor: '#1ecff6',
          borderRadius: 20,
        },
      },
      '큰 박스'
    ),
    h(
      Box,
      {
        className: 'box--circle',
        style: {
          backgroundColor: 'green',
        },
        id: 'circle-box',
        'aria-label': '둥근 모양의 초록색 박스',
        title: '둥근 박스입니다',
        translate: 'no',
      },
      '둥근 박스'
    )
  );
}
export default App;
