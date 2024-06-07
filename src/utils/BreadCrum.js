class BreadCrum{
    static DISABLED = 0;
    static ENABLED = 1;
    static SELECTED = 2;

    static STATE = {
        [BreadCrum.DISABLED]: "disabled",
        [BreadCrum.ENABLED]: "enabled",
        [BreadCrum.SELECTED]: "selected",
    }
}

module.exports = { BreadCrum };