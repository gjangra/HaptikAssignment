import React, { useState } from "react";
import DeleteDialog from "../DeleteDialog/DeleteDialog";
import deleteIcon from "../../images/bin.png";
import cancelIcon from "../../images/cancel.png";
import confirmIcon from "../../images/confirm.png";

import styles from "./Button.module.css";

const DeleteButton = (props) => {
  const [openDialog, setOpenDialog] = useState(false);

  const closeDialogBox = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <button
        className={styles.button}
        title="Remove Friend"
        onClick={() => setOpenDialog(true)}
      >
        <img alt="Delete Icon" src={deleteIcon} width="40" height="40" />
      </button>
      {openDialog && (
        <DeleteDialog
          closeDialogBox={closeDialogBox}
          onConfirm={props.onDelete}
        >
          <h1>Are you sure you want to remove {props.name} from friends?</h1>
          <div className={styles.DeleteDialogBtn}>
            <button onClick={closeDialogBox}>
              <img alt="Cancel" src={cancelIcon} width="60" height="60" />
            </button>
            <button onClick={props.onDelete}>
              <img alt="Confirm" src={confirmIcon} width="60" height="60" />
            </button>
          </div>
        </DeleteDialog>
      )}
    </>
  );
};

export default DeleteButton;
