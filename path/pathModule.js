import path from 'path'
import url from 'url'

const filePath = './dir01/subdir01/file.txt'

console.log(path.basename(filePath));

console.log(path.dirname(filePath));

console.log(path.extname(filePath));

console.log(path.parse(filePath));

console.log(path.parse(filePath).name);

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename);
console.log(__dirname);
