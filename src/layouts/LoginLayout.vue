<template>
    <div></div>

    <q-layout>
        <q-page-container>
            <q-page class="login-page">
                <q-card class="login-card">
                    <q-card-section>
                        <div class="text-h4">Login, bitch.</div>
                        <div class="text-h7">you won't. (__)(__)======D ~ ~ ~ ~~ </div>
                        <AuthButton />
                    </q-card-section>
                </q-card>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import authURI from 'src/authURI';
import { ref, defineComponent } from 'vue';
import AuthButton from '../components/AuthButton/AuthButton.vue';

const username = ref('');
const password = ref('');

const login = () => {
    console.log('Logging in...');
};

export default defineComponent({
    name: 'LoginLayout',
    methods: {
    },
    setup() {
        return {
            username,
            password,
            login,
            authURI,
        };
    },
    components: {
        AuthButton,
    },
});
</script>

<style>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-card {
    max-width: 400px;
    width: 100%;
    padding: 20px;
}
</style>
