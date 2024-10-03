// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { useContext, useState, createContext } from "react";

const ClimateContext = createContext();
const userClimateContext = () => {
  return useContext(ClimateContext);
};

export default function ClimateProvider(props) {
  const [temperature, setTemperature] = useState(50);
  const [humidity, setHumidity] = useState(40);
  console.log(humidity);
  console.log(temperature);

  return <ClimateContext.Provider>{props.children}</ClimateContext.Provider>;
}
