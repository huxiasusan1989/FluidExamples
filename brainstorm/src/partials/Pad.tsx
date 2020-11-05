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
        <UserName user={props.user} userCount={props.users.length} />
      </div>
    </div>
  );
};
