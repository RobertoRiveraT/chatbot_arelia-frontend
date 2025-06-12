const { execSync } = require('child_process');
const branch = process.env.VERCEL_GIT_COMMIT_REF;
if (branch === 'qa-staging') {
    console.log('📦 Building QA-Staging...');
    execSync('npm run build:qa-staging', { stdio: 'inherit' });
} else {
    console.log('🚀 Building Production...');
    execSync('npm run build:production', { stdio: 'inherit' });
}
