
const apiKey = "zH6mTw/hMVJekMiT5U2FsA==o3kKe3eaQy0lukQ7";
const jokeEL = document.getElementById("joke");
const options = {
    method: "GET",
    headers: {
        "X-Api-Key":apiKey,
    }
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

  async function getJoke(){
    document.getElementById("joke").innerHTML = "carregando...."
    const response = await fetch(apiURL, options)
    const data = await response.json()
    document.getElementById("joke").innerHTML = data[0].joke;

}

//document.getElementById("joke").innerHTML = data[0].joke;