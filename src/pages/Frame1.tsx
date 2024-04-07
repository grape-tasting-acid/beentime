import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import InputSource from "../components/InputSource";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./Frame1.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <img className={styles.item} loading="lazy" alt="" src="/vector-29.svg" />
      <img className={styles.inner} alt="" src="/vector-28.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector-28.svg" />
      <InputSource />
      <main className={styles.frameMain}>
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.beentime12Parent}>
              <img
                className={styles.beentime12Icon}
                alt=""
                src="/beentime1-1@2x.png"
              />
              <Button
                className={styles.frameChild}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "24",
                  background: "#000",
                  borderRadius: "20px",
                  "&:hover": { background: "#000" },
                  width: 405,
                  height: 75,
                }}
              >
                가장 가능성 높은 일은 8일이구만~!!!
              </Button>
              <img
                className={styles.frameItem}
                alt=""
                src="/data-transformer.svg"
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.parent}>
              <b className={styles.b}>가능한 시간</b>
              <b className={styles.b1}>
                일정을 수정하려면 참석자별 이름을 누르세요.
              </b>
            </div>
          </div>
          <FrameComponent4 />
          <div className={styles.vectorWrapper}>
            <img className={styles.frameInner} alt="" src="/vector-28.svg" />
          </div>
          <div className={styles.eventShareArea}>
            <Button
              className={styles.eventShareAreaChild}
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "24",
                borderColor: "#000",
                borderRadius: "10px",
                "&:hover": { borderColor: "#000" },
                width: 295,
                height: 59,
              }}
            >
              이벤트 공유하기
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Frame1;
