/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React, { FC } from "react";
import { IUser } from "../fluid-object/interfaces";
//import { NoteEditor } from "./NoteEditor";
//import { Button } from "./Button";
import { UserName } from "./UserName";

// Pad
interface PadProps {
  createNote: (text: string) => void;
  demo: () => string;
  user: IUser;
  users: IUser[];
  clear: () => void;
  setHighlightMine: (value: boolean) => void;
  highlightMine: boolean;
}

export const Pad: FC<PadProps> = (props) => {
//  const [value, setValue] = useState<string>("");

  return (
    <div className="container">
      <div className="pad">
        {/* <NoteEditor
        //  onFocus={onNoteFocus}
        //  value={value}
        //  onChange={onNoteValueChange}
        //  onEnter={createNote}
        ///>
        //<Button onClick={createNote}> Share my idea </Button>
        //<Button onClick={handleHighlight}>
        // {props.highlightMine ? "Stop highlighting" : "Highlight my ideas"}
        //</Button>
        //{/* <Button onClick={props.clear}> Tidy up </Button> */}

        <UserName user={props.user} userCount={props.users.length} />
      </div>
    </div>
  );
};
