/**
 * Created by Vunb on 8.15.2015.
 */
angular.module($appname)
    .controller("ElgamalController", ["$scope", "$timeout", "ExtendedEuclid", "PowerModulo", "GeneratePrimitiveNumber", "PrimeNumbers", function ($scope, $timeout, ExtendedEuclid, PowerModulo, GeneratePrimitiveNumber, PrimeNumbers) {


        $scope.gcd = ExtendedEuclid.gcd;
        $scope.egcd = ExtendedEuclid.egcd;
        $scope.mod = ExtendedEuclid.mod;

        $scope.powmod = PowerModulo;
        $scope.primitiveNumber = function (p) {
            return GeneratePrimitiveNumber(p, function (p, uc) {
                $scope.uprime = uc;
            });
        };

        $scope.isPrime = function (p) {
            return PrimeNumbers.indexOf(parseInt(p)) > -1;
        };

        var suggestPrime = function () {
            var p_size = PrimeNumbers.length;
            var p_index = Math.floor(Math.random() * p_size);

            return PrimeNumbers[p_index];
        };

        $scope.suggest = suggestPrime();
    }]);