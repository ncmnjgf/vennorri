import { cert, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const serviceAccount = require('./serviceAccountKey.json');

// In firebase-admin v14: must use default app (NO name string)
initializeApp({ credential: cert(serviceAccount) });

// getAuth() with NO argument uses the default app registry internally
const auth = getAuth();

console.log('\n==================================');
console.log('  FIREBASE ADMIN SDK TEST RESULT  ');
console.log('==================================');
console.log('  Status : INITIALIZED ');
console.log('  Project:', serviceAccount.project_id);
console.log('  Email  :', serviceAccount.client_email);
console.log('----------------------------------');

auth.listUsers(5)
  .then((result) => {
    console.log('  Auth   : CONNECTED & WORKING!');
    console.log(`  Users  : ${result.users.length} found`);
    if (result.users.length > 0) {
      result.users.forEach((u, i) => {
        console.log(`    ${i + 1}. ${u.email || u.phoneNumber || u.uid}`);
      });
    } else {
      console.log('    (No registered users yet — totally normal)');
    }
    console.log('==================================\n');
    process.exit(0);
  })
  .catch((err) => {
    console.log('  Auth Error:', err.message);
    console.log('==================================\n');
    process.exit(1);
  });
