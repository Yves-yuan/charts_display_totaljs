exports.install = function () {
    F.route('/map/world/data', get_address_data);
};

function get_address_data() {
    var hbase = require('hbase');
    var client = hbase({
        host: 'hadoop2',
        port: 2181
    });
    client.getRow('test_spark:home_addr_result', 'Anna Ben', ['point:point'], function (err, row) {
        console.log(row);
    });
    var result = [
        {name: 'aa bb', value: [90, 31.89, 0]},
        {name: 'cc dd', value: [80, 39.608266, 0]},
        {name: 'ee ff', value: [70, 37.35, 0]},
        {name: 'dd ff', value: [60, 29.985295, 0]},
    ];
    console.log("Receive get address data request");
    self = this;
    self.res.send(result);
}