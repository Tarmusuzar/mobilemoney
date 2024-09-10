<template>
    <div style="height: 50vh ; width: 100%;  background-color: black;padding: 3rem; border-radius: 10px; ">
        <p style="color: white; margin-bottom: 10vh;">Exciting Feature Coming Soon...</p>
        <button @click="$emit('cancel')" style="width: 100%; max-width: 16rem; color: white; background-color: red; padding: .5rem;">Close</button>
    </div>
</template>
<script>
export default{
    emits:[
        'cancel'
    ]
}
</script>