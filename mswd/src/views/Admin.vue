<!-- admin/AdminComponent.vue -->
<template>
    <div class="admin">
   
    </div>
</template>

<script>
import navbar from './navbar.vue';

export default {
    components: {
        navbar
    }
}
</script>

<style>
.admin {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center; /* Center content vertically */
}

.admin h1 {
    text-align: center; /* Center text horizontally */
}

.admin-dashboard {
    flex: 1;
    padding: 20px;
}
</style>
