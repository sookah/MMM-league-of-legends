Module.register("MMM-LOL", {
  // Default module config.
  defaults: {
    title: "LOL Client",
    username: "supertrampsookah",
    APIKey: "YOUR RIOT GAMES API KEY HERE",
    // Riot games api config
    region: "YOUR REGION",
  },

  // Override dom generator.
  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.title;

    if (!this.checkIfAPIKeyValid()) {
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
      'Dank Knight 64',
      'Doctor Player',
      'superbatman13'
    ]
    this.getSummonerData(friends[1]);
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
    wrapper.append(table);
    return wrapper;
  },

  getToken: function () {

  },

  // Define required scripts.
  getStyles: function () {
    return ["lol.css"];
  },

  start: function () {

  },

  getSummonerData: (summonerName) => {
    if (!this.checkIfAPIKeyValid()) {
      return;
    }

    URL = "https://" + this.config.region + ".api.riotgames.com/lol/v4/summoners/by-name/" + summonerName +
      "?api_key=" + this.config.APIKey;

    var summonerRequest = new XMLHttpRequest();
    summonerRequest.open("GET", URL, true);
    summonerRequest.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          Log.debug(JSON.parse(this.response));
        } else if (this.status === 401) {


        } else {
          Log.error(self.name + ": Could not load Summoner info for: " + summonerName);
        }

      }
    };
    summonerRequest.send();

  },

  checkIfAPIKeyValid: () => {
    if (this.config.APIKey === "") {
      Log.error(`{this.name} API key was not provided`);
      return false;
    }

    return true;
  }
});
