Module.register("MMM-LOL", {
  // Default module config.
  defaults: {
    title: "LOL Client",
    username: "supertrampsookah"
  },

  // Override dom generator.
  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.title;
    return wrapper;
  }
});
