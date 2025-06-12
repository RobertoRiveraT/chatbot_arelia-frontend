declare let window: any;

export const environment = {
    production: true,
    baseUrl: window.__env?.baseUrl
    || 'https://backend-repo-qa-staging.up.railway.app'
};
