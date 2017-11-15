<template>
    <div class="menu-container">
        <div class="menu-header">
            <img src="../assets/images/p+.png" />
            <div>
                <h2>Patient+</h2>
            </div>
        </div>
        <ul>
            <li :class="{'active-menu': activeMenu==1}" @click="activeMenu=1">
                <router-link to="/dashboard/book-appointment">Book an Appointment</router-link>
            </li>
            <li :class="{'active-menu': activeMenu==2}" @click="activeMenu=2">
                <router-link to="/dashboard/my-appointments">My Appointments</router-link>
            </li>
            <li :class="{'active-menu': activeMenu==3}" @click="activeMenu=3">
                <router-link to="/dashboard/schedule">Doctors' Schedule</router-link>
            </li>
            <li :class="{'active-menu': activeMenu==4}" @click="activeMenu=4">
                <router-link to="/dashboard/previous-appointments">Previous Appointments</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "patient-menu",
        data(){
            return {
                activeMenu: 2
            }
        },
    }
</script>
<style>
    .menu-container{
        width: 100%;
        height: 100%;
        background: #3F51B5;
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
        background: #303F9F;
    }
    .menu-container a{
        padding: 20px 30px;
        width: 100%;
        outline: 0;
        display:block;
        font-size: 20px;
        font-family: 'Muli', sans-serif;
        color: white;
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
        background: #311B92;
    }
</style>