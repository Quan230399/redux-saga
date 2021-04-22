import { confirmAlert } from "react-confirm-alert"; // Import

export const confirmA = (title, mess, del ) => {
  confirmAlert({
    title: title,
    message: mess,
    buttons: [
      {
        label: "Yes",
        onClick: () => del(),
      },
      {
        label: "No",

      },
    ],
  });
};
