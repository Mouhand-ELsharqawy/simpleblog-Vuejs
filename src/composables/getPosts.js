import { ref } from 'vue'

const getPosts = ()=>{
    const posts = ref([])
        const error = ref(null)
       

        const load = async ()=>{
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                if( !res.ok ){
                    throw Error('there is no data yet')
                }
                posts.value = await res.json()
            }catch(err){
                error.value = err.message;
                // console.log(error.value)
            }
        }
        return { posts, error, load }
}

export default getPosts;