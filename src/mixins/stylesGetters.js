export default {
    computed: {
        xs() {
            const breakpoint = this.$vuetify.breakpoint.name;
            return breakpoint === "xs" ? "xs" : "";
        },
        sm() {
            const breakpoint = this.$vuetify.breakpoint.name;
            return breakpoint === "xs" ? "" : "sm";
        },
    }
}