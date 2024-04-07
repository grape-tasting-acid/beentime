import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import InputSource from "../components/InputSource";
import InputMapper from "../components/InputMapper";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <img
        className={styles.logicGateIcon}
        loading="lazy"
        alt=""
        src="/vector-29.svg"
      />
      <div className={styles.item} />
      <InputSource />
      <main className={styles.valueRange}>
        <section className={styles.sequenceFlow}>
          <div className={styles.parallelFlow}>
            <div className={styles.nestedFlow}>
              <div className={styles.feedbackLoop}>
                <div className={styles.errorHandler}>
                  <img
                    className={styles.beentime11Icon}
                    alt=""
                    src="/beentime1-1@2x.png"
                  />
                  <div className={styles.mergingPointWrapper}>
                    <div className={styles.mergingPoint} />
                  </div>
                  <button className={styles.synchronization}>
                    <div className={styles.synchronizationChild} />
                    <b className={styles.b}>
                      가장 가능성 높은 일은 8일이구만~!!!
                    </b>
                    <img
                      className={styles.dataTransformerIcon}
                      alt=""
                      src="/data-transformer.svg"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.accessPoint}>
                <b className={styles.b1}>가능한 시간</b>
                <b className={styles.b2}>
                  일정을 수정하려면 참석자별 이름을 누르세요.
                </b>
              </div>
            </div>
          </div>
          <InputMapper />
          <FrameComponent2 />
          <div className={styles.linkConnector}>
            <Button
              className={styles.linkConnectorChild}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "24",
                background: "#000",
                borderRadius: "10px",
                "&:hover": { background: "#000" },
                width: 423,
                height: 94,
              }}
            >
              이벤트 확정하기
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Frame;
