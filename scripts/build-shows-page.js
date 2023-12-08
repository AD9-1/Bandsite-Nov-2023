function appendchild() {
  const shows = [
    {
      date: "Fri Oct 15 2021",
      venue: "View Lounge",
      location: "San Francisco,CA",
    },
    {
      date: "Sat Nov 06 2021",
      venue: "Hyatt Agency",
      location: "San Francisco,CA",
    },
    {
      date: "Fri Nov 26 2021",
      venue: "Moscow Center",
      location: "San Francisco,CA",
    },
    {
      date: "Wed Dec 15 2021",
      venue: "Press Club",
      location: "San Francisco,CA",
    },
  ];

  shows.forEach((show) => {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.classList.add("show-time__list");

    let div1 = document.createElement("div");
    div1.classList.add("show-time__div");

    let p1 = document.createElement("p");
    p1.classList.add("show-time__elements__date");
    p1.innerText = show.date;
    div1.appendChild(p2);

    li.appendChild(div1);
    console.log(li);

    let div2 = document.createElement("div");
    div2.classList.add("show-time__div");

    let p2 = document.createElement("p");
    p2.classList.add("show-time__elements__value");
    p2.innerText = show.venue;
    div2.appendChild(p2);

    li.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("show-time__div");

    let p3 = document.createElement("p");
    p3.classList.add("show-time__elements__value");
    p3.innerText = show.venue;
    div3.appendChild(p3);

    li.appendChild(div3);

    let div4 = document.createElement("div");
    div4.classList.add("show-time__div");

    let button = document.createElement("button");
    button.classList.add("show-time__button");

    div4.appendChild(button);

    li.appendChild(div4);

    ul.appendChild(li);
  });
}
appendchild();
