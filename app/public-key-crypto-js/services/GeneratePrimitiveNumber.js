/**
 * Created by Vunb on 8.15.2015.
 */

angular.module($appname)
    .factory("GeneratePrimitiveNumber", ["$log", "PowerModulo", "PrimeNumbers", function ($log, PowerModulo, PrimeNumbers) {

        var isPrimeNumber = function (number) {
            var int = parseInt(number);
            return PrimeNumbers.indexOf(int) > -1;
        };

        return function (p, callback) {
            if (isPrimeNumber(p)) {
                var p_1 = p - 1;

                $log.info("Tìm phần thử nguyên thủy của Zp* với p =", p);
                for (var i = 2; i < p; i++) {
                    $log.debug("Kiểm tra " + i + " có là phần tử nguyên thủy của Zp* không ? với p =", p);
                    var j = 0;
                    var uc = [];
                    for (; PrimeNumbers[j] < p_1; j++) {
                        var p_number = PrimeNumbers[j];
                        if (p_1 % p_number == 0) {
                            uc.push(p_number);
                            var power = PowerModulo(i, p_number, p);
                            $log.debug("Tính số dư của " + i + " ^ " + p_number + " mod " + p + " = ", power);
                            if (power == 1) {
                                break;
                            }
                        }
                    }
                    if (PrimeNumbers[j] >= p_1) {
                        $log.info("Tìm được phần tử nguyên thủy của p: alpha = ", i);
                        $log.info("Các ước chung nguyên tố Uprime(p - 1) = ", uc);
                        callback && callback(p, uc);
                        return i;
                    }
                }
                $log.warn("Không tìm được phần tử sinh cho nhóm Zp*, p = ", p);

            } else {
                $log.error("Không tìm được phần tử sinh cho nhóm Zp do p không phải là số nguyên tố, p = ", p);
            }

            // not Found
            return -1;
        }
    }]);