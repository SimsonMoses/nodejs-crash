import crypto from 'crypto'
// create hash
// const hash = crypto.createHash('sha256')

// hash.update('Hello World')
// const digest = hash.digest('hex')
// console.log(digest);

// // random bytes
// crypto.randomBytes(16,(err,buf)=>{
//     if(err) throw err;
//     console.log(buf.toString('hex'));
// })

// encrypt and decrypt
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('thisisp!@#$%^&*()assword**','utf-8','hex')
// console.log(encrypted);
encrypted += cipher.final('hex')
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted,'hex','utf8')
decrypted += decipher.final('utf8')
console.log(decrypted);
