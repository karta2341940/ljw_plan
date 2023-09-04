<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <v-app>
        <v-main>
            <v-app-bar>
                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
                <v-app-bar-title>屏東食品產業數位轉型平台</v-app-bar-title>
            </v-app-bar>
            <RouterView></RouterView>
        </v-main>
    </v-app>
</template>

<style scoped lang="scss"></style>
