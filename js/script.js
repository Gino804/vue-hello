const { createApp } = Vue;

const app = createApp({
    data(){
        return {
            text: 'Titolo'
        }
    }
});

app.mount('#root');