<template>
  <q-page v-if="page">
    <CoverImage :image="page.image.id" />
    <div class="q-gutter-y-xl">
      <ContainerPlain>
        <q-card flat bordered class="call-to-action cover-card">
          <q-card-section style="padding: 3vw">
            <div class="q-gutter-y-md">
              <h1>{{ page.title }}</h1>
              <div class="description">
                {{ page.description }}
              </div>
              <div v-if="page.form">
                <ElementForm :form="page.form" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </ContainerPlain>

      <ContentElements :content="page.content" />
    </div>
  </q-page>
</template>
<script>
import { mapStores } from "pinia";
import { usePagesStore } from "stores/pages";
import CoverImage from "components/CoverImage.vue";
import ContentElements from "components/ContentElements.vue";
import ContainerPlain from "src/components/containers/ContainerPlain.vue";
import ElementForm from "src/components/elements/ElementForm.vue";
export default {
  components: { CoverImage, ContentElements, ContainerPlain, ElementForm },
  computed: {
    ...mapStores(usePagesStore),
    page() {
      return this.pagesStore.pages[this.pageID];
    },
    pageID() {
      if (!this.$route.params.pathID) {
        return "home";
      } else return this.$route.params.pathID;
    },
  },
  async mounted() {
    await this.pagesStore.getPage(this.pageID);
  },
};
</script>
