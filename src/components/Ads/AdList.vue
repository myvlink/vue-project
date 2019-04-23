<template>
    <v-container>
        <v-layout row v-if="!loading && myAds.length !== 0">
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text-secondary mb-3">Ad List</h1>
                <v-card 
                  class="elevation-10 mb-5"
                  v-for="ad in myAds"
                  :key="ad.id"
                >
                  <v-layout row align-center>
                    <v-flex xs6>
                      <v-img
                        height="175px"
                        :src="ad.imageSrc"
                      ></v-img>
                    </v-flex>
                    <v-flex xs8>
                      <v-card-text class="text--primary">
                        <h2>{{ ad.title }}</h2>
                        <p>{{ ad.description }}</p>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          class="info"
                          :to="`/ad/${ad.id}`"
                        >Open</v-btn>
                      </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout v-else-if="!loading && myAds.length === 0">
          <v-flex xs12 class="text-xs-center">
            <h1 class="text--primary">You have no ads</h1>
          </v-flex>
        </v-layout>
        <v-layout v-else>
          <v-progress-circular
            :size="100"
            :width="7"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
</style>
