/**
 * Created by Vunb on 8.14.2015.
 */
angular.module($appname)
    .factory("ExtendedEuclid", [function () {

        // euclid algorithm
        function gcd(a, b) {
            a = a || 0;
            b = b || 0;
            if(a < b) {
                var tmp = a;
                a = b;
                b = tmp;
            }

            while (b != 0) {
                var r = a % b;
                a = b;
                b = r;
            }
            return a;
        }

        // extended euclid algorithm
        function egcd(a, b) {
            // b ^ -1 mod a
            a = a || 0;
            b = b || 0;
            if(a < b) {
                var tmp = a;
                a = b;
                b = tmp;
            }

            var _a = a, _s = [], _q = [], _r = [], n = 0;

            while (b > 0) {
                var q = Math.floor(a / b);
                var r = a % b;
                a = b;
                b = r;

                _q.push(q);
                _r.push(r);
                n++;
            }

            // init s
            _s[0] = 1;
            _s[1] = 0;

            for(var i = 2; i <= n + 1; i ++ ) {
                _s[i] = _s[i - 2] - _q[n - i + 1] * _s[i - 1];
            }

            var result = _s[n + 1];
            return mod(result, _a);
        }

        function mod(x, y) {
            // x % y = x - y * floor(x / y)
            return x - y * Math.floor(x / y);
        }

        return {
            gcd: gcd
            , egcd: egcd
            , mod: mod
        };
    }]);