<template>
    <div class="message-container">
        <div class="add-doc">
            <p>Add Doctor: </p>
            <input type="text" v-model="newDoctor" />
            <button class="button" @click="addDoctor">Add</button>
        </div>
        <div class="message-area">
            <div class="default-message" v-for="message in messages" :class="{ me: sender.split('@')[0] == message.sender }">
                <div class="message-box">
                    <h6>{{message.sender}}:</h6>
                    <h3>{{message.text}}</h3>
                    <p>{{message.timestamp}}</p>
                </div>
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
                sender: "",
                newDoctor: "",
                months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
            }
        },
        created(){
            this.sender = localStorage.getItem('doctor-email');
            this.fetchMessages();
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
                    sender: this.sender.split('@')[0],
                    timestamp: `${date.getDate()}, ${this.months[date.getMonth()]}`
                }
                this.$firebaseRefs.messages.push(messageToBeSent);
                this.typedMessage = "";
            },
            addDoctor(){
                console.log(this.newDoctor);
                this.database.child(`rooms/${this.newDoctor.split('@')[0]}`).push({name:this.roomName});
                this.newDoctor = "";
            }
        }
    }
</script>
<style>
    .input-area{
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .default-message{
        width: 100%;
    }
    .message-container{
        height: 100%;
        position: relative;
    }
    .add-doc{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    .add-doc input{
        width: 70%;
    }
    .add-doc p{
        align-self: center;
    }
    .message-area {
        height: calc(100% - 120px);
        overflow-y: auto;
    }
    .message-box{
        margin: 10px;
        width: fit-content;
        display: block;
        background: #c3c3c3;
        padding-right: 30px;
        padding-top: 10px;
        padding-left: 10px;
        border-radius: 10px;
        border-bottom-left-radius: 0px;
        margin-right: auto;
    }
    .me .message-box{
        padding-left: 30px;
        padding-top: 10px;
        padding-right: 10px;
        border-radius: 10px;
        text-align: right;
        border-radius: 10px;
        border-bottom-right-radius: 0px;
        margin-left: auto;
        margin-right: 0;
    }
</style>