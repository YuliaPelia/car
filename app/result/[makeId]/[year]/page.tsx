import VehicleModels from './VehicleModels';

export default function Page({ params }: { params: { makeId: string; year: string } }) {
  return <VehicleModels makeId={params.makeId} year={params.year} />;
}
