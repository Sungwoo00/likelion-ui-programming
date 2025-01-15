import React from '../lib/react.js';
import Switch from '../components/switch.tsx';
import SwitchList from '../components/switch-list.tsx';

//17버전 이전과 이후 jsx 처리 확인 코드
// import jsxRuntime from '../lib/react/jsx-runtime.js';

// const { jsx } = jsxRuntime;
{
  /* //17버전 이전과 이후 jsx 처리 확인
      <ul className='jsx-ul'>
        <li>child 1</li>
        <li>child 2</li>
        <li>child 3</li>
      </ul>

      <br />

      {jsx('ul', {
        className: 'jsx-ul',
        children: [jsx('li', { children: 'child 1' }, 'child-1'), jsx('li', { children: 'child 2' }, 'child-2'), jsx('li', { children: 'child 3' }, 'child-3')],
      })} */
}

/* Component ---------------------------------------------------------------- */

function App(): React.ReactNode {
  const handleSwitch1Toggle = () => console.log('clicked switch 1');
  const handleSwitch3Toggle = () => console.log('clicked switch 3');

  // 데이터 추출
  const list = [
    {
      active: true,
      onToggle: handleSwitch1Toggle,
      children: '와이파이(Wi-Fi)',
    },
    {
      children: '블루투스(Bluetooth)',
    },
    {
      disabled: true,
      onToggle: handleSwitch3Toggle,
      children: '동작 줄이기(Reduced Motion)',
    },
    {
      children: '스크린 리더(Screen Reader)',
      active: true,
    },
  ];

  let renderListItemElements: Array<React.ReactElement> = [];

  // for 문을 사용해 리스트 렌더링
  for (let i: number = 0, l: number = list.length; i < l; ++i) {
    const listItem = list[i];

    // 배열에 새 아이템 추가하기(Array.prototype.push)
    // renderListItemElements.push(
    //   // React Element
    //   <Switch
    //     active={listItem.active}
    //     disabled={listItem.disabled}
    //     showOnOffText={listItem.showOnOffText}
    //     onToggle={listItem.onToggle}
    //   >
    //     {listItem.children}
    //   </Switch>
    // );
  }

  return (
    <div lang='en' style={appStyles}>
      <SwitchList items={list} />
    </div>
  );
}

const appStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
  padding: 20,
};

export default App;
