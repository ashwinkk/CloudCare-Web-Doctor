<template>
    <div>
        <div class="message-area">
            <div class="default-message" v-for="message in messages" :class="{ me: sender == message.sender }">
                <h3>{{message.text}}</h3>
                <p>{{message.timestamp}}</p>
            </div>
        </div>
        <div class="input-area">
            <input type="text" v-model="typedMessage" />
            <button class="button" @click="sendMessage">Send</button>
        </div>
    </div>
</template>
<script>
    export default {
        watch:{
            roomName: function(val){
                if(val!=""||val!=null){
                    this.fetchMessages();
                }
            }
        },
        props: {
            database: {required: true},
            roomName: {required: true}
        },
        firebase: {
            messages: {}
        },
        data(){
            return {
                typedMessage: "",
                sender: ""
            }
        },
        created(){
            this.sender = localStorage.getItem('user-googleid');
        },
        methods: {
            fetchMessages(){
                console.log(`messa/${this.roomName}`);
                this.$bindAsArray('messages', this.database.child(`messages/${this.roomName}`),

                    error => { console.log("error!");console.log(error); }
                );
            },
            sendMessage(){
                var date = new Date();
                var messageToBeSent = {
                    text: this.typedMessage,
                    sender: this.sender,
                    timestamp: `${date.getDate()}/${date.getMonth()}`
                }
                this.$firebaseRefs.messages.push(messageToBeSent);
                this.typedMessage = "";
            }
        }
    }
</script>
<style>
    .input-area{
        display: flex;
    }
    .default-message{
        width: 100%;
        text-align: left;
    }
    .me{
        text-align: right;
    }
</style>