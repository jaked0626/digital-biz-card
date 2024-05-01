import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { PostHogProvider } from 'posthog-js/react';
import './index.css';

const posthogOptions = {
  api_host: import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_HOST,
};

console.log(posthogOptions);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_KEY}
      options={posthogOptions}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>,
);
