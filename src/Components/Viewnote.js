import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../Redux/store";
import { notesAction } from "../Redux/notes-action";
export const Viewnote = () => {
  let notes = useSelector((state) => state.notes);
  // console.log(notes);
  const navigate = useNavigate();
  const addnote = () => {
    navigate("/addnote");
  };
  const Delete=(index)=>{
       store.dispatch(notesAction("delete",index));
  }
  const update=(index)=>{
    store.dispatch(notesAction("update",index));
    navigate("/addnote");
    

  }

  if(JSON.stringify(notes) === "[]"){
     if(!(localStorage.getItem("item")=== "[]"))
     {
      
      store.dispatch(notesAction("loadfromlocal",JSON.parse(localStorage.getItem("item"))));
     }
    
  }

  

  return (
    <div>
      <h4 className="alert-danger text-center">View Notes</h4>
      <div style={{fontFamily:"sofia",fontSize:"19px"}}>
        {notes.map((e, index) => {
          return <p key={index}>🚀{e} &nbsp;&nbsp; <img  style={{cursor:"pointer"}} onClick={()=>{Delete(index)}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nO3VwQnCMBjF8Qe6hnYRO4FSPNcJ9FxBF9AJdAKdQCcwE9gJdAOPFaFKoFfBvPdJEPuH3JLvR3IJ0PZ5YwAZInQHUH1reNYMfwauin0NR2DvlosFn5ib/1c3g2f2M4IrDeAzAx8N4AMDbw3gDQMvDeAFA08M4JyBUwN4wMB9A7jHwB0ADwH1Z7sguwrwBUIu1uewF+CdAq8FeKXAMwGeKvBIgIcKnACoCbRuzkrNA/9mv7dQ0bbf7wXRGEWDOGx/GAAAAABJRU5ErkJggg==" alt=""></img> 
           &nbsp;
          <img style={{height:30,width:30,cursor:"pointer"}}  onClick={()=>{update(index)}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACvUlEQVR4nO2aT2vUQBjGk971LHhu0btS8NiJh81IQSdBu3sUe9PNLJYKsqx4Klg8tbDQfgrxJtjN1EOh+A3qSfDmP/Sm8MhY3WazabK7SeikeR942U0yQ/b5zcw7M5tYFolEIpEmV3uAq8E+VuU+1o2JEGsdhQWrTHX2cCVQeCsVYGIEIY5KM99WWAwUvp21yTMB8PAAF6XCp+GNFH7JEK+kwosgxIYh0X00wHwpADoKTyOUPwfvcM2qk6TC+2FXC3Hfqpukwo//AB7v4ZJVN8lIorHqKEkAQD1A0hAA5QBJSRBVmQVsh3svGRc/mSs29XGdZgHb4WLb4R5OQuz2er25OgCwx80XAEFWA0CK+ZwQpPkAJjCfA4I0G4A234+ZzDyeKjFKcwGMtTzjYke3cPScLse4tzVzT5BmArDTWjYGILN85QA4Db+ZZiYBQDKEht+sJADGvVZaS54CYAzCEvfuVRKANqJ/vOOKlaRunAJgWPefebuqAFKVAWA6SQIA6gGShgAoB8hzmwQBOwjRaius6O9TJcGMupUAIAdoRp779eNGTgWgzSv0h9cHyF5VmQggCNEaecoag5AIIG7+OLJXVcYOATVqJgphDEBG+WouhABbKmzFTO32gLkRAMdjfjvW8ju6nFX5lSCSWzbr2KSWz78UxnhPSAnjWr6YvQAmgmCs+WI2Q0iFYLT54naDSIRgvPlit8P4mxg39Vsi+tPEhFf6/wFVFAHg1ANAQ4BTDgAlQV7DWWCJ+5cjzwq/W3UT4/7qCQDv0KqTbrpikXHxZTgNuv6TUm7EGncXmOuvOVysR0Of09dmqZsrXO+5w8Vr5orfkTXAxxvLyxdKAeBw70PKWxhHs9ctKFzvK7t1+3op5isA4E1WL8wth9+ZZ1x0Gfc2RkN09bXZ6uYJ8czh4kHpxkkkEsk6Z/oDa82SviKjS8IAAAAASUVORK5CYII=" alt=""></img>
          </p>;
        })}
      </ div>
      <br />
      {notes&& notes.length>0?(<button onClick={addnote} className="btn btn-warning">
        Add more notes
      </button>):<p>Nothing to show</p>}
      
    </div>
  );
};
