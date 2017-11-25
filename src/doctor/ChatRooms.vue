<template>
    <div>
        <h1 class="title">Chat Rooms</h1>
        <div class="chat-box">
            <div class="rooms-collection">
                <div class="chat-room" v-for="room in chatRooms" @click="selectChat(room.name)">
                    <h3>{{room.name}}</h3>
                    <p>
                        <span v-for="participant in room.participants">
                            {{participant}}
                        </span>
                    </p>
                </div>
            </div>
            <div class="conversations">
                <div class="messages">
                    <conversations :database="baseRef" :roomName="roomName"></conversations>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Firebase from "firebase";
    import Conversations from "./Conversations";

    var config = {
        apiKey: "AIzaSyBpdWt_k8iCOafpvjtuDNWEpkZlCbujxeQ",
        authDomain: "carestack-771d7.firebaseapp.com",
        databaseURL: "https://carestack-771d7.firebaseio.com",
        projectId: "carestack-771d7",
        storageBucket: "carestack-771d7.appspot.com",
        messagingSenderId: "403579118721"
    };

    var fapp = Firebase.initializeApp(config);
    export default {
        name: "chat-rooms",
        components: {
            conversations: Conversations
        },
        firebase: {
            chatRooms: {},
        },
        created: function(){
            this.baseRef = this.db.ref();
            this.$bindAsArray('chatRooms', this.baseRef.child(`rooms/ashwinkk`));
        },
        data(){
            return {
                roomName: "",
                checkMessage: {},
                db : fapp.database(),
                baseRef: null
            }
        },
        methods: {
            selectChat(roomName){
                this.roomName = roomName;
            }
        }
    }

</script>
<style>
    .chat-box{
        width: inherit;
        margin: 10px;
        display: flex;
        height: 100%;
    }
    .rooms-collection{
        width: 30%;
    }
    .chat-room{
        padding: 5px;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
        cursor: pointer;
        transition: background 0.3s;
    }
    .chat-room:hover{
        background: white;
    }
    .conversations{
        width: 70%;
    }
</style>