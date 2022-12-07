import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';

class LegacyComponentClass extends Component {
  render() {
    const { t } = this.props;

    return (
      <h1>{t('Welcome to React')}</h1>
    )
  }
}
const MyComponent = withTranslation()(LegacyComponentClass)

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
// import React, { Suspense } from 'react';
// import { useTranslation } from 'react-i18next';

// function MyComponent() {
//   const { t, i18n } = useTranslation();

//   return <h1>{t('Welcome to React')}</h1>
// }

// // i18n translations might still be loaded by the http backend
// // use react's Suspense
// export default function App() {
//   return (
//     <Suspense fallback="loading">
//       <MyComponent />
//     </Suspense>
//   );
// }

// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       {/* <body>
//         <p>hsajhj</p>
//       </body>
//       <footer>
//         iuido
//       </footer> */}
//     </div>
//   );
// }

// export default App;
