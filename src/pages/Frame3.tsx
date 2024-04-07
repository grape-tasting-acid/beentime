import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./Frame3.module.css";

const Frame3: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <section className={styles.parent}>
        <img
          className={styles.icon}
          loading="lazy"
          alt=""
          src="/-20240303--729-1@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.group}>
            <h1 className={styles.h1}>이벤트를 만들어보세요</h1>
            <div className={styles.frameContainer}>
              <div className={styles.container}>
                <b className={styles.b}>이벤트 제목</b>
                <TextField
                  className={styles.frameChild}
                  placeholder="개발팀 회식"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#e2e5e7" },
                    "& .MuiInputBase-root": {
                      height: "54px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": { color: "#242a30" },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.parent1}>
            <b className={styles.b1}>(선택) 이벤트 세부 내용</b>
            <TextField
              className={styles.frameItem}
              placeholder="장소는 OO동 타임돼지집입니다!"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#e2e5e7" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  fontSize: "20px",
                },
                "& .MuiInputBase-input": { color: "#242a30" },
              }}
            />
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent}>
            <div className={styles.wrapper}>
              <b className={styles.b2}>이벤트 날짜</b>
            </div>
            <div className={styles.pickerInstance}>
              <div className={styles.pickerDateAndTimeInlin}>
                <div className={styles.date}>
                  <div className={styles.header}>
                    <div className={styles.monthAndYearWrapper}>
                      <div className={styles.monthAndYear}>
                        <div className={styles.monthYyyy}>June 2023</div>
                        <div className={styles.disclosure}>􀆊</div>
                      </div>
                    </div>
                    <div className={styles.arrows}>
                      <div className={styles.previous}>􀆉</div>
                      <div className={styles.next}>􀆊</div>
                    </div>
                  </div>
                  <div className={styles.dateHeader}>
                    <div className={styles.sun}>sun</div>
                    <div className={styles.mon}>mon</div>
                    <div className={styles.tue}>tue</div>
                    <div className={styles.wed}>wed</div>
                    <div className={styles.thu}>thu</div>
                    <div className={styles.fri}>fri</div>
                    <div className={styles.sat}>sat</div>
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
              <div className={styles.eventCreationParentParent}>
                <div className={styles.eventCreationParent}>
                  <div className={styles.monthAndYearDisclosure}>
                    <b className={styles.b3}>2월 3일 (금)</b>
                  </div>
                  <div className={styles.calendar1}>
                    <div className={styles.sunMonFri}>19:00</div>
                  </div>
                  <div className={styles.weekDays}>
                    <div className={styles.x}>x</div>
                  </div>
                </div>
                <div className={styles.eventCreationParent1}>
                  <div className={styles.frame}>
                    <b className={styles.b4}>2월 3일 (금)</b>
                  </div>
                  <div className={styles.wrapper1}>
                    <div className={styles.div1}>12:00</div>
                  </div>
                  <div className={styles.xWrapper}>
                    <div className={styles.x1}>x</div>
                  </div>
                </div>
                <div className={styles.eventCreationParent2}>
                  <div className={styles.wrapper2}>
                    <b className={styles.b5}>2월 5일 (금)</b>
                  </div>
                  <div className={styles.wrapper3}>
                    <div className={styles.div2}>19:00</div>
                  </div>
                  <div className={styles.xContainer}>
                    <div className={styles.x2}>x</div>
                  </div>
                </div>
                <div className={styles.eventCreationParent3}>
                  <div className={styles.wrapper4}>
                    <b className={styles.b6}>2월 23일 (금)</b>
                  </div>
                  <div className={styles.wrapper5}>
                    <div className={styles.div3}>19:00</div>
                  </div>
                  <div className={styles.xFrame}>
                    <div className={styles.x3}>x</div>
                  </div>
                </div>
                <div className={styles.eventCreationParent4}>
                  <div className={styles.wrapper6}>
                    <b className={styles.b7}>2월 29일 (금)</b>
                  </div>
                  <div className={styles.wrapper7}>
                    <div className={styles.div4}>19:00</div>
                  </div>
                  <div className={styles.xWrapper1}>
                    <div className={styles.x4}>x</div>
                  </div>
                </div>
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.dateContainers}>
        <Button
          className={styles.createEventTitle}
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
          이벤트 만들기
        </Button>
      </div>
    </div>
  );
};

export default Frame3;
