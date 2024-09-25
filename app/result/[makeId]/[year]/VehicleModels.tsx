'use client'
import { Suspense, useState,  } from 'react';
import { getModels } from '@/lib/models';

import LoadingPage from '@/app/components/loading-out';
import VehicleModelsList from '@/app/components/VehicleModelsList';


interface VehicleModelsProps {
  makeId: string;
  year: string;
}



const VehicleModels: React.FC<VehicleModelsProps> = ({ makeId, year }) => {

  const [error, setError] = useState<string | null>(null); 

  const Models = async () => {
    // const models = await getModels(makeId, year);
    // console.log(models);

    // return <VehicleModelsList models={models.Results} />;

    try {
      const models = await getModels(makeId, year);
      console.log(models);
      return <VehicleModelsList models={models.Results} />;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message); 
      } else {
        setError('An unknown error occurred.');
      }
    }
  }



  return (
    <div className="flex bg-slate-500 flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Vehicle Models</h1>
      <div className='min-h-[200px]'>

      {error ? ( // Check for error
          <p className="text-red-500">{error}</p>
        ) : (
          <Suspense fallback={<LoadingPage />}>
            <Models />
          </Suspense>
        )}

      </div>

    </div>
  );
};

export default VehicleModels;
