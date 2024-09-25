'use client';
interface VehicleModel {
    Count: number;
    Make_ID: number;
    Make_Name: string;
    Results: [];
    Model_Name: string;
    Model_ID: number;
}

export default function VehicleModelsList({ models }: { models: VehicleModel[] }) {
    return (
        <ul>
            {models.map((model, index) => (
                <li key={index} className="border-b p-2">
                    {model.Make_Name} - {model.Model_Name}
                </li>
            ))}
        </ul>
    );
}