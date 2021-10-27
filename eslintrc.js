module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["eslint:recommended","react"],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-console": "off",
        "no-debugger": "off",
        "no-undef": "off",
        "linebreak-style": 0,
        indent: ["error", 4, { MemberExpression: 1 }],
        "max-len": ["error", { code: 130 }]
    }
};