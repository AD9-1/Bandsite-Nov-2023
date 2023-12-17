import BandSiteApi from "./band-site-api.js";

const bandSiteApiObj = new BandSiteApi("d2a39b7e-6320-445e-b67c-86382e23e73");
let existing_author1 = await bandSiteApiObj.getComments();
let author_new_form = document.querySelector(".authors-new-form");
let ul = document.querySelector("ul");
let nameCommentArray = [];
let commentObj = {};

author_new_form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!event.target.name.value || !event.target.comment.value) {
    errorForm();
    commentObj = {};
    alert("Please add a comment and name");
  } else {
    if (nameCommentArray.length) {
      nameCommentArray.forEach((element) =>
        element.classList.remove("contentfield")
      );
    }
    commentObj = {
      name: event.target.name.value,
      comment: event.target.comment.value,
    };

    const response = await bandSiteApiObj.postComments(commentObj);
    existing_author1.push(response.data);
    event.target.name.value = "";
    event.target.comment.value = "";
    pushAuthor();
  }
});

let pushAuthor = () => {
  ul.innerHTML = "";

  existing_author1.forEach((element) => {
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
    span_element_date.innerText = new Date(
      element.timestamp
    ).toLocaleDateString("en-US");
    div_element2.appendChild(span_element_date);

    div_element_name_date_comment.appendChild(div_element2);

    const p_element_comment = document.createElement("p");
    p_element_comment.classList.add("author-list__comment");
    p_element_comment.innerText = element.comment;

    div_element_name_date_comment.appendChild(p_element_comment);
    li_element.appendChild(div_element_name_date_comment);

    const div_element_button = document.createElement("div");
    div_element_button.classList.add("author-list__button");
    let button_element = document.createElement("button");
    button_element.innerHTML = "Delete";
    div_element_button.appendChild(button_element);
    li_element.appendChild(div_element_button);

    div_element_name_date_comment.addEventListener("click", async function () {
      await bandSiteApiObj.getLikes(element.id);
    });

    button_element.addEventListener("click", async () => {
      const deleted_obj = await bandSiteApiObj.getDelete(element.id);
      let index = existing_author1.indexOf(deleted_obj);
      existing_author1.splice(index, 1);
      pushAuthor();
    });
    const hr_element = document.createElement("hr");
    ul.prepend(hr_element);
    ul.prepend(li_element);
  });
};
let errorForm = () => {
  nameCommentArray = document.querySelectorAll("input");
  nameCommentArray.forEach((element) => element.classList.add("contentfield"));
};

pushAuthor();
