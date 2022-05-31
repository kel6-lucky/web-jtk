<template>
    <div id="app">
        <v-app dark>
            <v-layout row justify-cente>
                <v-btn color="dark" dark @click="dialog = true">Detail</v-btn>
                    <v-dialog v-model="dialog" max-width="40%">
                        <v-card>
                            <v-card-title class="headline">Gefi Aulia Sanjaya</v-card-title>
                            <div class="d-flex flex-row">
                                <div>
                                    <v-img
                                        class="ml-5 mb-0"
                                        src="../assets/photos/SamplePrestasi.jpg"
                                        height="100%"
                                    >
                                    </v-img>
                                </div>
                                <div>
                                    <div class="ml-5">    
                                        <p class="mb-0">Daftar Anggota: </p>
                                        <p><v-icon>mdi-square-small</v-icon>Gefi Aulia Sanjaya</p>
                                    </div>
                                </div>
                            </div>
                            <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="#50BA87" flat="flat" @click="dialog = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                </v-dialog>
            </v-layout>   
        </v-app>
    </div>
</template>