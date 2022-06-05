import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 200px auto;
  border-color: #1e88e5;
`;

export const Loader = () => {
    return (
        <div className="sweet-loading">
      <ClipLoader css={override} size={150} />
    </div>
    )
}