/**
 * Created by Vunb on 8.14.2015.
 */

angular.module($appname)
    .controller("RSAController", ["$scope", "ExtendedEuclid", "PowerModulo", function ($scope, ExtendedEuclid, PowerModulo) {

        $scope.a = 0;
        $scope.b = 0;

        $scope.gcd = ExtendedEuclid.gcd;
        $scope.egcd = ExtendedEuclid.egcd;

        $scope.powmod = PowerModulo;
    }]);