export type GUID = string & { isGuid: true};
export function guid(guid: string) : GUID {
    return  guid as GUID; // maybe add validation that the parameter is an actual guid ?
};
export interface UserVehicleAddDto {
    userId: string;
    brandId: number;
    modelId: number;
    buyPrice: Number;
    bodyType: Number;
    yearProduction: Number;
    mileage: Number;
    engineCapacity: Number;
    typeVehicle: Number;
}