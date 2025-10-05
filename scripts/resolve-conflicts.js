#!/usr/bin/env node
/*
  resolve-conflicts.js
  Keeps the "incoming" (after =======) section for all Git conflict blocks across the repo.
  Usage: node scripts/resolve-conflicts.js
*/

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET_DIRS = ['src', '.']; // include root files like README.md, vite.config.ts

function listFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === '.git' || e.name === 'build' || e.name === 'dist') continue;
      files.push(...listFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

function hasConflictMarkers(content) {
  return content.includes('') && content.includes('}

function resolveConflicts(content) {
  // Resolve all conflict regions by keeping the right side (after =======, before >>>>>>>)
  let changed = false;
  let safety = 0;
  while (hasConflictMarkers(content)) {
    safety++;
    if (safety > 10000) throw new Error('Safety break: too many iterations');

    const start = content.indexOf('', start + 1);
    const endMarker = '    const end = content.indexOf(endMarker, mid + 1);

    if (start === -1 || mid === -1 || end === -1) break;

    // slice right side
    const right = content.slice(mid + '======='.length, end);

    // remove the entire conflict including the commit line through its newline
    let after = content.indexOf('\n', end);
    if (after === -1) after = end + endMarker.length; else after += 1;

    content = content.slice(0, start) + right + content.slice(after);
    changed = true;
  }
  return { content, changed };
}

function main() {
  let totalChanged = 0;
  for (const base of TARGET_DIRS) {
    const abs = path.join(ROOT, base);
    if (!fs.existsSync(abs)) continue;
    for (const file of listFiles(abs)) {
      const stat = fs.statSync(file);
      if (!stat.isFile()) continue;
      const text = fs.readFileSync(file, 'utf8');
      if (!hasConflictMarkers(text)) continue;
      const { content, changed } = resolveConflicts(text);
      if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        totalChanged++;
        console.log(`Resolved conflicts in: ${path.relative(ROOT, file)}`);
      }
    }
  }
  console.log(`Done. Files updated: ${totalChanged}`);
}

main();
