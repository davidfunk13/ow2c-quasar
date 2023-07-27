<template>
    <div></div>
    <!-- <q-page class="login-page">
        <q-card class="login-card">
            <q-card-section>
                <div class="text-h6">Login</div>
            </q-card-section>

            <q-card-section>
                <q-input outlined v-model="username" label="Username" />
                <q-input outlined v-model="password" label="Password" type="password" />

                <q-btn color="primary" @click="login" label="Login" class="q-mt-md" />
            </q-card-section>
        </q-card>
    </q-page> -->
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

const username = ref('');
const password = ref('');

const login = () => {
    // Add login logic here, e.g., sending login request to the server
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
        };
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
