<template>
    <div class="page-container" v-touch:swipe.left="hideMenu" v-touch:swipe.right="showMenu">
        <md-app md-waterfall md-mode="fixed">

            <md-app-toolbar class="md-primary">
                <div class="md-toolbar-row">
                    <md-button v-if="hasMenu" class="md-icon-button" @click="toogleMenu">
                        <md-icon>menu</md-icon>
                    </md-button>
                    <span class="md-title">
                        <slot name="app-title">Default app title</slot>
                    </span>
                </div>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuVisible" v-if="hasMenu" v-on:click="hideMenu">

                <md-toolbar class="md-transparent" md-elevation="0">
                    Navigation
                </md-toolbar>

                <md-list>
                    <slot name="app-menu-list">Default app menu</slot>
                </md-list>

            </md-app-drawer>

            <md-app-content>
                <slot name="app-content">
                    Default app content
                </slot>
            </md-app-content>
        </md-app>
    </div>
</template>
<script>
export default {
  props: {
    hasMenu: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      menuVisible: false
    };
  },
  created: function() {
    this.$router.afterEach((to, from) => {
      this.hideMenu();
    });
  },
  methods: {
    toogleMenu() {
      if (this.menuVisible === true) {
        this.hideMenu();
      } else {
        this.showMenu();
      }
    },
    hideMenu() {
      this.menuVisible = false;
    },
    showMenu() {
      this.menuVisible = true;
      this.$emit('showMenu');
    }
  }
};
</script>
