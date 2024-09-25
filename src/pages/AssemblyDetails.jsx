import React from 'react';
import ToyotaCard from '../components/ToyotaCard';
import VehicleInfo from '../components/VehicleInfo';
import Undercarriage from '../components/Undercarriage';
import TireDetails from '../components/TireDetails';
import ExteriorCondition from '../components/ExteriorCondition';

const AssemblyDetails = () => {
  return (
    <div className="container mx-auto py-24 space-y-6 px-4 lg:px-20"> {/* Added horizontal padding for better spacing */}
      <ToyotaCard />
      <VehicleInfo />
      <Undercarriage />
      <TireDetails />
      <ExteriorCondition />
    </div>
  );
};

export default AssemblyDetails;
