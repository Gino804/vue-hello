const { createApp } = Vue;

const app = createApp({
    data(){
        return {
            text: 'Titolo',
            image: 'https://picsum.photos/300/200'
        }
    }
});

app.mount('#root');