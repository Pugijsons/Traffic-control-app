export class FilterRequest{
    byspeed: boolean;
    bytodate: boolean;
    byfromdate: boolean;
    speed: number;
    todate: Date;
    fromdate: Date;

    constructor(byspeed: boolean, bytodate: boolean, byfromdate: boolean,
        speed: number, todate: Date, fromdate: Date) {
            this.byspeed = byspeed;
            this.bytodate = bytodate;
            this.byfromdate = byfromdate;
            this.speed = speed;
            this.todate = todate;
            this.fromdate = fromdate;
        }
}