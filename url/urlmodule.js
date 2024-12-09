import url from 'url'
import { log } from 'util';

const uri = 'http://localhost:8093/api/digital-engagement/workflow/group/post/84/report/get-all?offset=1&limit=2'

console.log(url.parse(uri)); // deprecated

const urlObj = new URL(uri);
console.log(urlObj);

const params = urlObj.searchParams;
params.forEach((value, key) => {
  console.log(`key: ${key}  : Value: ${value}`);
  
})
console.log(params);