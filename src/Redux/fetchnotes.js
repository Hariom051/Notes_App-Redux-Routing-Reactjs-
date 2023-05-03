import axios from "axios";
export const fetchNotes = (type) => {
  return (dispatch) => {
    const url = "https://dummyjson.com/quotes";
    const promise = axios.get(url);
    promise
      .then((data) => {
        const arr = data.data.quotes.map((e) => {
          return e.quote;
        });
        dispatch({ type, payload: { data: arr } });
      })
      .catch((err) => {
        console.log("err is ", err);
      });
  };
};
