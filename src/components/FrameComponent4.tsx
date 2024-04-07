import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <FrameComponent3
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="43px"
        propLeft="0px"
        propHeight="719px"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.wrapper}>
              <b className={styles.b}>일정</b>
            </div>
            <b className={styles.b1}>연진</b>
            <div className={styles.container}>
              <b className={styles.b2}>성연</b>
            </div>
            <div className={styles.frame}>
              <b className={styles.b3}>우진</b>
            </div>
            <div className={styles.frameDiv}>
              <b className={styles.b4}>유라</b>
            </div>
            <div className={styles.wrapper1}>
              <b className={styles.b5}>진주</b>
            </div>
            <b className={styles.b6}>수영</b>
          </div>
        </div>
        <img className={styles.frameItem} alt="" src="/vector-28.svg" />
      </div>
      <div className={styles.div}>✔️</div>
      <div className={styles.div1}>✔️</div>
      <div className={styles.div2}>✔️</div>
      <b className={styles.x}>X</b>
      <b className={styles.x1}>X</b>
      <b className={styles.x2}>X</b>
      <div className={styles.div3}>✔️</div>
      <div className={styles.div4}>✔️</div>
      <div className={styles.div5}>✔️</div>
      <b className={styles.x3}>X</b>
      <b className={styles.x4}>X</b>
      <b className={styles.x5}>X</b>
      <div className={styles.div6}>✔️</div>
      <div className={styles.div7}>✔️</div>
      <div className={styles.div8}>✔️</div>
      <b className={styles.x6}>X</b>
      <b className={styles.x7}>X</b>
      <b className={styles.x8}>X</b>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameInner} />
        <img className={styles.vectorIcon} alt="" src="/vector-28.svg" />
        <div className={styles.div9}>✔️</div>
        <div className={styles.wrapper2}>
          <div className={styles.div10}>✔️</div>
        </div>
        <div className={styles.wrapper3}>
          <div className={styles.div11}>✔️</div>
        </div>
        <div className={styles.xWrapper}>
          <b className={styles.x9}>X</b>
        </div>
        <div className={styles.wrapper4}>
          <div className={styles.div12}>✔️</div>
        </div>
        <b className={styles.x10}>X</b>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <img className={styles.frameChild1} alt="" src="/vector-28.svg" />
        <div className={styles.div13}>✔️</div>
        <div className={styles.wrapper5}>
          <div className={styles.div14}>✔️</div>
        </div>
        <div className={styles.wrapper6}>
          <div className={styles.div15}>✔️</div>
        </div>
        <div className={styles.wrapper7}>
          <div className={styles.div16}>✔️</div>
        </div>
        <div className={styles.wrapper8}>
          <div className={styles.div17}>✔️</div>
        </div>
        <div className={styles.div18}>✔️</div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild2} alt="" src="/vector-28.svg" />
        <div className={styles.frameChild3} />
        <img className={styles.frameChild4} alt="" src="/vector-28.svg" />
        <div className={styles.div19}>✔️</div>
        <div className={styles.wrapper9}>
          <div className={styles.div20}>✔️</div>
        </div>
        <div className={styles.wrapper10}>
          <div className={styles.div21}>✔️</div>
        </div>
        <div className={styles.xContainer}>
          <b className={styles.x11}>X</b>
        </div>
        <div className={styles.xFrame}>
          <b className={styles.x12}>X</b>
        </div>
        <b className={styles.x13}>X</b>
      </div>
    </div>
  );
};

export default FrameComponent4;
