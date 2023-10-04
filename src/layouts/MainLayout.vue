<template>
  <q-layout view="lHh Lpr lFf" class="bg-accent">
    <div class="header">
      <nav class="flex items-center justify-between max-width">
        <img
          alt="Milieudefensie"
          src="~assets/logo.png"
          style="width: 230px; height: 81px"
          class="cursor-pointer"
          @click="$router.push('/')"
        />
        <q-space />
        <span class="q-mr-md gt-xs">
          <q-btn
            label="Doe mee!"
            color="secondary"
            no-caps
            unelevated
            size="20px"
            padding="6px 20px"
            class="shadow-12"
          />
        </span>
        <span class="q-mr-md">
          <q-btn
            icon="menu"
            color="white"
            text-color="black"
            round
            unelevated
            class="shadow-12"
            size="16px"
            @click="menuOpen = true"
          />
        </span>
      </nav>
    </div>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />

      <footer class="max-width q-py-xl q-px-md text-grey">
        Milieudefensie - Veranderaarsplatform
      </footer>

      <div class="fullscreen bg-accent" v-if="menuOpen">
        <div class="header">
          <nav class="flex items-center justify-between max-width">
            <img
              alt="Quasar logo"
              src="~assets/logo.png"
              style="width: 230px; height: 81px"
            />
            <q-space />

            <span class="q-mr-md">
              <q-btn
                icon="close"
                round
                flat
                @click="menuOpen = false"
                size="16px"
              />
            </span>
          </nav>
        </div>
        <!-- <q-toolbar class="q-py-md">
          <q-toolbar-title class="text-primary text-bold">
            Operatie Klimaat
          </q-toolbar-title>
          <q-btn icon="close" round flat @click="menuOpen = false" />
        </q-toolbar> -->
        <q-page class="max-width-small q-pa-md" style="margin-top: 96px">
          <div class="q-gutter-y-md">
            <q-btn
              label="Agenda"
              class="full-width bg-white"
              no-caps
              size="20px"
              icon-right="event"
              flat
              align="between"
              padding="md"
            />
            <q-btn
              label="Lokale groepen"
              class="full-width bg-white"
              no-caps
              size="20px"
              icon-right="place"
              flat
              align="between"
              padding="md"
              @click="
                {
                  $router.push('/groepen');
                  menuOpen = false;
                }
              "
            />
            <q-btn
              label="Actie toolkit"
              class="full-width bg-white"
              no-caps
              size="20px"
              icon-right="menu_book"
              flat
              align="between"
              padding="md"
            />
            <q-btn
              label="Doe mee"
              class="full-width"
              color="primary"
              no-caps
              icon-right="arrow_forward"
              size="20px"
              align="between"
              padding="md"
              unelevated
            />
            <div class="text-center q-mt-xl">
              <div class="q-mb-md text-bold">
                Blijf op de hoogte! Meld je aan voor onze WhatsApp groep:
              </div>
              <q-btn
                label="WhatsApp groep"
                color="primary"
                no-caps
                icon-right="notifications"
                size="20px"
                align="between"
                outline
                padding="sm xl"
              />
            </div>
          </div>
        </q-page>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data: function () {
    return {
      menuOpen: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  top: 0;
  position: absolute;
  width: 100%;
  z-index: 100;
}
nav {
  // max-width: 800px;
  padding: 0 6px;
  // margin: auto;
}
</style>
