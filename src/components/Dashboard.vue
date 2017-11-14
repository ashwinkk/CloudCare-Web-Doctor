<template>
    <div class="row">
        <div>
            <patient-menu></patient-menu>
        </div>
        <div>
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