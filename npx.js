#!/usr/bin/env node

let cp = require('child_process');
let argv = require('optimist').argv;

let name = Array.from(argv._)[0];
name = name || "Test-App";
console.log(name);

cp.execSync('git clone https://github.com/PhantomVRTranslate/Phantom-Components-Demo');
cp.execSync(`mv Phantom-Components-Demo ${name}`);
console.log('Runnng npm install... ');
cp.execSync(`cd ${name} && npm install`);
console.log('npm install done.');
console.log('Initializing git...');
cp.execSync(`cd ${name} && rm -rf .git`);
cp.execSync(`cd ${name} && git init`);
cp.execSync(`cd ${name} && git add .`);
cp.execSync(`cd ${name} && git commit -m'Initial commit'`);
console.log('Git initialized');
cp.execSync(`cd ${name} && perl -pi -w -e 's/ReactVrApp/${name}/g;' *.html`);
cp.execSync(`cd ${name} && npm start`);
console.log("test2");
