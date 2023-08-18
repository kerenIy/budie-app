import React from "react";

import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";
export default function Banner() {
  useEffect(() => {
    new PureCounter();
  });

  return (
    <>
      <div className="banner desk-padding hide">
        <div>
          <p>
            <span
              data-purecounter-start="0"
              data-purecounter-end="30000"
              className="purecounter"
              data-purecounter-duration="1"
            >
              00000
            </span>
            <p>users</p>
          </p>
        </div>

        <div>
          <p>
            <span
              data-purecounter-start="0"
              data-purecounter-end="10"
              className="purecounter"
              data-purecounter-duration="1"
            >
              00
            </span>
            <p>countries</p>
          </p>
        </div>

        <div>
          <p>
            <span
              data-purecounter-start="0"
              data-purecounter-end="100000"
              className="purecounter"
              data-purecounter-duration="1"
            >
              000000
            </span>
            <p>budgets</p>
          </p>
        </div>
      </div>
    </>
  );
}
