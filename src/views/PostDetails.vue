<template>
  Details
  <div v-if="error"> 
    {{ error }} 
</div>
<div v-if="post" class="post">
    <h2>  {{ post.title }} </h2> 
    <p class="pre"> {{ post.body }} </p>
</div>
    <div v-else> loading.... </div>
</template>

<script>
import getPost from '../composables/getPost'
export default {
    props:['id'],
    setup(props){
        const { post, error, load } = getPost(props.id)
        load()

        return{
            post,error
        }
    }
}
</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}
.post p{
    color: #444;
    line-height: 1.5 em;
    margin-bottom: 40 px;
}
.pre{
    white-space: pre-wrap;
}
</style>