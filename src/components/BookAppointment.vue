<template>
    <div>
        <div>
            <h1>Book Appointment</h1>
        </div>
        <div>
            <div>
                <h2>Doctors</h2>
                <div class="grid-x">
                    <div class="small-4 cell" v-for="doctor in choosableDoctors" v-on:click="selectDoctor(doctor)">
                        <h3>{{doctor.name}}</h3>
                        <p>{{doctor.dept}}</p>
                    </div>
                </div>
            </div>
            <div>
                <label for="select-date">Select Date</label>
                <select id="select-date" v-model="selectedData.date">
                    <option disabled>-Select Date-</option>
                    <option v-for="date in choosableDates" v-bind:value="date">{{date.day}}, {{date.date}} {{date.month}}</option>
                </select>
            </div>
        </div>
        <div>
            <div>
                <button class="button" @click="()=>{confirmBooking();showCredentialInputs=false;}">Book for self</button>
                <button class="button" @click="showCredentialInputs = true">Book for someone</button>
            </div>
            <div v-if="showCredentialInputs">
                <div>
                    <input type="text" placeholder="Name" v-model="selectedData.credentials.name" />
                </div>
                <div>
                    <input type="text" placeholder="Contact Number of patient" v-model="selectedData.credentials.contactNumber" />
                </div>
                <div>
                    <input type="text" placeholder="Relation with patient" v-model="selectedData.credentials.relation" />
                </div>
                <div>
                    <button class="button" @click="confirmBooking">Confirm Booking</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created(){
            this.setDates();
            this.choosableDoctors = this.doctors;
        },
        data(){
            return {
                allDates: [],
                showCredentialInputs: false,
                choosableDates: [],
                choosableDoctors: [],
                steps: 0,
                days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                selectedData: {
                    date: {},
                    doctor: {},
                    credentials: {}
                },
                doctors: [
                    {
                        doctorid: 1,
                        name: "Greg House",
                        dept: "Diagnostician",
                        days: ["Monday","Wednesday"]
                    },
                    {
                        doctorid: 2,
                        name: "Wilson",
                        dept: "Oncologist",
                        days: ["Monday","Thursday"]
                    }
                ]
            }
        },
        methods: {
            setDates(){
                var date = new Date();
                var i,day = date.getDate();
                for(i=0;i<7;++i){
                    date.setDate(day+i);
                    this.allDates.push({
                        date: date.getDate(),
                        month: this.months[date.getMonth()],
                        day: this.days[date.getDay()]
                    });
                }
            },
            selectDoctor(clickedDoctor){
                this.selectedData.doctor = clickedDoctor;
                console.log(this.selectedData);
                this.choosableDates = this.allDates.filter((date)=>{
                    if(this.selectedData.doctor.days.includes(date.day))
                        return true;
                    return false;
                })
            },
            confirmBooking(){
                console.log("confirming booking");
            }
        }
    }
</script>