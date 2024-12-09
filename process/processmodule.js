// console.log(process);
// console.log(process.env);

// console.log(process.argv[3]);
console.log(process.argv)
console.log(process.env.USERNAME);

// pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

// title
console.log(process.title);

// memory usage
console.log(process.memoryUsage());

// uptime 
console.log(process.uptime());

process.on('exit',(code)=>{
    console.log(`about to exit with code: ${code}`);
    
})

// exit

process.exit(0)

console.log(`hello after exit`);



