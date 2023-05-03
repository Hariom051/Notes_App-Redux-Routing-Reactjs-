import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fetchNotes } from "../Redux/fetchnotes";
import { notesAction } from "../Redux/notes-action";
import { store } from "../Redux/store";
import { useSelector } from "react-redux";
export const Addnote = () => {
  const extract = useRef("");
  const navigate = useNavigate();
  const updates = useSelector((state) => state.update);
  const fn = () => {
    navigate("/viewnote");
    const notes = extract.current.value;
    store.dispatch(notesAction("ADD", notes));
  };
  const loaddata = () => {
    navigate("/viewnote");
    store.dispatch(fetchNotes("FETCH"));
  };
 
  const update=(updates)=>{
    const notes = extract.current.value;
     store.dispatch(notesAction("update",{updates:updates,notes:notes}))
     navigate("/viewnote")
  }
  return (
    <div>
      <h4 className="alert-danger text-center">Add Notes</h4>
      <div className="form-group">
        <label>Write about something</label>
        <textarea id="form" className="form-control" rows="10" ref={extract}  defaultValue={updates.updated?updates.value:null}></textarea>
      </div>
      <br />
      <button onClick={fn} className="btn btn-warning">
        Add
      </button>
      &nbsp; 
      <button onClick={loaddata} className="btn btn-primary">
        Load 🚀
      </button>
       &nbsp; 
      <button  disabled={!updates.updated}  onClick={()=>{update(updates)}} className="btn btn-primary">
       Update 🚀
      </button> 
    </div>
  );
};
