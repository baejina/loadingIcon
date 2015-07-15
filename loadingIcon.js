/**********************************
# Dependency
 jquery 1.+, font awesome

# Usage
 $(ele).loadingIcon('show');
 $(ele).loadingIcon('hide');
 $(ele).loadingIcon('show',opt);

# description
 change font awesome icon
 prevent double click
**********************************/

$.fn.extend({
    loadingIcon: function(status, opt) {
        var _status;
        _status = status || "show";

        if(_status == "show") {
            var _spin = "<i class='fa fa-spinner fa-spin' style='margin-left: 4px'></i>";
            _spin = opt || _spin;
            this.prop("disabled", true);
            this.append(_spin);
        } else if ( _status == "hide") {
            this.prop("disabled", false);
            this.find("i").remove();
        }
    }
});
