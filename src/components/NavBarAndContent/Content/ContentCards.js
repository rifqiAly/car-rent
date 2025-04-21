import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ContentCards = ({ data, handleDelete, handleEdit }) => {
  return (
    <tbody>
      {data.map((e) => (
        <tr key={e.id}>
          <td>
            <img src={e.image || null} height={40} />
          </td>
          <td>
            <h2>{`${e.name}`}</h2>
          </td>
          <td>
            <h2>{`${e.day_rate}/day`}</h2>
            <br />
            <h2>{` ${e.month_rate}/month`}</h2>
          </td>
          <td>
            <div>
              <EditIcon
                onClick={() => {
                  handleEdit(e.id);
                }}
              />
              <DeleteIcon
                onClick={() => {
                  handleDelete(e.id);
                }}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ContentCards;
