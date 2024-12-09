import {EventEmitter} from 'events'

const eventEmitter = new EventEmitter();

function hello(name){
    console.log(`Hello, ${name}`);
}

function bye(name){
    console.log(`Bye, ${name}`);
}

// reg event
eventEmitter.on('hello',hello)
eventEmitter.on('bye', bye)

// emit event
eventEmitter.emit('hello','simsonmoses')
eventEmitter.emit('bye', 'simsonmoses')

// error
eventEmitter.on('error',(err)=>{
    console.log(`Error occured: ${err}`);
})

eventEmitter.emit('error', new Error('err has been thrown'))