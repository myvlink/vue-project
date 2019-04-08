<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h1 class="text--secondary mb-3">Create new ad</h1>
              <v-form
                    ref="form"
                    v-model="valid"
                    validation
                    class="mb-3"
              >
                <v-text-field
                    name="title"
                    label="Ad title"
                    type="text"
                    v-model="title"
                    required
                    :rules="[v => !!v || 'Title is required']"
                ></v-text-field>
                <v-textarea
                    name="description"
                    label="Ad discription"
                    type="text"
                    v-model="description"
                    required
                    :rules="[v => !!v || 'Description is required']"
                ></v-textarea>
              </v-form>
                <v-layout row mb-3>
                  <v-flex xs12>
                    <v-btn class="warning">
                      Upload
                      <v-icon right dark>cloud_upload</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <img src="" height="100">
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-switch
                    color="primary"
                      v-model="promo"
                      label="Add to promo?"
                    ></v-switch>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-spacer>
                      <v-btn
                        :disabled="!valid"
                        class="success"
                        @click="createAd"
                      >Create ad</v-btn>
                    </v-spacer>
                  </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
          title: '',
          description: '',
          promo: false,
          valid: false
        }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          // logic
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://cdn-images-1.medium.com/max/2600/1*Ko-vkqS8ZJSwVrq2tIf1ig.png'
          }
          this.$store.dispatch('createAd', ad)
        }
      }
    }
}
</script>
