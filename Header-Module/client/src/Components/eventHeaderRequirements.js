import React from "react";
import styles from "./style.css";

const EventHeaderRequirements = props => {
  console.log(props.artifacts);

  return (
    <div>
      <div className={styles.eventHeaderRequirementsMargin}>
        <div className={styles.eventHeaderRequirementsTableRow}>
          <div className={styles.cellOne}>
            <div>
              <span>
                <span>
                  <img width="13px" src={props.artifacts} />
                </span>
              </span>
            </div>
          </div>
          <div className={styles.cellTwo}>
            <div>
              <div>Offered in English</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHeaderRequirements;
