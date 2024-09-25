

export async function getModels(makeId: string, year: string) {
    // const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
    // return response.json();


    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);


    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();


    if (!data.Results || data.Results.length === 0) {
        throw new Error('No models found for this make and year.');
    }

    return data;
}

