'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';


interface VehicleMake {
  MakeId: number;
  MakeName: string;
}

export default function FilterPage() {
  const [makes, setMakes] = useState<VehicleMake[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => (2015 + i).toString());

  useEffect(() => {
    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
       return setMakes(data.Results)
      })
      .catch((err) => console.error('Error fetching makes:', err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Filter Cars</h1>


      <div className="mb-4">
        <label htmlFor="make" className="block mb-2 ">Select Vehicle Make:</label>
        <select
          id="make"
          className="border p-2 w-full text-black"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
        >
          <option value="">Choose a make</option>
          {makes.map((make) => (
            <option key={make.MakeId} value={make.MakeId.toString()}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="year" className="block mb-2">Select Model Year:</label>
        <select
          id="year"
          className="border p-2 w-full text-black"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Choose a year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>


      <Link href={`/result/${selectedMake}/${selectedYear}`}>
        <button
          className={`p-2 w-full text-white ${selectedMake && selectedYear ? 'bg-blue-500' : 'bg-gray-300'} `}
          disabled={!selectedMake || !selectedYear}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
