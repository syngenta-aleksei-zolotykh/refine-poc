import {Refine} from '@pankod/refine';
import routerProvider from '@pankod/refine-react-router';

import 'styles/antd.less';
import simpleRestDataProvider from '@pankod/refine-simple-rest';
import {authProvider} from 'authProvider';
import {Title} from 'components/Title';
import {resources} from "./resources";

function App() {
  const API_URL = 'https://api.fake-rest.refine.dev';
  const dataProvider = simpleRestDataProvider(API_URL);
  return (
    <Refine
  Title={Title}
  routerProvider={routerProvider}
  dataProvider={dataProvider}
  authProvider={authProvider}
  resources={resources}
        ></Refine>
    );
}

export default App;
