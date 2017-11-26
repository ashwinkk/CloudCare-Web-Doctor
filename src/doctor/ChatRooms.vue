<template>
    <div class="chat-container">
        <h1 class="title">Chat Rooms</h1>
        <div class="chat-box">
            <div class="rooms-collection">
                <div class="chat-room" v-for="room in chatRooms" @click="selectChat(room.name)" :class="{selected: room.name==roomName}">
                    <h3>{{room.name}}</h3>
                    <p></p>
                </div>
                <div class="add-container"><button class="button care-stack-button" @click="showModal">New Chat</button></div>
            </div>
            <div class="conversations" v-if="roomName">
                <div class="messages">
                    <conversations :database="baseRef" :roomName="roomName"></conversations>
                </div>
            </div>
            <div v-else><h1 class="title">No Chat to Display</h1></div>
        </div>
        <div class="new-chat-model" :class="{ visible: isVisible }">
            <input v-model="chatName" placeholder="Chat Name" />
            <input v-model="newChatEmail" placeholder="Add Email" />
            <button class="button care-stack-button" @click="createChat">Create Chat</button>
            <button class="button care-stack-button" @click="hideChat">Cancel</button>
        </div>
    </div>
</template>

<script>
    import fapp from "../firebase";
    import Conversations from "./Conversations";


    export default {
        name: "chat-rooms",
        components: {
            conversations: Conversations
        },
        // watch:{
        //     roomName: function(newVal){
        //         if(newVal!=null)
        //             this.$router.push(`/doctor/chat-rooms/${roomName}`);
        //     }
        // },
        firebase: {
            chatRooms: [],
        },
        computed: {
            roomName: function(){
                return this.$route.params.id;
            }
        },
        created: function(){
            this.selfEmail = localStorage.getItem('doctor-email');
            this.baseRef = this.db.ref();
            this.$bindAsArray('chatRooms', this.baseRef.child(`rooms/${this.selfEmail.split('@')[0]}`));
            console.log(this.$router.params);
        },
        data(){
            return {
                checkMessage: {},
                db : fapp.database(),
                baseRef: null,
                isVisible: false,
                selfEmail: "",
                newChatEmail: "",
                chatName: ""
            }
        },
        methods: {
            selectChat(roomName){
                // this.roomName = roomName;
                this.$router.push(`/doctor/chat-rooms/${roomName}`);
            },
            showModal(){
                this.isVisible = true;
            },
            createChat(){
                console.log("created");
                this.baseRef.child(`rooms/${this.selfEmail.split('@')[0]}`).push({name: this.chatName});
                this.baseRef.child(`rooms/${this.newChatEmail.split('@')[0]}`).push({name: this.chatName});
                this.chatName = "";
                this.newChatEmail = "";
                this.hideChat();
            },
            hideChat(){
                this.isVisible = false;
            }
        }
    }

</script>
<style scoped>
    .new-chat-model{
        position: fixed;
        z-index: 99;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 50px;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
        border-radius: 5px;
        background: white;
        display: none;
    }
    .visible{
        display: block;
    }
    .chat-container{
        height: 100%;
    }
    .chat-box{
        width: inherit;
        margin: 10px;
        margin-bottom: 0px;
        display: flex;
        height: calc(100% - 130px);
    }
    .rooms-collection{
        width: 30%;
        height: 100%;
        overflow-y: auto;
    }
    .add-container{
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .selected{
        background: white;
    }
    .chat-room{
        padding: 5px;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
        cursor: pointer;
        transition: background 0.3s;
        text-align: left;
    }
    .chat-room h3{
        font-family: 'Dosis', sans-serif;
    }
    .chat-room p{
        font-family: 'Muli', sans-serif;
    }
    .chat-room:hover{
        background: white;
    }
    .conversations{
        width: 70%;
    }
    .conversations, .messages{
        height: 100%;
    }
</style>