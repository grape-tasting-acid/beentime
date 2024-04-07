import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propHeight?: CSSProperties["height"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      height: propHeight,
    };
  }, [propAlignSelf, propPosition, propTop, propLeft, propHeight]);

  return (
    <div className={styles.rectangleParent} style={frameDivStyle}>
      <div className={styles.frameChild} />
      <div className={styles.parent}>
        <b className={styles.b}>2월 3일 (금)</b>
        <div className={styles.wrapper}>
          <div className={styles.div}>점심 12:00</div>
        </div>
      </div>
      <div className={styles.group}>
        <b className={styles.b1}>2월 3일 (금)</b>
        <div className={styles.container}>
          <div className={styles.div1}>점심 12:00</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <b className={styles.b2}>2월 3일 (금)</b>
        <div className={styles.frame}>
          <div className={styles.div2}>점심 12:00</div>
        </div>
      </div>
      <div className={styles.parent1}>
        <b className={styles.b3}>2월 3일 (금)</b>
        <div className={styles.wrapper1}>
          <div className={styles.div3}>점심 12:00</div>
        </div>
      </div>
      <div className={styles.parent2}>
        <b className={styles.b4}>2월 3일 (금)</b>
        <div className={styles.wrapper2}>
          <div className={styles.div4}>점심 12:00</div>
        </div>
      </div>
      <div className={styles.parent3}>
        <b className={styles.b5}>2월 3일 (금)</b>
        <div className={styles.wrapper3}>
          <div className={styles.div5}>점심 12:00</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
