<template>
    <app-template :has-menu="false">
        <p slot="app-title">{{ message }}</p>

        <div slot="app-content">
            <p>Hello App Content</p>
            <p>
                <md-button class="md-raised md-primary" :to="{ name: 'Test' }">GoTo Test</md-button>
                <md-button class="md-raised md-accent" :to="{ name: 'Test' }">Accent Button</md-button>
            </p>
        </div>
    </app-template>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello'
    };
  }
};
</script>
