<template>
    <div>
        <h1>My Appointments</h1>
        <div class="grid-x">
            <div class="small-6 medium-4 large-3 cell" v-for="appointment in appointments">
                <h3>Doctor: {{appointment.doctorName}}</h3>
                <p>Scheduled Date: {{appointment.date}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "my-appointments",
        computed: {
            appointments: function(){
                return this.$store.getters.getCurrentAppointmentList;
            }
        },
        data(){
            return {
            }
        },
        beforeMount(){
            this.refreshList()
        },
        methods: {
            refreshList(){
                var data = {
                    googleid: this.$store.getters.getGoogleId
                };
                this.$store.dispatch("fetchMyAppointments", data);
            }
        }
    }
</script>