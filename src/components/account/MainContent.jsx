import Cards from "./Cards";
import MainBodyItem from "./MainBodyItem";
import MainBodyCard from "./MainBodyCard";
import Badge from "./Badge";
import Banner from "./Banner";

import Budget from "../../../public/budget.png";
import Lock from "../../../public/lock.png";
import ID from "../../../public/id-icon.png";

import badge from "../../../public/badge.png";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function MainContent() {
  return (
    <>
      <div className="main-content">
        <div className="main-user-text">
          <h3>Hey, tein</h3>
        </div>
        <div className="card-container">
          <Cards title="Total Balance" amount="N0.00" />
        </div>

        <div className="main-body">
          <div>
            <MainBodyItem title="To-Do" />
            <Banner
              icon={ID}
              title="Complete profile Setup"
              content="Complete profile to enjoy all Budie features!"
            />
          </div>
          <div>
            <MainBodyItem title="Do more with Budie &trade;" />
            <div>
              <MainBodyCard img={Budget} name="Explore budgets" />
            </div>

            <div>
              <MainBodyCard img={Lock} name="Explore savings" />
            </div>
          </div>

          <div>
            <MainBodyItem title="Your Badges" />

            <div className="badges">
              <Badge img={badge} badgeName="Big stepper" />
              <Badge img={Budget} badgeName="Tracker" />
              <Badge img={Lock} badgeName="Rising star" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
