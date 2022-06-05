import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 200px auto;
  border-color: #1e88e5;
`;

export const Loader = () => {
    let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
    return (
        <div className="sweet-loading">
      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>
    )
}