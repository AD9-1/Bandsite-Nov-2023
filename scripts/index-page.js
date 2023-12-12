const existing_author = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs- the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

let author_new_form = document.querySelector(".authors-new-form");
let ul = document.querySelector("ul");
let ip = [];

author_new_form.addEventListener("submit", (event) => {
  console.log("The name is : ", event.target.name.value);
  console.log("The comment is : ", event.target.comment.value);
  event.preventDefault();

  if (!event.target.name.value || !event.target.comment.value) {
    errorForm();
  } else {
    if (ip.length) {
      ip.forEach((ip1) => ip1.classList.remove("contentfield"));
    }

    const new_author = {
      name: event.target.name.value,
      date:
        new Date().getMonth() +
        "/" +
        new Date().getDate() +
        "/" +
        new Date().getFullYear(),
      comment: event.target.comment.value,
    };
    existing_author.push(new_author);
    event.target.name.value = "";
    event.target.comment.value = "";
    pushAuthor();
  }
});

pushAuthor = () => {
  ul.innerHTML = "";

  existing_author.forEach((element) => {
    const li_element = document.createElement("li");
    li_element.classList.add("author-list");

    const div_element_img = document.createElement("div");
    div_element_img.classList.add("author-list__img");

    li_element.appendChild(div_element_img);

    const div_element_name_date_comment = document.createElement("div");
    div_element_name_date_comment.classList.add("author-list__content");
    div_element_name_date_comment.classList.add("name-date");
    const div_element2 = document.createElement("div");
    div_element2.classList.add("name-date__divide");

    const p_element_name = document.createElement("p");
    p_element_name.innerText = element.name;
    div_element2.appendChild(p_element_name);

    const span_element_date = document.createElement("span");
    span_element_date.innerText = element.date;
    div_element2.appendChild(span_element_date);

    div_element_name_date_comment.appendChild(div_element2);

    const p_element_comment = document.createElement("p");
    p_element_comment.classList.add("author-list__comment");
    p_element_comment.innerText = element.comment;

    div_element_name_date_comment.appendChild(p_element_comment);
    li_element.appendChild(div_element_name_date_comment);
    const hr_element = document.createElement("hr");
    ul.prepend(hr_element);
    ul.prepend(li_element);
  });
};
errorForm = () => {
  ip = document.querySelectorAll("input");
  ip.forEach((ip1) => ip1.classList.add("contentfield"));
};

pushAuthor();
