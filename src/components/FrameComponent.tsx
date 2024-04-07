import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.inner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.wrapper}>
            <b className={styles.b}>이벤트 날짜</b>
          </div>
          <div className={styles.calendarWeekDaysParent}>
            <div className={styles.calendarWeekDays}>
              <div className={styles.calendarWeekDayDate}>
                <div className={styles.pickerDateAndTimeInlin}>
                  <div className={styles.date}>
                    <div className={styles.header}>
                      <div className={styles.monthAndYearWrapper}>
                        <div className={styles.monthAndYear}>
                          <div className={styles.monthYyyy}>2023 7월</div>
                          <div className={styles.disclosure}>􀆊</div>
                        </div>
                      </div>
                      <div className={styles.arrows}>
                        <div className={styles.previous}>􀆉</div>
                        <div className={styles.next}>􀆊</div>
                      </div>
                    </div>
                    <div className={styles.dateHeader}>
                      <div className={styles.sun}>일</div>
                      <div className={styles.mon}>월</div>
                      <div className={styles.tue}>화</div>
                      <div className={styles.wed}>수</div>
                      <div className={styles.thu}>목</div>
                      <div className={styles.fri}>금</div>
                      <div className={styles.sat}>토</div>
                    </div>
                    <div className={styles.calendar}>
                      <div className={styles.week1}>
                        <div className={styles.day} />
                        <div className={styles.day1} />
                        <div className={styles.day2} />
                        <div className={styles.day3} />
                        <div className={styles.day4}>
                          <div className={styles.date1}>1</div>
                        </div>
                        <div className={styles.day5}>
                          <div className={styles.date2}>2</div>
                        </div>
                        <div className={styles.day6}>
                          <div className={styles.date3}>3</div>
                        </div>
                      </div>
                      <div className={styles.week2}>
                        <div className={styles.day7}>
                          <div className={styles.date4}>4</div>
                        </div>
                        <div className={styles.day8}>
                          <div className={styles.date5}>5</div>
                        </div>
                        <div className={styles.day9}>
                          <div className={styles.date6}>6</div>
                        </div>
                        <div className={styles.day10}>
                          <div className={styles.date7}>7</div>
                        </div>
                        <div className={styles.day11}>
                          <div className={styles.date8}>8</div>
                        </div>
                        <div className={styles.day12}>
                          <div className={styles.date9}>9</div>
                        </div>
                        <div className={styles.day13}>
                          <div className={styles.date10}>10</div>
                        </div>
                      </div>
                      <div className={styles.week3}>
                        <div className={styles.day14}>
                          <div className={styles.date11}>11</div>
                        </div>
                        <div className={styles.day15}>
                          <div className={styles.date12}>12</div>
                        </div>
                        <div className={styles.day16}>
                          <div className={styles.date13}>13</div>
                        </div>
                        <div className={styles.day17}>
                          <div className={styles.date14}>14</div>
                        </div>
                        <div className={styles.day18}>
                          <div className={styles.date15}>15</div>
                        </div>
                        <div className={styles.day19}>
                          <div className={styles.date16}>16</div>
                        </div>
                        <div className={styles.day20}>
                          <div className={styles.date17}>17</div>
                        </div>
                      </div>
                      <div className={styles.week4}>
                        <div className={styles.day21}>
                          <div className={styles.date18}>18</div>
                        </div>
                        <div className={styles.day22}>
                          <div className={styles.date19}>19</div>
                        </div>
                        <div className={styles.day23}>
                          <div className={styles.date20}>20</div>
                        </div>
                        <div className={styles.day24}>
                          <div className={styles.date21}>21</div>
                        </div>
                        <div className={styles.day25}>
                          <div className={styles.date22}>22</div>
                        </div>
                        <div className={styles.day26}>
                          <div className={styles.ellipse} />
                          <div className={styles.date23}>23</div>
                        </div>
                        <div className={styles.day27}>
                          <div className={styles.date24}>24</div>
                        </div>
                      </div>
                      <div className={styles.week5}>
                        <div className={styles.day28}>
                          <div className={styles.date25}>25</div>
                        </div>
                        <div className={styles.day29}>
                          <div className={styles.date26}>26</div>
                        </div>
                        <div className={styles.day30}>
                          <div className={styles.date27}>27</div>
                        </div>
                        <div className={styles.day31}>
                          <div className={styles.date28}>28</div>
                        </div>
                        <div className={styles.day32}>
                          <div className={styles.date29}>29</div>
                        </div>
                        <div className={styles.day33}>
                          <div className={styles.date30}>30</div>
                        </div>
                        <div className={styles.day34} />
                      </div>
                      <div className={styles.week6}>
                        <div className={styles.day35}>
                          <div className={styles.date31}>1</div>
                        </div>
                        <div className={styles.day36}>
                          <div className={styles.date32}>1</div>
                        </div>
                        <div className={styles.day37}>
                          <div className={styles.date33}>1</div>
                        </div>
                        <div className={styles.day38}>
                          <div className={styles.date34}>1</div>
                        </div>
                        <div className={styles.day39}>
                          <div className={styles.date35}>1</div>
                        </div>
                        <div className={styles.day40}>
                          <div className={styles.date36}>1</div>
                        </div>
                        <div className={styles.day41}>
                          <div className={styles.date37}>1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.time}>
                    <div className={styles.title}>Ends</div>
                    <div className={styles.contentsTrailing}>
                      <div className={styles.dateAndTimePickerCompact}>
                        <div className={styles.time1}>8:00 AM</div>
                      </div>
                      <div className={styles.segmentedControl}>
                        <div className={styles.button1}>
                          <div className={styles.label}>Label</div>
                        </div>
                        <div className={styles.button2}>
                          <div className={styles.label1}>Label</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.div}>오늘</div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.div1}>
                <p className={styles.p}>선택된 날짜가 없어요.</p>
                <p className={styles.p1}>캘린더에서 날짜를 선택해주세요.</p>
              </div>
            </div>
          </div>
        </div>
        <Button
          className={styles.frameItem}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "24",
            background: "#dfe2e6",
            borderRadius: "8px",
            "&:hover": { background: "#dfe2e6" },
            width: 720,
            height: 70,
          }}
        >
          이벤트 만들기
        </Button>
      </div>
    </section>
  );
};

export default FrameComponent;
