module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": 2,
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends",
        "extend",
        "ignores",
        "mixin",
        "include"
      ]
    }],
  }
}
