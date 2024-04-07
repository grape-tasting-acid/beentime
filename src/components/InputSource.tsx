import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./InputSource.module.css";

const InputSource: FunctionComponent = () => {
  return (
    <header className={styles.inputSource}>
      <div className={styles.outputTarget}>
        <h1 className={styles.h1}>유니콘팀 회식</h1>
        <div className={styles.processingUnit}>
          <Button
            className={styles.processingUnitChild}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#414f66",
              fontSize: "20",
              borderColor: "#414f66",
              borderRadius: "10px",
              "&:hover": { borderColor: "#414f66" },
              height: 54,
            }}
          >
            이벤트 수정
          </Button>
        </div>
      </div>
      <div className={styles.inputSourceChild} />
      <b className={styles.b}>
        디자인 개발자 첫 회식, 장소는 삼겹살 집입니다!!!
      </b>
    </header>
  );
};

export default InputSource;
