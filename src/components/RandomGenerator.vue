<template>
    <v-card>
        <v-card-text>
            <p class="text-h4">{{statement}}</p>
        </v-card-text>
        <v-card-actions>
            <v-container>
                <v-row justify="center">
                    <v-col>
                        <v-btn color="success" @click="regenerate()" large>
                            Regenerate
                        </v-btn>
                        <p class="text-caption font-weight-light">or press space</p>
                        <Keypress key-event="keyup" :key-code="32" @success="regenerate()"/>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col class="col-12 col-md-5">
                        <text-share :value="shareUrl" label="Link to this message"/>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col class="col-12 col-md-7">
                        <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header>History</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-btn v-if="history.length > 0" color="error" @click="clearHistory" class="mb-3">
                                        Clear History
                                    </v-btn>
                                    <v-list-item-group>
                                        <v-list-item v-for="element of history" :key="element.seed" @click="regenerate(element.seed)">
                                            <v-list-item-content>{{element.statement}}</v-list-item-content>
                                            <v-list-item-icon>
                                                <v-icon>mdi-backup-restore</v-icon>
                                            </v-list-item-icon>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {nanoid} from 'nanoid';
    import Keypress from 'vue-keypress';
    import TextShare from './TextShare';
    import localforage from 'localforage';

    const seed = require('seed-random');

    function randomElement(arr, random)
    {
        return arr[Math.floor(random() * arr.length)];
    }

    export default {
        name: 'RandomGenerator',
        components: {TextShare, Keypress},
        data: () => ({
            statement: '',
            seedStr: '',
            history: []
        }),
        methods: {
            regenerate(seedStr)
            {
                this.seedStr = seedStr || nanoid(5);
                const random = seed(this.seedStr);

                this.statement = randomElement(this.$store.state.dataset, random);
                if(!seedStr)
                {
                    this.history.unshift({statement: this.statement, seed: this.seedStr});
                    if(this.history.length > 10)
                    {
                        this.history.pop();
                    }
                    localforage.setItem('history', this.history);
                }
            },
            clearHistory()
            {
                this.history = [];
                localforage.setItem('history', []);
            }
        },
        computed: {
            hashData()
            {
                return {
                    s: this.seedStr,
                    u: this.$store.state.url.replace('https://cors-anywhere.herokuapp.com/https://pastebin.com/raw/', '')
                };
            },
            shareUrl()
            {
                let url = new URL(window.location);
                url.hash = btoa(JSON.stringify(this.hashData));
                return url.toString();
            }
        },
        created()
        {
            localforage.getItem('history').then((historyData) =>
            {
                this.history = historyData || [];
                this.regenerate(this.$store.state.startingSeed);
            });
        }
    };
</script>

<style scoped>

</style>
