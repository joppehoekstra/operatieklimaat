<template>
  <q-page>
    <CoverImage image="c9b20a81-3d48-435d-9d57-076136b712c8" />
    <div class="q-gutter-y-xl">
      <ContainerPlain>
        <q-card class="cover-card">
          <q-card-section>
            <div class="q-gutter-y-md">
              <h1>Lokale groepen</h1>
              <div class="description">
                Op deze pagina vind je alle lokale groepen. Vind de groep bij
                jou in de buurt of kies uit een van onze landelijke
                themagroepen.
              </div>
              <q-input label="Postcode" outlined>
                <template #append>
                  <q-btn label="Zoek mijn groep" color="primary" no-caps />
                </template>
              </q-input>
            </div>
          </q-card-section>
          <div id="map" class="map"></div>
          <div
            v-for="group in groups"
            :key="group.id"
            :ref="'group-' + group.id"
            class="marker"
          >
            <!-- {{ group.name }} -->
            <q-btn
              icon="place"
              round
              color="primary"
              flat
              size="24px"
              padding="2px"
            >
              <q-tooltip :offset="[0, 2]" class="bg-white text-black">{{
                group.name
              }}</q-tooltip>
            </q-btn>
          </div>
        </q-card>
      </ContainerPlain>

      <ElementBlocks :blocks="blocks" />
    </div>
  </q-page>
</template>
<script>
// import tt from "@tomtom-international/web-sdk-maps";
import mapboxgl from "mapbox-gl";

import { useDirectus } from "@directus/sdk";
import { graphql } from "@directus/sdk/graphql";
const client = useDirectus("http://localhost:8055").use(graphql());

import CoverImage from "src/components/CoverImage.vue";
import ElementBlocks from "src/components/elements/ElementBlocks.vue";
import ContainerPlain from "src/components/containers/ContainerPlain.vue";

export default {
  components: { CoverImage, ElementBlocks, ContainerPlain },
  data: function () {
    return {
      mapStyle: "mapbox://styles/mapbox/basic-v10",
      centerCoordinates: [-111.549668, 39.014],
      groups: [],
    };
  },
  async mounted() {
    // this.$refs.map
    // addMarker(map);
    //     var map = tt.map({
    //   key: "<your maps api key>",
    //   container: "map",
    // })
    await this.fetchGroups();
    this.loadMap();
  },
  computed: {
    blocks() {
      let blocks = [];
      this.groups.forEach((group) => {
        blocks.push({ blocks_id: {title: group.name, buttonLabel: "Doe mee"}});
      });
      return blocks;
    },
  },
  methods: {
    loadMap() {
      // TO MAKE THE MAP APPEAR YOU MUST
      // ADD YOUR ACCESS TOKEN FROM
      // https://account.mapbox.com
      mapboxgl.accessToken =
        "pk.eyJ1Ijoiam9wcGVob2Vrc3RyYSIsImEiOiJjbGs5dWE2bmEwMHNtM2ttcXlzMW94dHZ5In0.A_GHMw6BEZtsmGdv7lQntw";
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: [5.10448, 52.092876], // starting position [lng, lat]
        zoom: 6, // starting zoom
      });

      const markers = [
        {
          type: "Feature",
          properties: {
            message: "Foo",
            iconSize: [60, 60],
          },
          geometry: {
            type: "Point",
            coordinates: [-66.324462, -16.024695],
          },
        },
        {
          type: "Feature",
          properties: {
            message: "Bar",
            iconSize: [50, 50],
          },
          geometry: {
            type: "Point",
            coordinates: [-61.21582, -15.971891],
          },
        },
        {
          type: "Feature",
          properties: {
            message: "Baz",
            iconSize: [40, 40],
          },
          geometry: {
            type: "Point",
            coordinates: [-63.292236, -18.281518],
          },
        },
      ];

      this.groups.forEach((group) => {
        markers.push(
          {
            type: "Feature",
            properties: {
              message: "Bar",
              iconSize: [50, 50],
            },
            geometry: {
              type: "Point",
              coordinates: group.location.coordinates,
            },
          }
          // {
          //   coordinates: group.location.coordinates,
          //   properties: {
          //     id: group.id,
          //     name: group.name,
          //   },
          // }
        );
      });

      // Add markers to the map.
      for (const group of this.groups) {
        new mapboxgl.Marker(this.$refs["group-" + group.id][0])
          .setLngLat(group.location.coordinates)
          .addTo(map);
      }
    },
    async fetchGroups() {
      const query = /* GraphQL */ `
        query fetchGroups {
          groups {
            id
            name
            location
          }
        }
      `;
      const result = await client.query(query);
      console.log(result.groups)
      let groups = []
      result.groups.forEach(group => {
        groups.push({blocks_id: {title: group.name}})
      });
      console.log(groups)
      this.groups = result.groups;
    },
  },
};
</script>
<style lang="scss" scoped>
.map {
  height: 60vh;
  overflow: hidden;
}
.marker {
  .q-btn {
    transform: translateY(-20px);
  }
}
</style>
