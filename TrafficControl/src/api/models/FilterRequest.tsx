export class FilterRequest{
    BySpeed: boolean;
    ByToDate: boolean;
    ByFromDate: boolean;
    Speed?: number;
    ToDate?: string;
    FromDate?: string;

    constructor(byspeed: boolean, bytodate: boolean, byfromdate: boolean,
        speed?: number, todate?: string, fromdate?: string) {
            this.BySpeed = byspeed;
            this.ByToDate = bytodate;
            this.ByFromDate = byfromdate;
            this.Speed = speed;
            this.ToDate = todate;
            this.FromDate = fromdate;
        }
}