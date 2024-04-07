import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import InputSource from "../components/InputSource";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Frame2.module.css";

const Frame2: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <img className={styles.item} loading="lazy" alt="" src="/vector-29.svg" />
      <InputSource />
      <main className={styles.inner}>
        <section className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <b className={styles.b}>아직은 나 혼자 뿐인가....</b>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.beentime12Parent}>
                    <img
                      className={styles.beentime12Icon}
                      alt=""
                      src="/beentime1-2@2x.png"
                    />
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/data-transformer.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.wrapper}>
                <b className={styles.b1}>가능한 시간</b>
              </div>
              <b className={styles.b2}>
                일정을 수정하려면 참석자별 이름을 누르세요.
              </b>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.container}>
                      <b className={styles.b3}>일정</b>
                    </div>
                    <b className={styles.b4}>연진</b>
                  </div>
                </div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-28.svg"
                />
              </div>
              <div className={styles.div1}>✔️</div>
              <div className={styles.div2}>✔️</div>
              <div className={styles.div3}>✔️</div>
              <div className={styles.div4}>✔️</div>
              <div className={styles.div5}>✔️</div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="/vector-28.svg"
                />
                <img
                  className={styles.frameChild2}
                  alt=""
                  src="/vector-28.svg"
                />
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="/vector-28.svg"
                />
                <img
                  className={styles.frameChild4}
                  alt=""
                  src="/vector-28.svg"
                />
                <img
                  className={styles.frameChild5}
                  alt=""
                  src="/vector-28.svg"
                />
                <FrameComponent3
                  propAlignSelf="stretch"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propHeight="unset"
                />
              </div>
              <div className={styles.div6}>✔️</div>
            </div>
            <img className={styles.frameChild6} alt="" src="/vector-28.svg" />
          </div>
          <div className={styles.frameWrapper2}>
            <Button
              className={styles.frameButton}
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "24",
                borderColor: "#000",
                borderRadius: "10px",
                "&:hover": { borderColor: "#000" },
                width: 423,
                height: 94,
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

export default Frame2;
