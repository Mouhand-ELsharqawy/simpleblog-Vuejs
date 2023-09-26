<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" >
       <SinglePost :post="post" />
       <router-link :to="{ name: 'PostDetails', params: { id: post.id } }"> <button> read </button> </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
    props:['posts'],
    components:{SinglePost},
    setup(props){
        // console.log(props.posts)
        onMounted( () => {
            console.log('component Mounted')
        })
        onUnmounted( () => {
            console.log('component unMounted')
        })
        onUpdated(()=>{
            console.log('component updated')
        })
    }
}
</script>

<style>

</style>