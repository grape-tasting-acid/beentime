import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.sequenceFlowInner}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <b className={styles.b}>참석자 이름</b>
          <TextField
            className={styles.dataAggregator}
            placeholder="이름을 입력하세요."
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#e2e5e7" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "20px",
              },
              "& .MuiInputBase-input": { color: "#959fab" },
            }}
          />
        </div>
        <div className={styles.decisionTree}>
          <b className={styles.b1}>가능한 시간</b>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.wrapper}>
                      <b className={styles.b2}>2월 3일 (금)</b>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.div}>점심 12:00</div>
                    </div>
                    <div className={styles.instanceParent}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.instanceChild} />
                        <div className={styles.div1}>✔️</div>
                      </div>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.instanceItem} />
                        <div className={styles.div2}>?</div>
                      </div>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.instanceInner} />
                        <div className={styles.div3}>❌</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.frame}>
                      <b className={styles.b3}>2월 3일 (금)</b>
                    </div>
                    <div className={styles.wrapper1}>
                      <div className={styles.div4}>저녁 12:00</div>
                    </div>
                    <div className={styles.instanceGroup}>
                      <div className={styles.groupDiv}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.div5}>✔️</div>
                      </div>
                      <div className={styles.rectangleParent1}>
                        <div className={styles.instanceChild1} />
                        <div className={styles.div6}>?</div>
                      </div>
                      <div className={styles.rectangleParent2}>
                        <div className={styles.instanceChild2} />
                        <div className={styles.div7}>❌</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.wrapper2}>
                      <b className={styles.b4}>2월 3일 (금)</b>
                    </div>
                    <div className={styles.wrapper3}>
                      <div className={styles.div8}>점심 12:00</div>
                    </div>
                    <div className={styles.instanceContainer}>
                      <div className={styles.rectangleParent3}>
                        <div className={styles.instanceChild3} />
                        <div className={styles.div9}>✔️</div>
                      </div>
                      <div className={styles.rectangleParent4}>
                        <div className={styles.instanceChild4} />
                        <div className={styles.div10}>?</div>
                      </div>
                      <div className={styles.rectangleParent5}>
                        <div className={styles.instanceChild5} />
                        <div className={styles.div11}>❌</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.wrapper4}>
                      <b className={styles.b5}>2월 3일 (금)</b>
                    </div>
                    <div className={styles.wrapper5}>
                      <div className={styles.div12}>점심 12:00</div>
                    </div>
                    <div className={styles.instanceParent1}>
                      <div className={styles.rectangleParent6}>
                        <div className={styles.instanceChild6} />
                        <div className={styles.div13}>✔️</div>
                      </div>
                      <div className={styles.rectangleParent7}>
                        <div className={styles.instanceChild7} />
                        <div className={styles.div14}>?</div>
                      </div>
                      <div className={styles.rectangleParent8}>
                        <div className={styles.instanceChild8} />
                        <div className={styles.div15}>❌</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.wrapper6}>
                      <b className={styles.b6}>2월 3일 (금)</b>
                    </div>
                    <div className={styles.wrapper7}>
                      <div className={styles.div16}>저녁 12:00</div>
                    </div>
                    <div className={styles.instanceParent2}>
                      <div className={styles.rectangleParent9}>
                        <div className={styles.instanceChild9} />
                        <div className={styles.div17}>✔️</div>
                      </div>
                      <div className={styles.rectangleParent10}>
                        <div className={styles.instanceChild10} />
                        <div className={styles.div18}>?</div>
                      </div>
                      <div className={styles.rectangleParent11}>
                        <div className={styles.instanceChild11} />
                        <div className={styles.div19}>❌</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent7}>
                    <div className={styles.wrapper8}>
                      <b className={styles.b7}>2월 3일 (금)</b>
                    </div>
                    <div className={styles.wrapper9}>
                      <div className={styles.div20}>점심 12:00</div>
                    </div>
                    <div className={styles.instanceParent3}>
                      <div className={styles.rectangleParent12}>
                        <div className={styles.instanceChild12} />
                        <div className={styles.div21}>✔️</div>
                      </div>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.instanceChild13} />
                        <div className={styles.div22}>?</div>
                      </div>
                      <div className={styles.rectangleParent14}>
                        <div className={styles.instanceChild14} />
                        <div className={styles.div23}>❌</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.group}>
                    <b className={styles.b8}>2월 3일 (금)</b>
                    <b className={styles.b9}>2월 3일 (금)</b>
                    <div className={styles.parent1}>
                      <b className={styles.b10}>2월 3일 (금)</b>
                      <b className={styles.b11}>2월 3일 (금)</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parent2}>
                <b className={styles.b12}>메모</b>
                <TextField
                  className={styles.frameChild}
                  placeholder="ex. 수요일은 20:00부터 돼서 늦참할거같습니다~!"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#e2e5e7" },
                    "& .MuiInputBase-root": {
                      height: "54px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": { color: "#959fab" },
                  }}
                />
              </div>
            </div>
            <div className={styles.branchSubTree}>
              <div className={styles.decisionBranch}>
                <div className={styles.mergeBranch}>
                  <div className={styles.div24}>점심 12:00</div>
                  <div className={styles.div25}>저녁 12:00</div>
                  <div className={styles.conditionBranch}>
                    <div className={styles.div26}>점심 12:00</div>
                    <div className={styles.div27}>점심 12:00</div>
                  </div>
                </div>
              </div>
              <div className={styles.callBranch}>
                <div className={styles.instanceParent4}>
                  <div className={styles.edgeBranchParent}>
                    <div className={styles.edgeBranch} />
                    <div className={styles.div28}>✔️</div>
                  </div>
                  <div className={styles.targetBranchParent}>
                    <div className={styles.targetBranch} />
                    <div className={styles.div29}>?</div>
                  </div>
                  <div className={styles.sequenceBranchParent}>
                    <div className={styles.sequenceBranch} />
                    <div className={styles.div30}>❌</div>
                  </div>
                </div>
                <div className={styles.instanceParent5}>
                  <div className={styles.rectangleParent15}>
                    <div className={styles.instanceChild15} />
                    <div className={styles.div31}>✔️</div>
                  </div>
                  <div className={styles.rectangleParent16}>
                    <div className={styles.instanceChild16} />
                    <div className={styles.div32}>?</div>
                  </div>
                  <div className={styles.rectangleParent17}>
                    <div className={styles.instanceChild17} />
                    <div className={styles.div33}>❌</div>
                  </div>
                </div>
                <div className={styles.dataGatherer}>
                  <div className={styles.resultProcessorParent}>
                    <div className={styles.resultProcessor} />
                    <div className={styles.div34}>✔️</div>
                  </div>
                  <div className={styles.rectangleParent18}>
                    <div className={styles.instanceChild18} />
                    <div className={styles.div35}>?</div>
                  </div>
                  <div className={styles.rectangleParent19}>
                    <div className={styles.instanceChild19} />
                    <div className={styles.div36}>❌</div>
                  </div>
                  <div className={styles.rectangleParent20}>
                    <div className={styles.instanceChild20} />
                    <div className={styles.div37}>✔️</div>
                  </div>
                  <div className={styles.rectangleParent21}>
                    <div className={styles.instanceChild21} />
                    <div className={styles.div38}>?</div>
                  </div>
                  <div className={styles.rectangleParent22}>
                    <div className={styles.instanceChild22} />
                    <div className={styles.div39}>❌</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
