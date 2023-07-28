<template>
    <q-btn color="primary" :href="String(authURI)" icon="login" label="Login" />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import authURI from '../../authURI';

export default defineComponent({
    name: 'AuthButton',
    methods: {
    },
    setup() {
        return {
            authURI,
        };
    },
});
</script>

<style scoped>
/* You can add your CSS here */
</style>
