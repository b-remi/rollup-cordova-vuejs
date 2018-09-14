<template>
    <div class="container" v-if="deviceready">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>

<script>
export default {
    data() {
        return {
            deviceready: false
        };
    },
    mounted: function() {
        console.log('App component mounted');
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    methods: {
        onDeviceReady() {
            console.log('Mobile App component device ready');
            this.deviceready = true;
            navigator.splashscreen.hide();
        }
    }
};
</script>
