<template>
  <q-list>
    <q-item v-for="event in events" :key="event.id" clickable>
      <q-item-section>
        l
        <q-item-label>Titel: {{ event.titel }}</q-item-label>
        <q-item-label>Datum: {{ event.datum }}</q-item-label>
        <q-item-label>Afbeelding: {{ event.afbeelding }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
import { useDirectus } from "@directus/sdk";
import { graphql } from "@directus/sdk/graphql";
const client = useDirectus("http://localhost:8055").use(graphql());

export default {
  async mounted() {
    await this.publicData();
    console.log("tes!t");
  },
  data: function () {
    return {
      events: null,
    };
  },
  methods: {
    async publicData() {
      // GET DATA
      const result = await client.query(
        `
          query {
              Evenementen {
                  id
                  titel
                  datum
                  beschrijving

              }
          }
      `
      );

      this.events = result.Evenementen;

      console.log(result);
    },
  },
};
</script>
