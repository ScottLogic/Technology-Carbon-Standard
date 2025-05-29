declare global {
    namespace jest {
        interface Matchers<R> {
            toBeTruthyWithMessage(expected: string): CustomMatcherResult;
        }
    }
}

expect.extend({
    toBeTruthyWithMessage(received, errMsg) {
        const result = {
            pass: received,
            message: () => errMsg
        };
        return result;
    }
});

export {};