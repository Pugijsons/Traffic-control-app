export class FilterRequest{
    BySpeed: boolean;
    ByToDate: boolean;
    ByFromDate: boolean;
    Speed?: number;
    ToDate?: Date;
    FromDate?: Date;

    constructor(byspeed: boolean, bytodate: boolean, byfromdate: boolean,
        speed?: number, todate?: string, fromdate?: string) {
            this.BySpeed = byspeed;
            this.ByToDate = bytodate;
            this.ByFromDate = byfromdate;
            this.Speed = speed;
            if (todate) {
                this.ToDate = new Date(todate);
            }
            if (fromdate) {
                this.FromDate = new Date(fromdate);
            } 
}}