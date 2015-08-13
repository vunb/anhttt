/**
 * Created by Vunb on 8.14.2015.
 */
angular.module($appname)
    .factory("PowerModulo", [function () {

        return function (x, n, m) {
            // Tính: y = x ^ n mod m
            var y = 1;
            var power = x % m;
            while (n > 0) {
                var b = n & 1;
                n = n >> 1;
                if(b == 1) {
                    y = (y * power) % m;
                }
                power = (power * power) % m;
            }

            return y;
        }
    }]);
