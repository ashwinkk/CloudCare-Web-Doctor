<template>
    <div>
        <h1>Schedule</h1>
        <div>
            <div v-for="data in schedule">
                <div>
                    <h2>{{data.name}}</h2>
                    <div>
                        <span v-for="day in data.days">{{day}}</span>
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
        data(){
            return {
                schedule: [
                    {
                        name: "Dr House",
                        days: ["Monday","Tuesday","Wednesday"]
                    },
                    {
                        name: "Dr Wilson",
                        days: ["Tuesday", "Wednesday"]
                    }
                ]
            }
        },
        methods: {
            bookAppointment(doctor){
                console.log(doctor.name);
            }
        }
    }
</script>