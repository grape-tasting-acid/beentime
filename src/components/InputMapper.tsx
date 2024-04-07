import { FunctionComponent } from "react";
import LogicalOperator from "./LogicalOperator";
import FrameComponent3 from "./FrameComponent3";
import styles from "./InputMapper.module.css";

const InputMapper: FunctionComponent = () => {
  return (
    <div className={styles.inputMapper}>
      <div className={styles.outputMixer}>
        <div className={styles.eventMonitor}>
          <div className={styles.eventMonitorChild} />
          <div className={styles.dataTimer}>
            <div className={styles.parent}>
              <b className={styles.b}>일정</b>
              <div className={styles.wrapper}>
                <b className={styles.b1}>연진</b>
              </div>
              <div className={styles.container}>
                <b className={styles.b2}>성연</b>
              </div>
              <b className={styles.b3}>우진</b>
            </div>
          </div>
          <img
            className={styles.eventMonitorItem}
            alt=""
            src="/vector-28.svg"
          />
        </div>
        <div className={styles.div}>✔️</div>
        <div className={styles.div1}>✔️</div>
        <div className={styles.div2}>✔️</div>
        <div className={styles.div3}>✔️</div>
        <div className={styles.div4}>✔️</div>
        <div className={styles.div5}>✔️</div>
        <div className={styles.div6}>✔️</div>
        <div className={styles.div7}>✔️</div>
        <div className={styles.div8}>✔️</div>
        <LogicalOperator />
        <LogicalOperator
          propTop="543px"
          propBackgroundColor="rgba(255, 70, 35, 0.3)"
          propColor="#414f66"
          propColor1="#414f66"
        />
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/vector-28.svg" />
          <img className={styles.frameItem} alt="" src="/vector-28.svg" />
          <FrameComponent3 />
        </div>
        <LogicalOperator
          propTop="653px"
          propBackgroundColor="rgba(255, 70, 35, 0.1)"
          propColor="#414f66"
          propColor1="rgba(65, 79, 102, 0.2)"
        />
      </div>
      <img className={styles.inputMapperChild} alt="" src="/vector-28.svg" />
    </div>
  );
};

export default InputMapper;
