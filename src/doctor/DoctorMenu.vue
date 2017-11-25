<template>
    <div class="menu-container">
        <div class="menu-header">
            <img src="../assets/images/p+.png" />
            <div>
                <h2>Patient+</h2>
            </div>
        </div>
        <ul>
            <li :class="{'active-menu': this.routePath=='chat-rooms'}" @click="activeMenu=1">
                <router-link to="/doctor/home/chat-rooms">Chat Rooms</router-link>
            </li>
            <li :class="{'active-menu': this.routePath=='request'}" @click="activeMenu=2">
                <router-link to="/doctor/home/request">Request a Medical Record</router-link>
            </li>
            <li :class="{'active-menu': this.routePath=='search'}" @click="activeMenu=3">
                <router-link to="/doctor/home/search">Search Global Records</router-link>
            </li>
            <li :class="{'active-menu': this.routePath=='view-record'}" @click="activeMenu=4">
                <router-link to="/doctor/home/view-record">View Records</router-link>
            </li>
            <li @click="clearStorage"><a >Logout</a></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "doctor-menu",
        beforeCreate(){
            console.log(this.$route.path);
        },
        computed: {
            routePath() {
                console.log(this.$route.path.split('/'));
                return this.$route.path.split('/')[2];
            }
        },
        data(){
            return {
                activeMenu: 2
            }
        },
        methods:{
            clearStorage(){
                localStorage.removeItem('user-name');
                localStorage.removeItem('user-email');
                localStorage.removeItem('user-dp');
                localStorage.removeItem('user-googleid');
                this.$router.push('/');
            }
        }
    }
</script>
<style scoped>
    .menu-container{
        width: 100%;
        height: 100%;
        background: #3d3258;
    }
    .menu-container>ul{
        list-style-type: none;
        padding: 0;
        margin: 20px 0px;
    }
    .menu-container>ul>li{
        text-align: left;
        outline: 0;
    }
    .menu-container>ul>li:hover{
        background: #271e3e;
    }
    .menu-container a{
        padding: 20px 30px;
        width: 100%;
        outline: 0;
        display:block;
        font-size: 15px;
        font-family: 'Muli', sans-serif;
        color: #eaeaea;
        text-decoration: none;
    }
    .menu-header{
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        padding-top: 60px;
    }
    .menu-header>img{
        width: 200px;
        height: 200px;
    }
    .menu-header h2{
        position: relative;
        top: 50%;
        font-family: 'Dosis', sans-serif;
        color: white;
        transform: translateY(-50%);
        width: 100%;
    }
    .active-menu{
        background: #2e2a42;
        font-weight: bold;
        color: white;
    }
</style>