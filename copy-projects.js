import fs from 'fs';
import path from 'path';

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    const stat = fs.lstatSync(fromPath);
    
    if (stat.isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else if (stat.isDirectory()) {
      // Exclude heavy node_modules directories and lockfiles/caches that are unnecessary in production
      if (element === 'node_modules' || element === '.git' || element === '.temp' || element === '.cache') {
        return;
      }
      copyFolderSync(fromPath, toPath);
    }
  });
}

const sourceDir = path.resolve('projects');
const targetDir = path.resolve('dist/projects');

try {
  console.log(`Copying projects from ${sourceDir} to ${targetDir}...`);
  copyFolderSync(sourceDir, targetDir);
  console.log('✓ Projects successfully copied to dist/projects! (node_modules excluded)');
} catch (error) {
  console.error('Failed to copy projects directory:', error);
  process.exit(1);
}
