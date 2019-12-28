export default class Xorwow {
    private static readonly onePastUInt32Max = Math.pow(2, 32);

    private counter: number;

    public constructor(private a: number, private b: number, private c: number, private d: number) {
        this.counter = 0;
    }

    public nextUInt32(): number {
        var t = this.d;
        var s = this.a;
    
        this.d = this.c;
        this.c = this.b;
        this.b = s;
    
        t ^= t >>> 2;
        t ^= t << 1;
        t ^= s ^ (s << 4);
        this.a = t;
    
        this.counter = (this.counter + 362437) | 0;
    
        return (t + this.counter) >>> 0;
    }

    public nextDouble(): number {
        return this.nextUInt32() / Xorwow.onePastUInt32Max;
    }
}
