import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LogicalOperator.module.css";

export type LogicalOperatorType = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const LogicalOperator: FunctionComponent<LogicalOperatorType> = ({
  propTop,
  propBackgroundColor,
  propColor,
  propColor1,
}) => {
  const logicalOperatorStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.logicalOperator} style={logicalOperatorStyle}>
      <div className={styles.logicalOperatorChild} style={rectangleDivStyle} />
      <img className={styles.dataSorterIcon} alt="" src="/vector-28.svg" />
      <div className={styles.div} style={divStyle}>
        ✔️
      </div>
      <div className={styles.dataFilter}>
        <div className={styles.div1} style={div1Style}>
          ✔️
        </div>
      </div>
      <div className={styles.div2}>✔️</div>
    </div>
  );
};

export default LogicalOperator;
