<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner-TracerStudy.jpg">
        <v-app class="main-container">
            <div class="mt-16 d-flex justify-center flex-column">
                <h2 class="text-md-h2 font-weight-black text-dark-blue">Tracer Study</h2>
                <hr class="divider-medium">
            </div>
            <div class="main-grid mt-8">
                <div class="tracer-study-container">
                    <p id="description-tracer-study">
                        Tracer Study merupakan metode yang digunakan untuk mendapatkan umpan balik dari alumni 
                        Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung. Setiap lulusan akan disurvey 
                        sebanyak dua kali; waktu pertama adalah satu tahun setelah lulus dan waktu kedua adalah empat tahun setelah lulus.
                        Tracer study dilakukan dengan tujuan melihat kesesuian pekerjaan alumni JTK dengan apa yang dipelajarinya selama kuliah. 
                        Tracer study didasarkan pada tiga aspek, yaitu: 1) Kesesuaian bidang profesi dengan bidang informatika, 2) Level perusahaan 
                        tempat alumni bekerja, dan 3) Rerata gaji yang didapatkan oleh alumni satu tahun setelah lulus dan empat tahun kemudian.
                    </p>
                    <h1 class="mt-8 mb-3">Kesesuaian Bidang Profesi</h1>
                    <div class="tracer-study-chart">
                        <h3>Alumni D4 2017 dan D3 2018</h3>
                        <ApexChart 
                            ref="realtimeChart"
                            width="700" type="pie" 
                            :options="label_bidang_profesi.options" :series="freshgraduates.bidang_profesi">
                        </ApexChart>  
                    </div>
                    <div class="tracer-study-chart">
                        <h3>Alumni D4 2013 dan D3 2014</h3>
                        <ApexChart 
                            ref="realtimeChart"
                            width="700" type="pie" 
                            :options="label_bidang_profesi.options" :series="alumnus.bidang_profesi">
                        </ApexChart> 
                    </div>
                    <h1 class="mt-8 mb-3">Level Perusahaan </h1>
                    <div class="tracer-study-chart">
                        <h3>Alumni D4 2017 dan D3 2018</h3>
                        <ApexChart 
                            ref="realtimeChart"
                            width="500" type="pie" 
                            :options="label_level_perusahaan.options" :series="freshgraduates.level_perusahaan">
                        </ApexChart>
                    </div>
                    <div class="tracer-study-chart">
                        <h3>Alumni D4 2013 dan D3 2014</h3>
                        <ApexChart 
                            ref="realtimeChart"
                            width="600" type="pie" 
                            :options="label_level_perusahaan.options" :series="alumnus.level_perusahaan">
                        </ApexChart>
                        
                    </div> 
                    <h1 class="mt-8 mb-3">Rerata Gaji </h1>
                    <div class="tracer-study-chart">
                        <h3>Alumni D4 2017 dan D3 2018</h3>
                        <ApexChart 
                            ref="realtimeChart"
                            width="700" type="pie" 
                            :options="label_rerata_gaji.options" :series="freshgraduates.rerata_gaji">
                        </ApexChart> 
                        
                    </div>
                    <div class="tracer-study-chart">
                        <h3>Alumni D4 2013 dan D3 2014</h3>
                        <ApexChart 
                            ref="realtimeChart"
                            width="700" type="pie" 
                            :options="label_rerata_gaji.options" :series="alumnus.rerata_gaji">
                        </ApexChart>  
                    </div>
                </div>
                <div> 
                    <side-bar />
                </div>
            </div>
        </v-app>
        <footer-page />
    </v-app>
</template>

<script>
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import FooterPage from '../components/FooterPage'

export default {
    components: {
      NavBar, FooterPage, SideBar
    },
    data() {
        return {
            label_bidang_profesi: {
                options: {
                    labels: [
                        "Frontend Developer",
                        "Backend Developer",
                        "Full-Stack Developer",
                        "Cloud Engineer",
                        "Database Engineer",
                        "Data Engineer",
                        "Game Developer",
                        "Mobile Developer",
                        "Data Scientist",
                        "DevOps Engineer",
                        "System Analyst",
                        "Network and Systems Administrator",
                        "Non Informatika"
                    ],
                    colors: [
                                '#1C86EE', 
                                '#1E90FF', 
                                '#739AC5', 
                                '#499DF5', 
                                '#7AA9DD',
                                '#6E7B8B',
                                '#4372AA',
                                '#687C97',
                                '#4973AB',
                                '#4D71A3',
                                '#3579DC',
                                '#1464F4',
                                '#FF5733'
                            ]
                }
            },
            label_level_perusahaan: {
                options: {
                    labels: [
                        "Nasional",
                        "Multinasional",
                        "Global",
                        "Internasional"
                    ]
                }
            },
            label_rerata_gaji: {
                options: {
                    labels: [
                        "Rp0-Rp3.600.000",
                        "Rp3.700.000-Rp5.000.000",
                        "Rp5.000.000-Rp8.000.000",
                        "Rp8.000.000-Rp12.000.000",
                        "Rp12.000.000-Rp15.000.000",
                        ">Rp15.000.000"
                    ]
                }
            },
            freshgraduates: {
                bidang_profesi: [10, 5, 10, 3, 8, 7, 5, 6, 2, 6, 9, 1, 14],
                level_perusahaan: [80, 3, 1, 2],
                rerata_gaji: [0, 50, 28, 6, 2, 0]
            },
            alumnus: {
                bidang_profesi: [2, 3, 4, 4, 1, 4, 2, 3, 13, 10, 7, 6, 27],
                level_perusahaan: [53, 15, 2, 9],
                rerata_gaji: [0, 0, 0, 8, 59, 12]
            }
        }
    },
    mounted() {
        console.log(this.bidang_profesi)
    }
}
</script>

<style>
.tracer-study-container {
    color: #070D59;;
}
#description-tracer-study {
    width: 800px;
    text-align: justify;
}

.tracer-study-chart {
    width: 700px;
    margin-bottom: 20px;
    border-style: solid;
}

.tracer-study-chart h3{
    margin-top: 20px;
    margin-bottom: 4px;
    text-align: center;
    color: #070D59;
    text-decoration: underline;
    text-decoration-color: #F7B633;
}
</style>