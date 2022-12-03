// ** React Imports
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

// ** Redux Imports
import { store } from './redux/store';
import { Provider } from 'react-redux';

// ** ThemeColors Context

import { ThemeContext } from './utility/context/ThemeColors';

// ** ThemeConfig
import themeConfig from './configs/themeConfig';
// ** Intl, CASL
import ability from './configs/acl/ability';
import { AbilityContext } from './utility/context/Can';

// ** Toast
import { Toaster } from 'react-hot-toast';

// ** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner';

// ** Ripple Button
import './@core/components/ripple-button';

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// ** React Hot Toast Styles
import '@styles/react/libs/react-hot-toasts/react-hot-toasts.scss';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// ** Core styles
import './@core/assets/fonts/feather/iconfont.css';
import './@core/scss/core.scss';
import './assets/scss/style.scss';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';

// ** Lazy load app
const LazyApp = lazy(() => import('./App'));
//TODO: Añadir interface y eliminar propstypes de los componentes
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Provider store={store}>
          <Suspense fallback={<Spinner />}>
            <AbilityContext.Provider value={ability}>
              <ThemeContext>
                <LazyApp />
                <Toaster
                  position={themeConfig.layout.toastPosition}
                  toastOptions={{ className: 'react-hot-toast' }}
                />
              </ThemeContext>
            </AbilityContext.Provider>
          </Suspense>
        </Provider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
