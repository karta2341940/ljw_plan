<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { ref } from 'vue';
const tab = ref(0);
</script>

<template>
    <v-app>
        <v-main>

            <v-toolbar>


                <v-toolbar-title>屏東食品產業數位轉型平台</v-toolbar-title>

                <v-spacer></v-spacer>
                <v-tabs v-model="tab" :color="'black'">
                    <RouterLink to="/">
                        <v-tab :value="0">
                            計畫目標
                        </v-tab>
                    </RouterLink>
                    <RouterLink to="/introduction">
                        <v-tab :value="1">
                            實施策略及方法
                        </v-tab>
                    </RouterLink>
                    <RouterLink to="/methodAndStrategy">
                        <v-tab :value="2">
                            食品產業上中下游介紹
                        </v-tab>
                    </RouterLink>
                    <RouterLink to="/result">
                        <v-tab :value="3">
                            成品展示
                        </v-tab>
                    </RouterLink>
                </v-tabs>

            </v-toolbar>

            <RouterView></RouterView>
        </v-main>
    </v-app>
</template>

<style scoped lang="scss">

</style>
