export class paisaconversion {

    static toPaisa(value: string): number {
        return Number(
            value.replace(/[$,\s]/g, "")
        );
    }
}