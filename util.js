const randomNumber = () =>{
    return Math.floor(Math.random() * 100) + 1;
}
const multiple = (i,m) => {
   return i*m;
}

module.exports = {
    randomNumber,
    multiple
};
