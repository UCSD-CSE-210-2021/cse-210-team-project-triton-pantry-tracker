import React, { useEffect } from "react";

function Dashboard() {

  useEffect(() => {
    window.location.href = "https://public.tableau.com/app/profile/triton.food.pantry/viz/SCA_Full/Dashboard1";
  }, []);

  return (
    <div>
    </div>
  );
}


export default Dashboard;
