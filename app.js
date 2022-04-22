import axios from 'axios';
async function getData(number){
const user =  await getUser(number)
const posts =  await getPost(user.id)
return {...user,posts};
}

const getUser = (number) => {
    return new Promise(async (resolve,reject) => {
        const { data } = await axios(
            "https://jsonplaceholder.typicode.com/users/"+number
            ); 
        resolve(data);  
    });
}
const getPost = (user_id) => {
    return new Promise(async (resolve,reject) => {
        const { data } = await axios(
            "https://jsonplaceholder.typicode.com/posts?userId="+user_id
            ); 
        resolve(data);  
    });
}

export default getData;
