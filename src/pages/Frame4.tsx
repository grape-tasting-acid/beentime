import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Frame4.module.css";

const Frame4: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <img
        className={styles.icon}
        loading="lazy"
        alt=""
        src="/-20240303--729-1@2x.png"
      />
      <div className={styles.createEventButton}>
        <h1 className={styles.h1}>이벤트를 만들어보세요</h1>
      </div>
      <FrameComponent1
        prop="이벤트 제목"
        frame3Placeholder="ex. 개발팀 회식, 동아리 친목회"
      />
      <FrameComponent1
        prop="(선택) 이벤트 세부 내용"
        frame3Placeholder="ex. 장소는 OO동 타임돼지집입니다!"
        propMinWidth="unset"
        propWidth="231px"
      />
      <FrameComponent />
    </div>
  );
};

export default Frame4;
