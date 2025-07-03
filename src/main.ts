import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Hosts que necesitan cargar env.js
const envHosts = [
  'localhost',
  'rrt-frontend-dev.vercel.app',
  'rrt-frontend-qa.vercel.app'
];

const currentHost = window.location.hostname;
const shouldLoadEnv = envHosts.some(host => currentHost.includes(host));

if (shouldLoadEnv) {
  const script = document.createElement('script');
  script.src = 'assets/env.js';
  script.onload = () => {
    console.log('[ENV] env.js loaded correctly');
    bootstrapApp();
  };
  script.onerror = () => {
    console.warn('[ENV] Failed to load env.js, continuing without it');
    bootstrapApp();
  };
  document.head.appendChild(script);
} else {
  bootstrapApp();
}

function bootstrapApp() {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}
