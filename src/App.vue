<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title class="headline">
                <span class="font-weight-light">Out of Context</span>
                <v-btn icon
                       href="https://github.com/TheTechdoodle/out-of-context"
                >
                    <v-icon>mdi-github</v-icon>
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <dark-switch/>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-row class="text-center">
                    <v-col cols="12">
                        <random-generator/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import DarkSwitch from './components/DarkSwitch';
    import RandomGenerator from './components/RandomGenerator';

    export default {
        name: 'App',
        components: {
            RandomGenerator,
            DarkSwitch
        },
    };
</script>
