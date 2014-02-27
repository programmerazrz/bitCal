function BitCal(options) {
    $.extend(this, options);
    this.constructor();
}
BitCal.prototype = {
    calNode: null,
    _createMatrices: function () {
    },

    _createHeader : function(){
      var headerContainer = $("<div></div>");
    },

    constructor: function () {
        this._createMatrices();
    }
};