import { ref } from "vue";

const getPost = (id)=>{
    const post = ref(null)
    const error = ref(null)
   

    const load = async ()=>{
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            if( !res.ok ){
                throw Error('that does not exist')
            }
            post.value = await res.json()
        }catch(err){
            error.value = err.message;
            // console.log(error.value)
        }
    }
    return { post, error, load }
}
export default getPost;