import Database from '../client/Database';

describe('Your test', () => {
    it('Should do something', () => {
        const db = new Database();
        db.yourQuery();
        // If you want to assert or control something for example errors I recommend installing chai npm install --save-dev chai
        // For example: assert.doesNotThrow(db.yourQuery());
    });
});
