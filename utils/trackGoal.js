import { usePlausible } from "next-plausible";

export const TrackGoal = ({ goal }) => {
  const plausible = usePlausible();

  plausible(goal);

  return null;
};
