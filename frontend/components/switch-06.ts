// --------------------------------------------------------------------------
// ✅ Switch 컴포넌트 작성(실습)
// --------------------------------------------------------------------------
// - [x] switch 역할(role) 설정
// - [x] aria-checked 속성을 사용해 ON/OFF 상태 설정
// - [x] ON/OFF 텍스트를 화면에 표시하더라도 aria-hidden 속성을 사용해 읽지 않도록 설정
// - [ ] 사용자가 Space, Enter(옵션) 키를 눌렀을 때 작동되도록 설정
// - [x] 비활성 상태인 경우, aria-disabled 속성을 사용해 설정
// --------------------------------------------------------------------------
import React from '../lib/react.js';

const h = React.createElement;

interface SwitchProps {
  active?: boolean;
  disabled?: boolean;
  showOnOffText?: boolean;
  children: React.ReactNode;
}

type SwitchText = 'ON' | 'OFF' | null;

function Switch({ active = false, disabled = false, showOnOffText = false, children }: SwitchProps) {
  // [미션] 조건문을 3항 연산자 식으로 변경해보세요.
  // let switchText: 'ON' | 'OFF' | null = 'OFF';

  // if (active) {
  //   switchText = 'ON';
  // }

  // if (!showOnOffText) {
  //   switchText = null;
  // }

  let switchText: SwitchText = !showOnOffText ? null : active ? 'ON' : 'OFF';

  // [미션] 3항 연산자 식을 조건문으로 변경해보세요.
  let switchTextNode = null;

  if (switchText) {
    switchTextNode = h('span', { className: 'Switch--text', 'aria-hidden': true }, switchText);
  }

  return h(
    'div',
    {
      role: 'switch',
      'aria-checked': active,
      'aria-disabled': disabled,
      tabIndex: 0,
      className: 'Switch',
    },
    h('span', { className: 'Switch--label' }, children),
    h('span', { className: 'Switch--info' }, h('span', { className: 'Switch--knob' }), switchTextNode)
  );
}

export default Switch;
