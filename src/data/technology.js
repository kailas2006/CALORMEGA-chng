import { GiHeatHaze, GiWindsock, GiThermometerScale, GiWaterDrop, GiMasonJar, GiElectric } from 'react-icons/gi';
import { MdOutlineDashboard } from 'react-icons/md';

export const technologySteps = [
  {
    icon: GiElectric,
    title: 'Heating',
    description: 'Industrial heating coils raise chamber temperature quickly and consistently.',
  },
  {
    icon: GiHeatHaze,
    title: 'Heat Circulation',
    description: 'Warm air is distributed evenly through every chamber, front to back.',
  },
  {
    icon: GiWindsock,
    title: 'Airflow',
    description: 'High-velocity fans push air across each tray to eliminate moisture pockets.',
  },
  {
    icon: GiWaterDrop,
    title: 'Moisture Removal',
    description: 'Humid air is continuously exhausted while dry air is recirculated.',
  },
  {
    icon: GiThermometerScale,
    title: 'Temperature Control',
    description: 'Digital sensors hold precise temperatures within ±1°C throughout the cycle.',
  },
  {
    icon: MdOutlineDashboard,
    title: 'Humidity Control',
    description: 'Smart humidity regulation protects flavor, color and nutritional value.',
  },
  {
    icon: GiMasonJar,
    title: 'Food Preservation',
    description: 'The finished product retains taste and nutrition with extended shelf life.',
  },
];
