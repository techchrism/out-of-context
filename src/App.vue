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
            <v-container >
                <v-row class="text-center">
                    <v-col cols="12">
                        <template v-if="$store.state.url.length > 0">
                            <v-progress-circular indeterminate v-if="$store.state.loading"/>
                            <random-generator v-else/>
                        </template>
                        <template v-else>
                            <data-input/>
                        </template>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import DarkSwitch from './components/DarkSwitch';
    import RandomGenerator from './components/RandomGenerator';
    import {LOAD_DATASET, SET_STARTING_SEED} from './store/mutation-types';
    import DataInput from './components/DataInput';

    export default {
        name: 'App',
        components: {
            DataInput,
            RandomGenerator,
            DarkSwitch
        },
        mounted()
        {
            const hash = window.location.hash.replace('#', '');
            if(hash.length > 0)
            {
                const hashData = JSON.parse(atob(hash));
                if(hashData.s)
                {
                    this.$store.commit(SET_STARTING_SEED, hashData.seed);
                }
                let url = hashData.u;
                if(!url.startsWith('http'))
                {
                    url = 'https://cors-anywhere.herokuapp.com/https://pastebin.com/raw/' + url;
                }
                this.$store.dispatch(LOAD_DATASET, url);
            }
        }
    };
</script>
