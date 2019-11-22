Module.register("MMM-LOL", {
  // Default module config.
  defaults: {
    title: "LOL Client",
    username: "supertrampsookah",
    apiKey: "",
  },

  // Override dom generator.
  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.title;

    if (this.config.apiKey === "") {
      wrapper.innerHTML = "Please set the correct LOL api key for module: " + this.name + ".";
      wrapper.className = "dimmed light small";
      return wrapper;
    }

    // if (!this.loaded) {
    //     wrapper.innerHTML = this.translate("LOADING");
    //     wrapper.className = "dimmed light small";
    //     return wrapper;
    // }

    var table = document.createElement("table");
    table.className = this.config.tableClass;

    friends = ['Eternal Phase',
      'jrKarki',
      'Dark Knight64',
      'Doctor Player',
      'superbatman13'
    ]

    for (var f in friends) {
      // var forecast = this.forecast[f];

      var row = document.createElement("tr");
      if (this.config.colored) {
        row.className = "colored";
      }
      table.appendChild(row);

      var nameCell = document.createElement("td");
      nameCell.className = "username";
      nameCell.innerHTML = friends[f];
      row.appendChild(nameCell);
    }

    return table;
  },

  getToken: function () {

  },

  // Define required scripts.
  getStyles: function () {
    return ["lol.css"];
  },

  start: function () {

  }
});
