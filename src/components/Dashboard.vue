<template>
    <div class="container">
        <div class="patient-menu">
            <patient-menu></patient-menu>
        </div>
        <div class="content-area">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import PatientMenu from './PatientMenu';
    export default {
        name: 'dashboard',
        components: {
            "patient-menu": PatientMenu
        }
    }
</script>

<style>
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
            background: #E0F2F1;
        }
    }
</style>