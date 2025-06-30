"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const DashboardPage = () => {
  const [name, setName] = useState("John");

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Helo, {name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <Button variant={"destructive"} onClick={() => setName("Jane")}>
        Change Name
      </Button>
    </div>
  );
};

export default DashboardPage;
