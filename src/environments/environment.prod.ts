declare let window: any;

export const environment = {
    production: true,
    baseUrl: window.__env?.baseUrl
    || 'https://chatbotarelia-backend-production.up.railway.app'
};
