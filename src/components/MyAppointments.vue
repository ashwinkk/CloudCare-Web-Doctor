<template>
    <div>
        <h1>My Appointments</h1>
        <div>
            <div v-for="appointment in appointments">
                <h3>Doctor: {{appointment.doctor}}</h3>
                <p>Patient Name:{{appointment.patientName}}</p>
                <p>Scheduled Date: {{appointment.date}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "my-appointments",
        data(){
            return {
                appointments: [
                    {
                        doctor: "Dr.Greg House",
                        patientName: "Ashwin Kailas",
                        date: "some date"
                    },
                    {
                        doctor: "Dr.Greg House",
                        patientName: "Ashwin Kailas",
                        date: "some date"
                    }
                ]
            }
        }
    }
</script>