<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
    <v-app>
        <v-main>

            <v-toolbar>


                <v-toolbar-title>屏東食品產業數位轉型平台</v-toolbar-title>

                <v-spacer></v-spacer>
                <v-btn>
                    <RouterLink to="/">計畫目標</RouterLink>
                </v-btn>
                <v-btn>
                    <RouterLink to="/introduction">實施策略及方法</RouterLink>
                </v-btn>
                <v-btn>
                    <RouterLink to="/methodAndStrategy">食品產業上中下游介紹</RouterLink>
                </v-btn>
            </v-toolbar>

            <RouterView></RouterView>
        </v-main>
    </v-app>
</template>

<style scoped lang="scss"></style>
