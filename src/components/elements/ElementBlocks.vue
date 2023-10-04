<template>
  <div class="bg-primary q-py-xl">
    <div class="max-width q-px-md">
      <div class="row q-col-gutter-md justify-center">
        <div
          :class="{ 'col-sm-6': columns === 2, 'col-sm-4': columns === 3 }"
          class="col-12"
          v-for="(block, index) in blocks"
          :key="index"
        >
          <q-card flat class="overflow-hidden">
            <q-item clickable class="q-pa-none">
              <q-item-section>
                <q-img :ratio="2 / 1" class="bg-grey-4" />
                <q-card-section>
                  <div class="q-gutter-y-sm">
                    <h3>{{ block.blocks_id.title }}</h3>
                    <div>{{ block.blocks_id.description }}</div>
                    <q-btn
                      no-caps
                      outline
                      icon-right="arrow_forward"
                      :href="block.blocks_id.link"
                    >
                      {{ block.blocks_id.button_label }}
                    </q-btn>
                  </div>
                </q-card-section>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["blocks"],
  computed: {
    columns() {
      if (
        this.blocks.length % 3 === 0 ||
        (this.blocks.length > 2 && this.blocks.length % 2 !== 0)
      ) {
        return 3;
      } else {
        return 2;
      }
    },
  },
};
</script>
