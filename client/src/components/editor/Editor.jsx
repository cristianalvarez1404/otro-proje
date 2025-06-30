import React from "react";
import Layers from "./Layers";
import Workspace from "./Workspace";
import Options from "./Options";
import "./editor.css";

const Editor = ({ previewImg }) => {
  return (
    <div className="editor">
      <Layers previewImg={previewImg} />
      <Workspace previewImg={previewImg} />
      <Options previewImg={previewImg} />
    </div>
  );
};

export default Editor;
