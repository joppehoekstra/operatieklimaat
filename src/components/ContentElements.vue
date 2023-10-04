<template>
  <div v-for="(element, index) in content" :key="index">
    <ElementBlocks
      v-if="element.collection === 'block_groups'"
      :blocks="element.item.blocks"
    />
    <ElementButtonGroup
      v-if="element.collection === 'buttons'"
      :button="element.item"
    />
    <ElementEvents
      v-if="element.collection === 'events'"
      :eventSingle="element.item"
    />
    <ElementEvents
      v-if="element.collection === 'event_collections'"
      :eventCollection="element.item"
    />
    <ElementForm v-if="element.collection === 'forms'" :form="element.item" />
    <ElementText
      v-if="element.collection === 'content_text'"
      :text="element.item"
    />
  </div>
</template>
<script>
import ElementBlocks from "./elements/ElementBlocks.vue";
import ElementButtonGroup from "./elements/ElementButtonGroup.vue";
import ElementEvents from "./elements/ElementEvents.vue";
import ElementForm from "./elements/ElementForm.vue";
import ElementText from "./elements/ElementText.vue";

export default {
  components: {
    ElementBlocks,
    ElementButtonGroup,
    ElementEvents,
    ElementForm,
    ElementText,
  },
  props: ["content"],
};
</script>
