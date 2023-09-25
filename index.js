const breakingNewsBtn = document.getElementById("brNews");
const regularNewsBtn = document.getElementById("regularNews");
const interNationalNewsBtn = document.getElementById("irnNews");
const sportsNewsBtn = document.getElementById("sportsNews");
const entertainmentNewsBtn = document.getElementById("entertainment");
const cultureNewsBtn = document.getElementById("cultureNews");
const artNewsBtn = document.getElementById("artNews");
const allNewsBtn = document.getElementById("allNews");


const newsContainer = document.getElementById("news-container");
const titleComtainer = document.getElementById("title");

// function for clear the container
function clearNewsContainer() {
  const newsContainer = document.getElementById("news-container");
  while (newsContainer.firstChild) {
    newsContainer.removeChild(newsContainer.firstChild);
  }
}
// function for open the PopUp Box
function openPopup(title, details, author, date, rating, ratingQuality, totalView) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupDetails = document.getElementById("popup-details");
  const popupAuthorName = document.getElementById("popup-author-name");
  const popupAuthorImg = document.getElementById("popup-author-img");
  const popupDate = document.getElementById("popup-date");
  const popupRatingValue = document.getElementById("popup-rating-value");
  const popupRatingQuality = document.getElementById("popup-rating-quality");
  const popupTotalView = document.getElementById("popup-total-view");

  popup.style.display = "block";
  popupTitle.innerText = title;
  popupTitle.style.color = "blue";
  popupTitle.style.fontWeight = "bold";
  popupTitle.style.marginLeft = "2.1rem";

  // Limit the details to 800 characters
  const maxChars = 600;
  if (details.length > maxChars) {
    popupDetails.innerText = details.substring(0, maxChars) + "...";
  } else {
    popupDetails.innerText = details;
  }

  popupAuthorName.innerHTML = ` Author Name : ${author.name}`;
  popupAuthorImg.src = author.img;
  popupAuthorImg.style.height = "30px"; // Set height to 20px
  popupAuthorImg.style.width = "30px"; // Set width to 20px
  popupAuthorImg.style.borderRadius = "50%";
  popupAuthorImg.style.marginLeft = "2.1rem";
  popupDate.innerHTML = `Date : ${date}`; // Set the date
  popupRatingValue.innerHTML = `Rating : ${rating} <br>`; // Set the rating value
  popupRatingValue.style.marginLeft = "2.1rem";
  popupRatingValue.style.color = "orange";
  popupRatingQuality.innerHTML = `Rating Quality : ${ratingQuality}`; // Set the rating quality
  popupRatingQuality.style.marginLeft = "2.1rem";
  popupRatingQuality.style.color = "orange";
  popupTotalView.innerHTML = `Total View : ${totalView}`; // Set the total views
}
// function for close the PopUp Box
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}


//  all fuction start here for extract the data through API
const getBreakinNews = async () => {
  // Clear the news container
  clearNewsContainer();
  const url = "https://openapi.programming-hero.com/api/news/category/01";

  try {
    titleComtainer.innerText = "";
    const response = await fetch(url);
    const data = await response.json();
    const brNews = data;
    const length = brNews.data.length;

    // Sort news based on total views
    brNews.data.sort((a, b) => b.total_view - a.total_view);

    brNews.data.map((ele) => {
      titleComtainer.style.display = "block";
      title.innerHTML = `<b>${length}</b> news found for the category of <b> <i> Breaking News </i></b>`;

      const cardDiv = document.createElement("div");
      const cardDivLeft = document.createElement("div");
      const cardDivRight = document.createElement("div");
      const spanDiv = document.createElement("div");

      const imgLogo = document.createElement("img");
      const newsHeading = document.createElement("h3");
      const limitedDetails = document.createElement("p");
      const fullDetails = document.createElement("p");
      const writerLogo = document.createElement("img");
      const writerName = document.createElement("p");
      const date = document.createElement("p");
      const totalView = document.createElement("p");
      const button = document.createElement("button"); // Changed this to a button

      // Display only 400 words of details initially
      const limitedDetailText = ele.details.substring(0, 400);
      limitedDetails.innerText = limitedDetailText + " ...";
      fullDetails.innerText = ele.details;
      fullDetails.style.display = "none"; // Initially hide full details
      imgLogo.src = ele.thumbnail_url;
      newsHeading.innerText = ele.title;
      writerLogo.src = ele.author.img;
      writerName.innerText = ele.author.name;
      date.innerText = ele.author.published_date;
      totalView.innerHTML = `<i class="fa-solid fa-eye"></i>${ele.total_view}`;
      button.innerText = "Read More";
      button.style.padding = ".7rem";
      button.style.border = "1px solid blue";
      button.style.color = "blue";
      button.style.cursor = "pointer";
      button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click

      cardDivLeft.appendChild(imgLogo);
      cardDivRight.appendChild(newsHeading);
      cardDivRight.appendChild(limitedDetails); // Display limited details initially
      cardDivRight.appendChild(fullDetails); // Add full details to the card
      spanDiv.appendChild(writerLogo);
      spanDiv.appendChild(writerName);
      spanDiv.appendChild(date);
      spanDiv.appendChild(totalView);
      spanDiv.appendChild(button);

      newsContainer.appendChild(cardDiv);
      cardDiv.appendChild(cardDivLeft);
      cardDiv.appendChild(cardDivRight);
      cardDivRight.appendChild(spanDiv);

      cardDiv.style.display = "flex";
      cardDiv.style.backgroundColor = "white";
      cardDiv.style.marginBottom = "25px";
      spanDiv.style.display = "flex";
      spanDiv.style.justifyContent = "center";
      spanDiv.style.alignItems = "center";
      cardDivRight.style.padding = "1rem";
      writerLogo.style.height = "25px";
      writerLogo.style.width = "25px";
      writerLogo.style.borderRadius = "50%";
    });
  } catch (err) {
    throw err;
  }
};


const getRegularNews = async () => {
  clearNewsContainer();
  const url = "https://openapi.programming-hero.com/api/news/category/02";

  try {
    titleComtainer.innerText = "";
    const response = await fetch(url);
    const data = await response.json();
    const regularNews = data;
    const length = regularNews.data.length;

    regularNews.data.sort((a, b) => b.total_view - a.total_view);

    regularNews.data.map((ele) => {
      titleComtainer.style.display = "block";
      title.innerHTML = `<b>${length}</b> news found for the category of <b> <i> Regular News </i></b>`;

      const cardDiv = document.createElement("div");
      const cardDivLeft = document.createElement("div");
      const cardDivRight = document.createElement("div");
      const spanDiv = document.createElement("div");

      const imgLogo = document.createElement("img");
      const newsHeading = document.createElement("h3");
      const limitedDetails = document.createElement("p"); // Container for limited details
      const fullDetails = document.createElement("p"); // Container for full details
      const writerLogo = document.createElement("img");
      const writerName = document.createElement("p");
      const date = document.createElement("p");
      const totalView = document.createElement("p");
      const button = document.createElement("button"); // Changed this to a button

      // Display only 400 words of details initially
      const limitedDetailText = ele.details.substring(0, 800);
      limitedDetails.innerText = limitedDetailText + " ...";
      fullDetails.innerText = ele.details;
      fullDetails.style.display = "none"; // Initially hide full details
      imgLogo.src = ele.thumbnail_url;
      newsHeading.innerText = ele.title;
      writerLogo.src = ele.author.img;
      writerName.innerText = ele.author.name;
      date.innerText = ele.author.published_date;
      totalView.innerHTML = `<i class="fa-solid fa-eye"></i>${ele.total_view}`;
      button.innerText = "Read More";
      button.style.padding = ".7rem";
      button.style.border = "1px solid blue";
      button.style.color = "blue";
      button.style.cursor = "pointer";
      button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click

      cardDivLeft.appendChild(imgLogo);
      cardDivRight.appendChild(newsHeading);
      cardDivRight.appendChild(limitedDetails); // Display limited details initially
      cardDivRight.appendChild(fullDetails); // Add full details to the card
      spanDiv.appendChild(writerLogo);
      spanDiv.appendChild(writerName);
      spanDiv.appendChild(date);
      spanDiv.appendChild(totalView);
      spanDiv.appendChild(button);

      newsContainer.appendChild(cardDiv);
      cardDiv.appendChild(cardDivLeft);
      cardDiv.appendChild(cardDivRight);
      cardDivRight.appendChild(spanDiv);

      cardDiv.style.display = "flex";
      cardDiv.style.backgroundColor = "white";
      cardDiv.style.marginBottom = "25px";
      spanDiv.style.display = "flex";
      spanDiv.style.justifyContent = "center";
      spanDiv.style.alignItems = "center";
      cardDivRight.style.padding = "1rem";
      writerLogo.style.height = "25px";
      writerLogo.style.width = "25px";
      writerLogo.style.borderRadius = "50%";
    });
  } catch (err) {
    throw err;
  }
};
const getIrnNews = async () => {
  clearNewsContainer();
  const url = "https://openapi.programming-hero.com/api/news/category/03";

  try {
    titleComtainer.innerText = "";
    const response = await fetch(url);
    const data = await response.json();
    const irnNews = data;
    const length = irnNews.data.length;

    irnNews.data.sort((a, b) => b.total_view - a.total_view);

    irnNews.data.map((ele) => {
      titleComtainer.style.display = "block";
      title.innerHTML = `<b>${length}</b> news found for the category of <b> <i> International News </i></b>`;

      const cardDiv = document.createElement("div");
      const cardDivLeft = document.createElement("div");
      const cardDivRight = document.createElement("div");
      const spanDiv = document.createElement("div");

      const imgLogo = document.createElement("img");
      const newsHeading = document.createElement("h3");
      const limitedDetails = document.createElement("p"); // Container for limited details
      const fullDetails = document.createElement("p"); // Container for full details
      const writerLogo = document.createElement("img");
      const writerName = document.createElement("p");
      const date = document.createElement("p");
      const totalView = document.createElement("p");
      const button = document.createElement("button"); // Changed this to a button

      // Display only 400 words of details initially
      const limitedDetailText = ele.details.substring(0, 800);
      limitedDetails.innerText = limitedDetailText + " ...";
      fullDetails.innerText = ele.details;
      fullDetails.style.display = "none"; // Initially hide full details
      imgLogo.src = ele.thumbnail_url;
      newsHeading.innerText = ele.title;
      writerLogo.src = ele.author.img;
      writerName.innerText = ele.author.name;
      date.innerText = ele.author.published_date;
      totalView.innerHTML = `<i class="fa-solid fa-eye"></i>${ele.total_view}`;
      button.innerText = "Read More";
      button.style.padding = ".7rem";
      button.style.border = "1px solid blue";
      button.style.color = "blue";
      button.style.cursor = "pointer";
      button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click

      cardDivLeft.appendChild(imgLogo);
      cardDivRight.appendChild(newsHeading);
      cardDivRight.appendChild(limitedDetails); // Display limited details initially
      cardDivRight.appendChild(fullDetails); // Add full details to the card
      spanDiv.appendChild(writerLogo);
      spanDiv.appendChild(writerName);
      spanDiv.appendChild(date);
      spanDiv.appendChild(totalView);
      spanDiv.appendChild(button);

      newsContainer.appendChild(cardDiv);
      cardDiv.appendChild(cardDivLeft);
      cardDiv.appendChild(cardDivRight);
      cardDivRight.appendChild(spanDiv);

      cardDiv.style.display = "flex";
      cardDiv.style.backgroundColor = "white";
      cardDiv.style.marginBottom = "25px";
      spanDiv.style.display = "flex";
      spanDiv.style.justifyContent = "center";
      spanDiv.style.alignItems = "center";
      cardDivRight.style.padding = "1rem";
      writerLogo.style.height = "25px";
      writerLogo.style.width = "25px";
      writerLogo.style.borderRadius = "50%";
    });
  } catch (err) {
    throw err;
  }
};
const getSportsNews = async () => {
  clearNewsContainer();
  const url = "https://openapi.programming-hero.com/api/news/category/04";

  try {
    titleComtainer.innerText = "";
    const response = await fetch(url);
    const data = await response.json();
    const sportsNews = data;
    const length = sportsNews.data.length;

    sportsNews.data.sort((a, b) => b.total_view - a.total_view);

    sportsNews.data.map((ele) => {
      titleComtainer.style.display = "block";
      title.innerHTML = `<b>${length}</b> news found for the category of <b> <i> Sports News </i></b>`;

      const cardDiv = document.createElement("div");
      const cardDivLeft = document.createElement("div");
      const cardDivRight = document.createElement("div");
      const spanDiv = document.createElement("div");

      const imgLogo = document.createElement("img");
      const newsHeading = document.createElement("h3");
      const limitedDetails = document.createElement("p"); // Container for limited details
      const fullDetails = document.createElement("p"); // Container for full details
      const writerLogo = document.createElement("img");
      const writerName = document.createElement("p");
      const date = document.createElement("p");
      const totalView = document.createElement("p");
      const button = document.createElement("button"); // Changed this to a button

      // Display only 400 words of details initially
      const limitedDetailText = ele.details.substring(0, 800);
      limitedDetails.innerText = limitedDetailText + " ...";
      fullDetails.innerText = ele.details;
      fullDetails.style.display = "none"; // Initially hide full details
      imgLogo.src = ele.thumbnail_url;
      newsHeading.innerText = ele.title;
      writerLogo.src = ele.author.img;
      writerName.innerText = ele.author.name;
      date.innerText = ele.author.published_date;
      totalView.innerHTML = `<i class="fa-solid fa-eye"></i>${ele.total_view}`;
      button.innerText = "Read More";
      button.style.padding = ".7rem";
      button.style.border = "1px solid blue";
      button.style.color = "blue";
      button.style.cursor = "pointer";
      button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click

      cardDivLeft.appendChild(imgLogo);
      cardDivRight.appendChild(newsHeading);
      cardDivRight.appendChild(limitedDetails); // Display limited details initially
      cardDivRight.appendChild(fullDetails); // Add full details to the card
      spanDiv.appendChild(writerLogo);
      spanDiv.appendChild(writerName);
      spanDiv.appendChild(date);
      spanDiv.appendChild(totalView);
      spanDiv.appendChild(button);

      newsContainer.appendChild(cardDiv);
      cardDiv.appendChild(cardDivLeft);
      cardDiv.appendChild(cardDivRight);
      cardDivRight.appendChild(spanDiv);

      cardDiv.style.display = "flex";
      cardDiv.style.backgroundColor = "white";
      cardDiv.style.marginBottom = "25px";
      spanDiv.style.display = "flex";
      spanDiv.style.justifyContent = "center";
      spanDiv.style.alignItems = "center";
      cardDivRight.style.padding = "1rem";
      writerLogo.style.height = "25px";
      writerLogo.style.width = "25px";
      writerLogo.style.borderRadius = "50%";
    });
  } catch (err) {
    throw err;
  }
};
const getEntertainmentNews = async () => {
  clearNewsContainer();
  const url = "https://openapi.programming-hero.com/api/news/category/05";

  try {
    titleComtainer.innerText = "";
    const response = await fetch(url);
    const data = await response.json();
    const entertainmentNews = data;
    const length = entertainmentNews.data.length;

    entertainmentNews.data.sort((a, b) => b.total_view - a.total_view);

    entertainmentNews.data.map((ele) => {
      titleComtainer.style.display = "block";
      title.innerHTML = `<b>${length}</b> news found for the category of <b> <i> Entertainment News </i></b>`;

      const cardDiv = document.createElement("div");
      const cardDivLeft = document.createElement("div");
      const cardDivRight = document.createElement("div");
      const spanDiv = document.createElement("div");

      const imgLogo = document.createElement("img");
      const newsHeading = document.createElement("h3");
      const limitedDetails = document.createElement("p"); // Container for limited details
      const fullDetails = document.createElement("p"); // Container for full details
      const writerLogo = document.createElement("img");
      const writerName = document.createElement("p");
      const date = document.createElement("p");
      const totalView = document.createElement("p");
      const button = document.createElement("button"); // Changed this to a button

      // Display only 400 words of details initially
      const limitedDetailText = ele.details.substring(0, 800);
      limitedDetails.innerText = limitedDetailText + " ...";
      fullDetails.innerText = ele.details;
      fullDetails.style.display = "none"; // Initially hide full details
      imgLogo.src = ele.thumbnail_url;
      newsHeading.innerText = ele.title;
      writerLogo.src = ele.author.img;
      writerName.innerText = ele.author.name;
      date.innerText = ele.author.published_date;
      totalView.innerHTML = `<i class="fa-solid fa-eye"></i>${ele.total_view}`;
      button.innerText = "Read More";
      button.style.padding = ".7rem";
      button.style.border = "1px solid blue";
      button.style.color = "blue";
      button.style.cursor = "pointer";
      button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click

      cardDivLeft.appendChild(imgLogo);
      cardDivRight.appendChild(newsHeading);
      cardDivRight.appendChild(limitedDetails); // Display limited details initially
      cardDivRight.appendChild(fullDetails); // Add full details to the card
      spanDiv.appendChild(writerLogo);
      spanDiv.appendChild(writerName);
      spanDiv.appendChild(date);
      spanDiv.appendChild(totalView);
      spanDiv.appendChild(button);

      newsContainer.appendChild(cardDiv);
      cardDiv.appendChild(cardDivLeft);
      cardDiv.appendChild(cardDivRight);
      cardDivRight.appendChild(spanDiv);

      cardDiv.style.display = "flex";
      cardDiv.style.backgroundColor = "white";
      cardDiv.style.marginBottom = "25px";
      spanDiv.style.display = "flex";
      spanDiv.style.justifyContent = "center";
      spanDiv.style.alignItems = "center";
      cardDivRight.style.padding = "1rem";
      writerLogo.style.height = "25px";
      writerLogo.style.width = "25px";
      writerLogo.style.borderRadius = "50%";
    });
  } catch (err) {
    throw err;
  }
};
const getCultureNews = async () => {

  clearNewsContainer();
  let url = "https://openapi.programming-hero.com/api/news/category/06";
  title.innerHTML = `No news found for the category of <b> <i> Culture News </i></b>`;
  title.style.display = "block";
  title.innerHTML = `No news found for the category of <b> <i> Culture News </i></b>`;
  cardDiv.style.display = "block";
  // newsContainer.style.display = "none";

};
const getArtNews = async () => {
  clearNewsContainer();
  const url = "https://openapi.programming-hero.com/api/news/category/07";

  try {
    titleComtainer.style.display = "block";
    const response = await fetch(url);
    const data = await response.json();
    const artNews = data;
    const length = artNews.data.length;

    artNews.data.sort((a, b) => b.total_view - a.total_view);

    artNews.data.map((ele) => {
      const cardDiv = document.createElement("div");
      title.innerHTML = `${length} found for the category of <b> <i> Art News </i></b>`;
      const cardDivLeft = document.createElement("div");
      const cardDivRight = document.createElement("div");
      const spanDiv = document.createElement("div");

      const imgLogo = document.createElement("img");
      const newsHeading = document.createElement("h3");
      const limitedDetails = document.createElement("p"); // Container for limited details
      const fullDetails = document.createElement("p"); // Container for full details
      const writerLogo = document.createElement("img");
      const writerName = document.createElement("p");
      const date = document.createElement("p");
      const totalView = document.createElement("p");
      const button = document.createElement("button"); // Changed this to a button

      // Display only 400 words of details initially
      const limitedDetailText = ele.details.substring(0, 800);
      limitedDetails.innerText = limitedDetailText + " ...";
      fullDetails.innerText = ele.details;
      fullDetails.style.display = "none"; // Initially hide full details
      imgLogo.src = ele.thumbnail_url;
      newsHeading.innerText = ele.title;
      writerLogo.src = ele.author.img;
      writerName.innerText = ele.author.name;
      date.innerText = ele.author.published_date;
      totalView.innerHTML = `<i class="fa-solid fa-eye"></i>${ele.total_view}`;
      button.innerText = "Read More";
      button.style.padding = ".7rem";
      button.style.border = "1px solid blue";
      button.style.color = "blue";
      button.style.cursor = "pointer";
      button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click

      cardDivLeft.appendChild(imgLogo);
      cardDivRight.appendChild(newsHeading);
      cardDivRight.appendChild(limitedDetails); // Display limited details initially
      cardDivRight.appendChild(fullDetails); // Add full details to the card
      spanDiv.appendChild(writerLogo);
      spanDiv.appendChild(writerName);
      spanDiv.appendChild(date);
      spanDiv.appendChild(totalView);
      spanDiv.appendChild(button);

      newsContainer.appendChild(cardDiv);
      cardDiv.appendChild(cardDivLeft);
      cardDiv.appendChild(cardDivRight);
      cardDivRight.appendChild(spanDiv);

      cardDiv.style.display = "flex";
      cardDiv.style.backgroundColor = "white";
      cardDiv.style.marginBottom = "25px";
      spanDiv.style.display = "flex";
      spanDiv.style.justifyContent = "center";
      spanDiv.style.alignItems = "center";
      cardDivRight.style.padding = "1rem";
      writerLogo.style.height = "25px";
      writerLogo.style.width = "25px";
      writerLogo.style.borderRadius = "50%";
    });
  } catch (err) {
    throw err;
  }
};
const getAllNews = async () => {
  clearNewsContainer();
  const url = "https://openapi.programming-hero.com/api/news/category/08";

  try {
    titleComtainer.style.display = "block";
    const response = await fetch(url);
    const data = await response.json();
    const allNews = data;
    const length = allNews.data.length;
    console.log(length);

    allNews.data.map((ele) => {
      title.innerHTML = `<b>${length}</b> news found for the category of <b> <i> Entertainment News </i></b>`;

      const cardDiv = document.createElement("div");
      const cardDivLeft = document.createElement("div");
      const cardDivRight = document.createElement("div");
      const spanDiv = document.createElement("div");

      const imgLogo = document.createElement("img");
      const newsHeading = document.createElement("h3");
      const limitedDetails = document.createElement("p"); // Container for limited details
      const fullDetails = document.createElement("p"); // Container for full details
      const writerLogo = document.createElement("img");
      const writerName = document.createElement("p");
      const date = document.createElement("p");
      const totalView = document.createElement("p");
      const button = document.createElement("button"); // Changed this to a button

      // Display only 400 words of details initially
      const limitedDetailText = ele.details.substring(0, 800);
      limitedDetails.innerText = limitedDetailText + " ...";
      fullDetails.innerText = ele.details;
      fullDetails.style.display = "none"; // Initially hide full details
      imgLogo.src = ele.thumbnail_url;
      newsHeading.innerText = ele.title;
      writerLogo.src = ele.author.img;
      writerName.innerText = ele.author.name;
      date.innerText = ele.author.published_date;
      totalView.innerHTML = `<i class="fa-solid fa-eye"></i>${ele.total_view}`;
      button.innerText = "Read More";
      button.style.padding = ".7rem";
      button.style.border = "1px solid blue";
      button.style.color = "blue";
      button.style.cursor = "pointer";
      button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click

      cardDivLeft.appendChild(imgLogo);
      cardDivRight.appendChild(newsHeading);
      cardDivRight.appendChild(limitedDetails); // Display limited details initially
      cardDivRight.appendChild(fullDetails); // Add full details to the card
      spanDiv.appendChild(writerLogo);
      spanDiv.appendChild(writerName);
      spanDiv.appendChild(date);
      spanDiv.appendChild(totalView);
      spanDiv.appendChild(button);

      newsContainer.appendChild(cardDiv);
      cardDiv.appendChild(cardDivLeft);
      cardDiv.appendChild(cardDivRight);
      cardDivRight.appendChild(spanDiv);

      cardDiv.style.display = "flex";
      cardDiv.style.backgroundColor = "white";
      cardDiv.style.marginBottom = "25px";
      spanDiv.style.display = "flex";
      spanDiv.style.justifyContent = "center";
      spanDiv.style.alignItems = "center";
      cardDivRight.style.padding = "1rem";
      writerLogo.style.height = "25px";
      writerLogo.style.width = "25px";
      writerLogo.style.borderRadius = "50%";
    });
  } catch (err) {
    throw err;
  }
};


// adding eventListener/clicking functionlity to the buttons
breakingNewsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getBreakinNews();
});
regularNewsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRegularNews();
});
interNationalNewsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getIrnNews();
});
sportsNewsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getSportsNews();
});
entertainmentNewsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getEntertainmentNews();
});
cultureNewsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getCultureNews();
});
artNewsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getArtNews();
});
allNewsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getAllNews();
})


