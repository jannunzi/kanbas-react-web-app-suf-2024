import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  // const [modules, setModules] = useState<any[]>(db.modules); //db.modules.filter((m) => m.course === cid);
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const [moduleName, setModuleName] = useState("");

  return (
    <div id="wd-modules">
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <br />
      <br />
      <br />
      <br />
      {/* Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules" className="list-group rounded-0">
        {modules &&
          modules
            .filter((m: any) => m.course === cid)
            .map((module: any) => (
              <li
                key={module._id}
                className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
              >
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing && module.name}
                  {module.editing && (
                    <input
                      value={module.name}
                      className="form-control w-50 d-inline-block"
                      onChange={(e) =>
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                    />
                  )}
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) =>
                      dispatch(deleteModule(moduleId))
                    }
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                </div>
                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lesson: any) => (
                      <li
                        key={lesson._id}
                        className="wd-lesson list-group-item p-3 ps-1"
                      >
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.name}
                        <LessonControlButtons />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
      </ul>
    </div>
  );
}
