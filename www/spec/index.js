describe('app', function() {
    it('should exist', function() {
        expect(app).toBeDefined();
    });

    describe('initialize', function() {
        it('should exist', function() {
            expect(app.initialize).toBeDefined();
        });

        it('should bind events', function() {
            spyOn(app, 'bind');
            app.initialize();
            expect(app.bind).toHaveBeenCalled();
        });
    });
});
