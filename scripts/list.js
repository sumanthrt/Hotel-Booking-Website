const url = window.location.search;
const urlParams = new URLSearchParams(url);
const city = urlParams.get("city");
const apiURL = `https://travel-advisor.p.rapidapi.com/locations/search?query=${city}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`;
const key = "7f9f15f992mshda3749cebff6b34p1f5740jsn7e5848b768e0";
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var jsonData = JSON.parse(this.responseText);

    getListView(jsonData.data);
  }
};

xhr.open("GET",apiURL);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key" , key);
xhr.send();

let getListView = (data) => {
  let name, img, address, locationId, rating;
  let hotel ="";
  const populateListView = (item) => {
    if (item.result_type == "lodging") {
      name = item.result_object.name;
      img = item.result_object.photo.images.large.url;
      address = item.result_object.address;
      locationId = item.result_object.location_id;
      rating = item.result_object.rating;
      hotel = hotel + `
      <div class="hotels">
            <a href="detail.html?id=${locationId}">
                <div class="clickImage">
                    <img src="${img}" alt="${name}">
                    <div class="hotelDetails">
                        <h3>${name}</h3>
                        <p>${rating}<i class="fa-solid fa-star fill"></i></p>
                        <p>${address}</p>
                    </div>
                </div>
            </a>
        </div>`;
    }
  };

  data.forEach(populateListView);

  let listView = document.getElementById("list-view");
  listView.innerHTML = hotel;
};
