import { Player } from "./player"

describe('PlayerComponent', () => {
    let john:Player;

    beforeEach(() => {
        john = new Player(); // LP = 4000
    });

    it('should return 0 LP if damage is greater than LP', () => {
        // Action
        const lifePointsResult = john.takeDamage(6000);

        // Expect
        expect(lifePointsResult).toBe(0);
    });

    it('should return 2000 LP if damage = 2000', () => {
        // Action
        const lifePointsResult = john.takeDamage(2000);

        // Expect
        expect(lifePointsResult).toBe(2000);
    });

    it('should return 500 LP if damage = 3500', () => {
        // Action
        const lifePointsResult = john.takeDamage(3500);

        // Expect
        expect(lifePointsResult).toBe(500);
    });
})