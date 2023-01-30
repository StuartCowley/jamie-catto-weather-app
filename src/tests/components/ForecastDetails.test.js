import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastSummary", () => {
    const propForecast = {
      date: 1111111,
      description: "Stub description",
      icon: "800",
      temperature: {
        min: 12,
        max: 22,
      },
      wind: {
        speed: 15,
        direction: 's',
      },
    humidity: 30,
    };
  
    it("renders correctly", () => {
      const { asFragment } = render(
        <ForecastDetails
          forecast={propForecast}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
});