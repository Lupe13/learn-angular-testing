import { suma } from "./ejemplo"

describe('EjemploComponent', () => {
    it('should retun 2 for 1 + 1', () => {
        const result = suma(1,1);
        expect(result).toBe(2);
    });
    it('should retun 10 for 6 + 4', () => {
        const result = suma(6,4);
        expect(result).toBe(10);
    });
})