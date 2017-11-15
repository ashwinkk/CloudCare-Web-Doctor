<template>
    <div>
        <h1>Previous Appointments</h1>
        <div v-if="appointments.length!=0">
            <div v-for="appointment in appointments">
                <h3>Doctor: {{appointment.doctorName}}</h3>
                <p>Scheduled Date: {{appointment.date}}</p>
            </div>
        </div>
        <div v-else>
            <h3>You haven't had any appointments yet.</h3>
        </div>
    </div>
</template>
<script>
    export default {
        name: "my-appointments",
        computed: {
            appointments: function(){
                return this.$store.getters.getPreviousAppointments;
            }
        },
        data(){
            return {
            }
        },
        beforeMount(){
            var data = {
                googleid: this.$store.getters.getGoogleId
            };
            this.$store.dispatch("fetchPreviousAppointments",data);
        }
    }
</script>