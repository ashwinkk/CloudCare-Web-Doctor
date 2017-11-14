<template>
    <div>
        <div>
            <h1>Book Appointment</h1>
        </div>
        <div>
            <div>
                <h2>Doctors</h2>
                <div class="grid-x">
                    <div class="small-4 cell" v-for="doctor in doctors" v-on:click="selectDoctor(doctor)">
                        <h3>{{doctor.name}}</h3>
                        <p>{{doctor.department}}</p>
                    </div>
                </div>
            </div>
            <div>
                <label for="select-date">Select Date</label>
                <select id="select-date" v-model="selectedData.date">
                    <option disabled>-Select Date-</option>
                    <option 
                        v-for="date in choosableDates" 
                        v-bind:value="`${date.date}${date.monthIndex}${date.year}`"
                        >
                        {{date.day}}, {{date.date}} {{date.month}}
                    </option>
                </select>
            </div>
        </div>
        <div>
            <div>
                <button 
                    class="button" 
                    @click="()=>{ confirmBooking();showCredentialInputs=false; }"
                    >
                    Book for self
                </button>
                <button 
                    class="button" 
                    @click="showCredentialInputs = true"
                    >
                    Book for someone
                </button>
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
        computed: {
            doctors: function(){
                return this.$store.getters.getDoctorSchedule;
            },
            selectedData: function(){
                return this.$store.getters.getBookedData;
            }
        },
        data(){
            return {
                allDates: [],
                showCredentialInputs: false,
                choosableDates: [],
                choosableDoctors: [],
                steps: 0,
                days: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
            }
        },
        created(){
            this.setDates();
        },
        beforeMount(){
            this.$store.dispatch("fetchDoctorSchedule");
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
                        day: this.days[date.getDay()],
                        year: date.getFullYear(),
                        monthIndex: date.getMonth()
                    });
                }
            },
            selectDoctor(clickedDoctor){
                this.selectedData.doctorid = clickedDoctor.doctorid;
                this.selectedData.doctorName = clickedDoctor.name;
                console.log(this.selectedData);
                this.choosableDates = this.allDates.filter((date)=>{
                    if(clickedDoctor.available.find((availableDate)=>availableDate.days==date.day))
                        return true;
                    return false;
                })
            },
            confirmBooking(){
                console.log("confirming booking");
                this.$store.dispatch("confirmBooking", this.selectedData);
                this.$router.push("/dashboard/booking-status");
            }
        }
    }
</script>