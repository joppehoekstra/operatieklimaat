<template>
  <TransitionGroup class="q-col-gutter-md row" name="fields" tag="div">
    <div
      v-for="(field, index) in defaultFields"
      :key="index"
      class="field"
      :class="{
        'col-sm-6 col-12':
          field.item.width === 6 && (index !== 0 || firstFieldReady()),
        'col-12':
          field.item.width === 12 || (index === 0 && !firstFieldReady()),
      }"
      v-show="index === 0 || firstFieldReady()"
    >
      <q-input
        :label="field.item.label"
        outlined
        :autocomplete="field.item.autocomplete"
        :type="field.item.type"
        :placeholder="field.item.placeholder"
        v-model="fieldData[field.item.key]"
        required
      >
        <template #prepend>
          <q-icon :name="field.item.icon" />
        </template>
      </q-input>
      <div class="text-caption text-grey-8">{{ field.item.hint }}</div>
    </div>

    <!-- <q-input label="Voornaam" icon="badge">
      <template #prepend>
        <q-icon name="person" />
      </template>
    </q-input> -->
  </TransitionGroup>
  <q-btn
    :label="form.button_label"
    class="full-width q-mt-md"
    color="secondary"
    no-caps
    size="20px"
    unelevated
  />
</template>
<script>
export default {
  props: ["form"],
  data() {
    return {
      fieldData: {},
    };
  },
  computed: {
    defaultFields() {
      const defaultFields = [
        {
          item: {
            label: "E-mail",
            autocomplete: "email",
            placeholder: "greta@email.com",
            type: "email",
            icon: "email",
            key: "email",
            width: 6,
          },
        },
        {
          item: {
            label: "Voornaam",
            autocomplete: "given-name",
            placeholder: "Greta",
            type: "text",
            icon: "person",
            key: "voornaam",
            width: 6,
          },
        },
        {
          item: {
            label: "Telefoonnummer",
            autocomplete: "tel",
            placeholder: "0612345678",
            type: "tel",
            icon: "phone",
            key: "telefoon",
            width: 6,
          },
        },
        {
          item: {
            label: "Postcode",
            autocomplete: "postcode",
            placeholder: "1234AB",
            type: "text",
            icon: "map",
            key: "postcode",
            width: 6,
          },
        },
        ...this.form.questions,
      ];
      return defaultFields;
    },
  },
  methods: {
    firstFieldReady() {
      if (this.fieldData[this.defaultFields[0].item.key]?.length > 4) {
        return true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.fields-enter-active:not(.field:nth-child(2)) {
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.fields-enter-active.field:nth-child(2) {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fields-enter-from,
.fields-leave-to {
  // height: 0 !important;
  transform: translateX(4px);
}
</style>
<!--

  - rechapta voor form submissions
  - custom form identifier (action code)
  - type velden:
    - text: adres
    - date: year, month, day, time
    - checkbox (horizontaal of verticaal)
    - textarea
    - options: checkbox, radio, dropdown
  - verplichte velden
  - custom content boven formulier
  - automatisch invullen via url & key
  - hidden fields
  - automatisch data in local storage opslaan
  - hoe utm codes meenemen?
  - validation & error message (geen mask voor nu)
    - validation: min max length, regex
  - typen velden: datum
  - conditional fields (basis van andere antwoorden): only show when field X has value X
  - default value (vaak gebruikt voor hidden fields, maar ook voor radio & checkboxes)
 -->
