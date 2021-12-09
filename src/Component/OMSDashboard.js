import React, { useEffect } from "react";

function Dashboard() {

  useEffect(() => {
    window.location.href = "https://public.tableau.com/views/OMS_16389610094930/Dashboard1?:display_count=y&:showVizHome=no&:origin=viz_share_link";
  }, []);

  return (
    <div>
    </div>
  );
}


export default Dashboard;
