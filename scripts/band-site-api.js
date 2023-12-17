export default class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      response.data.sort((a, b) => {
        return a.timestamp - b.timestamp;
      });
      return response.data;
    } catch (error) {
      let ul = document.querySelector("ul");
      let h2 = document.createElement("h2");
      h2.classList.add("error-message");
      h2.innerText = "Something Went Wrong";
      ul.appendChild(h2);
      console.error(error);
    }
  }

  async postComments(commentObj) {
    try {
      const p = await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        commentObj
      );
      return p;
    } catch (error) {
      let newAuthor = document.querySelector(".join-the-conv__authors__new");
      let h2 = document.createElement("h2");
      h2.classList.add("error-message");
      h2.innerText = "Something Went Wrong";
      newAuthor.appendChild(h2);
      console.log(error);
    }
  }

  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates?api_key=${this.apiKey}`
      );
      return response;
    } catch (error) {
      let ul = document.querySelector("ul");
      let h2 = document.createElement("h2");
      h2.classList.add("error-message");
      h2.innerText = "Something Went Wrong";
      ul.appendChild(h2);
      console.error(error);
    }
  }
  async getLikes(id) {
    try {
      const response = await axios.put(
        `${this.baseUrl}comments/${id}/like?api_key=${this.apiKey}`,
        id
      );
    } catch (error) {
      console.log(error);
    }
  }
  async getDelete(id) {
    try {
      const response = await axios.delete(
        `${this.baseUrl}comments/${id}?api_key=${this.apiKey}`,
        id
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
