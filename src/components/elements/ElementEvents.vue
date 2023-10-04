<template>
  <div :class="{ 'bg-white q-py-xl': eventCollection }">
    <div class="max-width q-px-md">
      <h1 v-if="eventCollection" class="q-mb-lg">
        <q-icon name="event" class="q-mr-md" />{{ eventCollection.title }}
      </h1>
      <div class="q-gutter-y-sm">
        <div v-for="(event, index) in events" :key="index">
          <q-card class="event" flat bordered>
            <q-item clickable class="q-pa-none">
              <div class="row full-width">
                <q-img :ratio="3 / 1" class="bg-grey-3 col-sm-6 col-12" />
                <q-card-section class="col-sm-6 col-12">
                  <div class="q-gutter-y-sm">
                    <h3>{{ event.title }}</h3>
                    <div class="text-caption text-bold">
                      {{ event.date_start }}
                    </div>
                    <div>
                      {{ event.description }}
                    </div>
                    <q-btn
                      label="Meld je aan"
                      no-caps
                      color="primary"
                      unelevated
                      icon-right="arrow_forward"
                    />
                  </div>
                </q-card-section>
              </div>
            </q-item>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ContainerPlain from "../containers/ContainerPlain.vue";
export default {
  // components: { ContainerPlain },
  props: ["eventSingle", "eventCollection"],
  data() {
    return {
      // events: []
    };
  },
  computed: {
    events() {
      if (this.eventSingle) {
        return [this.eventSingle];
      } else if (this.eventCollection) {
        let events = [];
        this.eventCollection.events.forEach((event) => {
          events.push(event.events_id);
        });
        return events;
      } else return [];
    },
  },
};
</script>
<style scoped lang="scss">
.event .q-item {
  min-height: 200px;
}
</style>
