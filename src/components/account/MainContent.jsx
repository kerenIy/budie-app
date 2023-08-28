import Cards from "./CardItem";
import MainBodyItem from "./MainBodyItem";
import MainBodyCard from "./MainBodyCard";
import Badge from "./Badge";
import Banner from "./Banner";

import Budget from "../../../public/budget.png";
import Lock from "../../../public/lock.png";
import ID from "../../../public/id-icon.png";

import badge from "../../../public/badge.png";
import money from "../../../public/money.png";
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
            <MainBodyItem title="Budie Blog" />
            <Banner
              icon={money}
              title="The 50/30/20 rule"
              content="Learn the basics of budgeting with our blog"
            />
          </div>
          <div>
            <MainBodyItem title="Grow Your Wealth" />
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

          <div>
            <MainBodyItem title="Next Steps" />
            <Banner
              icon={ID}
              title="Invite family & friends"
              content="Make N1000 on every referral. Get your referral code."
            />
          </div>
        </div>
      </div>
    </>
  );
}
