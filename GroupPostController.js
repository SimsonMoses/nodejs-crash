const group_post = [
    {id:1,title:'Test title',description:"test description"},
    {id:1,title:'Test title',description:"test description"}
]

const get_post = () => group_post;
const group =[
    {id:1,title:'Group',description:"group description"},
]
export {
    get_post,
    group_post
}

export default group;

/* export default get_post, 
    on using the default keywork
    the get_post function will be exported as default
    not strict to use the get_post method same name in other module on importing

    export {}
    need to use the same that has been exported
*/ 