<template>
    <div>
        <h1>Schedule</h1>
        <div v-if="!loader">
            <div v-for="data in schedule">
                <div>
                    <h2>{{data.name}}</h2>
                    <p>{{data.department}}</p>
                    <div>
                        <span v-for="day in data.available">{{day.days}}: {{day.time}}</span>
                    </div>
                    <button class="button" @click="bookAppointment(data)">Book An Appointment</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "doctor-schedule",
        computed: {
            schedule: function(){
                return this.$store.getters.getDoctorSchedule;
            }
        },
        data(){
            return {
                loader: false
            }
        },
        beforeMount(){
            this.$store.dispatch("fetchDoctorSchedule");
        },
        methods: {
            bookAppointment(doctor){
                console.log(doctor.name);
            }
        }
    }
</script>