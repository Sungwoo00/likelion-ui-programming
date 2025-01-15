import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';
import Playground from '../components/playground.tsx';

// console.log('React 객체:', React);

// console.log('createElement 메서드:', React.createElement);

const root = document.getElementById('react');

if (!root) {
  alert('문서에 #react 요소가 존재하지 않습니다.');
} else {
  ReactDOM.createRoot(root).render(
    // console.log('App 컴포넌트:', App);
    // console.log('JSX:', <App />);
    // console.log('createElement:', React.createElement(App));
    // const app = React.createElement(App);
    // const app = <App></App>;
    // const app = <App />;

    <React.StrictMode>
      <Playground />
    </React.StrictMode>
  );
}
