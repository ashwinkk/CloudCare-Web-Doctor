<template>
    <div>
        <h1>Schedule</h1>
        <div v-if="!loader" class="grid-x schedule-container">
            <div v-for="data in schedule" class="small-6 medium-4 large-3 cell doctor-container">
                <div>
                    <h2>{{data.name}}</h2>
                    <h4>{{data.department}}</h4>
                    <div class="grid-x timings">
                        <span class="small-6 medium-5 large-5 cell availability" v-for="day in data.available">{{day.days}}: {{day.time}}</span>
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
            if(this.$store.getters.isDoctorListEmpty)
                this.$store.dispatch("fetchDoctorSchedule");
        },
        methods: {
            bookAppointment(doctor){
                console.log(doctor.name);
                this.$store.commit("setDoctorId", doctor.doctorid);
                this.$router.push('/dashboard/book-appointment');
            }
        }
    }
</script>
<style scoped>
    .doctor-container{
        border: 2px solid #cacff3;
        border-radius: 3px;
        background: #dcdff8;
        padding: 15px 5px;
    }
    .availability{
        margin: 5px 1px;
        padding: 5px;
        text-align: center;
        background: #1f365d;
        color: white;
        border: 2px solid #c1c1d8;
        border-radius: 3px;
    }
    .timings{
        justify-content: space-around;
        margin: 10px;
    }
    .schedule-container{
        margin: 5px;
    }
</style>