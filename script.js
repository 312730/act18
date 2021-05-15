const app = Vue.createApp({
    data(){
        return{
            usuarios:[],
            usuarios2:[]
        }
    },
    methods: {
        obtenerUsuarios(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.usuarios = users
            })
        },
    },
    created(){
        this.obtenerUsuarios()
    }
})

const vm = app.mount('#app')