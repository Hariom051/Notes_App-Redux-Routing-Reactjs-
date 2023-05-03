import { Routes,Route } from "react-router-dom";
import { Addnote } from "./Addnote";
import { Leftmenu } from "./leftmenu";
import { Welcome } from "./Welcome";
import { Viewnote } from "./Viewnote";

export const Merge = () => {
  return (
    <div className="container">
      <h1 className="alert-info text-center">Notes-App</h1>

      <div className="row">
        <div className="col-3">
          <Leftmenu />
        </div>
        <div className="col-9">
          <Routes>
            <Route exact path="/" element={<Welcome />} />

            <Route  path="/addnote" element={<Addnote />} />
            <Route path="/viewnote" element={<Viewnote />} />

            <Route
              path="*"
              element={
                <div>
                  This is invalid link you typed so go to previous
                  page!!!🚀🚀🚀🚀
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};
