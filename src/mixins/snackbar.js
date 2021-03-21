export default {
    data: () => ({
        snackbar: {
            text: "",
            show: false,
        },
    }),
    methods: {
        showSnackbar(text) {
            this.snackbar.text = text;
            this.snackbar.show = true;
        }
    }
}