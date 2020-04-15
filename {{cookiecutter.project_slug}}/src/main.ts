import Vue from "vue"
import Greeting from "./Greeting.vue"


new Vue({
    components: {
        greeting: Greeting,
    },
}).$mount("#app")
