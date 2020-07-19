<template>
    <v-card>
        <v-card-title>Data Input</v-card-title>
        <v-card-text>
            <v-text-field type="url" label="Plaintext URL" v-model="url"/>
            <text-share label="Out of Context URL" :value="outOfContextUrl"/>
        </v-card-text>
    </v-card>
</template>

<script>
    import TextShare from './TextShare';

    export default {
        name: 'DataInput',
        components: {TextShare},
        data: () => ({
            url: ''
        }),
        computed: {
            outOfContextUrl()
            {
                let currentUrl = new URL(window.location);
                currentUrl.hash = btoa(JSON.stringify({
                    u: this.url.replace('https://cors-anywhere.herokuapp.com/https://pastebin.com/raw/', '')
                }));
                return currentUrl.toString();
            }
        }
    };
</script>

<style scoped>

</style>
