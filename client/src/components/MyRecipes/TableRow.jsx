import React from 'react';
import Button from "react-bootstrap/Button";

const TableRow = ({ recipeName, category, createdOn }) => {
  return (
    <tr className="custom-spacing-10 py-5">
      <td className="py-3 color-midgrey font-weight-bold">{recipeName}</td>
      <td className="py-3 color-midgrey">
        <Button className="custum-font-size-12 custom-btn font-weight-bold">
          {category.toUpperCase()}
        </Button>
      </td>
      <td className="py-3 color-midgrey">{createdOn}</td>
      <td></td>
      <td></td>
      <td className="py-3 color-midgrey" colspan="2">
        <button className="custom-style">
          <i className="bi bi-trash-fill color-midgrey"></i>
        </button>
      </td>
    </tr>
  );
};
export default TableRow;