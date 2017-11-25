<template>
    <div class="container">
        <div class="patient-menu">
            <doctor-menu></doctor-menu>
        </div>
        <div class="content-area">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import DoctorMenu from "./DoctorMenu";  
    export default {
        name: 'doctor-home',
        components: {
            'doctor-menu': DoctorMenu
        }
    }
</script>
<style>
    h1.title{
        color: #7b7b7b;
        font-family: 'Dosis', sans-serif;
        margin-bottom: 60px;
    }
    h2{
        color: #3d3258;
        
    }
    @media(min-width: 1300px){
        .container{
            display: flex;
            height: 100%;
        }
        .patient-menu{
            width: 25%;
        }
        .content-area{
            padding-top: 60px;
            width: 75%;
            background: #e8e8e8;
            overflow: auto;
        }
    }
</style>