<template>
  <div class="home">
    home
    <!-- <p>  name is: {{ name }}, age: {{ age }} </p>
    <button @click="handleClick"> click me </button>
    <button @click="age++"> Add 1 to value </button>
    <input type="text" v-model="name"> -->
    <!-- <p> {{ name }} </p> -->



    <!-- <input type="text" v-model="search">
    <p> Search Term - {{ search }} </p>
    <div v-for="name in names" :key="name">
        {{ name }}
    </div>
    <button @click="handleClick"> stop watching </button> -->
    <div v-if="error">
        {{ error }}
    </div>

    <div v-if="posts.length">
        <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>
        loading....
    </div>
    
    
    <button @click="toggel"> toggle show </button>
    <button @click="posts.pop()"> Delete </button>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import { computed , ref, reactive, watch, watchEffect } from 'vue'
import getPosts from '../composables/getPosts'

export default {
  
    name:'Home',
    components: { PostList },
    setup(){

        // const p = ref(null)
        // console.log('setup')
        // reactive it's when it get value like 'name' it doesn't chane like premative
        // const honey = reactive('honey) haney = 'ndfh' well never work

        // const name = ref('honda')
        // const age = ref(20)

        // const handleClick = () =>{
        //     console.log('you clicked me');
        //     // console.log(p,p.value)
        //     // p.value.classList.add('test')
        //     // p.value.textContent = 'hello dude'
        //     name.value = 'jhon'
        //     age.value = 44
        // }
        // return { name, age, handleClick }

        // const name = computed(()=>{
        //     return 'hounda'
        // })

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        // const search = ref('')
        // const names = ref(['shady','adel','nabil','abdin','dali'])
        // const matchingNames = computed(()=>{
        //     return names.value.filter((name)=> name.includes(search.value))
        // })

        // const stopWatch = watch(search,()=>{
        //     console.log('watch function run '+search.value)
        // })
        // const stopWatchEffect = watchEffect(()=>{
        //     console.log('watchEffect function is ran '+ search.value)
        // })
        // const handleClick = ()=> {
        //     // to stop watching 
        //     stopWatch()
        //     // to stop watch effect
        //     stopWatchEffect()
        // }
        // return {
        //     names,
        //     search,
        //     matchingNames,
        //     handleClick
        // }
         const showPosts = ref(true)
        const toggel = ()=>{
            showPosts.value = !showPosts.value
        }

        const { posts, error, load } = getPosts()
        load()
        return { posts,showPosts, toggel,error }
    }
}
</script>

<style>

</style>