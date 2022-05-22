<template>
    <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
    >
        <v-slide-item
            v-for="(agenda) in agendas"
            :key="agenda.id"
            v-slot="{ active, toggle }"
        >
            <v-card
                class="ma-4 "
                height="500"
                width="400"
                @click="toggle"
            >
                <div class="agenda-container">
                    <v-img
                        :lazy-src="agenda.foto_agenda[0].url"
                        :src="agenda.foto_agenda[0].url"
                        :aspect-ratio="9/16"
                        max-height="500"
                        class="image"
                    ></v-img>
                    <div class="overlay"></div>
                    <div class="text">
                        <p id="agenda-title">{{ agenda.judul }}</p>
                        <div id="agenda-detail">
                            <div class="d-flex"> 
                                <v-icon
                                    small
                                    color="#F7B633"
                                    v-text="'mdi-calendar-range'"
                                    class="align-start icon"
                                ></v-icon>
                                <p id="agenda-date">{{ agenda.tanggal }}</p>
                            </div>
                            <div class="d-flex"> 
                                <v-icon
                                    small
                                    color="#F7B633"
                                    v-text="'mdi-note-text'"
                                    class="align-start icon"
                                ></v-icon>
                                <p id="agenda-description">{{ agenda.deskripsi }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                    <v-scale-transition>
                        <v-icon
                            v-if="active"
                            color="white"
                            size="48"
                            v-text="'test'"
                        ></v-icon>
                    </v-scale-transition>
                </v-row>
            </v-card>
        </v-slide-item>
    </v-slide-group>
</template>


<script>
import axios from 'axios';

export default {
    name: "CarouselAgenda",
    data(){
		return {
            agendas: [],
		}
  },
  mounted() {
        axios
            .get("http://localhost:1337/agenda-jurusans")
            .then(response => {
            this.agendas = response.data;
            this.agendas = this.agendas.sort((a, b) => (a.tanggal > b.tanggal) ? 1 : (b.tanggal > a.tanggal) ? -1 : 0);
            console.log(this.agendas.map(x => x.foto_agenda[0].url));
            });
  },
}
</script>

<style>
.v-application p {
    font-size: 16px;
    margin-bottom: 8px !important;
}
.agenda-container {
    position: relative;
}
.agenda-image {
    display: block;
    width: 100%;
    height: auto;
}
.icon {
    padding-top: 2px;
    padding-right: 5px;
}
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #070D59;
}
.text {
    top: 50%;
    left: 50%;
    opacity: 0;
    width: 280px;
    color: white;
    position: absolute;
    text-align: justify;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
}
.agenda-container:hover .overlay {
  opacity: 0.75;
}
.agenda-container:hover .text {
  opacity: 1;
}
#agenda-title {
    text-align: center;
    margin-bottom: 25px !important;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: #F7B633;
}
</style>