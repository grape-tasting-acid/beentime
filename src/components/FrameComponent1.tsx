import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  prop?: string;
  frame3Placeholder?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  prop,
  frame3Placeholder,
  propMinWidth,
  propWidth,
}) => {
  const bStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propMinWidth, propWidth]);

  return (
    <section className={styles.inner}>
      <div className={styles.parent}>
        <b className={styles.b} style={bStyle}>
          {prop}
        </b>
        <TextField
          className={styles.frameChild}
          placeholder={frame3Placeholder}
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#dfe2e6" },
            "& .MuiInputBase-root": {
              height: "54px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              fontSize: "18px",
            },
            "& .MuiInputBase-input": { color: "#a9afb6" },
          }}
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
