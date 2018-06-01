var app = angular.module("angularCalculator",[]);

app.controller("calculatorCtrl", function ($scope) {
    //Globaalit muuttujat, joita käytetään ohjelman funktioissa

    //Array, joka pitää sisällään laskimessa näkyvät 0-9 numerot
    $scope.numArr = [];
    //Aritmeettiset operaattorit
    $scope.modifiers = ['/', '*', '-', '+'];
    //Ensimmäinen syötetty luku laskimen näytössä
    $scope.firstValue = "";
    //Toinen syötetty luku laskimen näytössä
    $scope.secondValue = "";
    //Näyttää, mitä aritmeettista operaattoria käyttäjä on painanut
    $scope.currentModifier = "";
    //Boolean-muuttuja, jonka avulla tarkistetaan, onko luku annettu
    var valueFlag = false;

    //Luodaan laskimen napeille luvut
    for (var i = 9; i >= 0; i--) 
    {
        $scope.numArr.push(i);
    }

    //Näyttää luvun ruudulla
    function currentValueToShow(num) {
        assignValues(num);
    }

    $scope.showNumber = currentValueToShow;

    //Asettaa parametrina saadun arvon firstValue sekä secondValue -muuttujille riippuen valueFlag-muuttujan tilasta
    function assignValues(num) {
        if (valueFlag) {
            $scope.secondValue += num;
        }
        else {
            $scope.firstValue += num;
        }
    }
    
    //Asettaa valueFlag-muuttujan trueksi
    function activateFlag() {
        valueFlag = true;
    }

    //Asettaa valitun aritmeettisen operaattorin
    function setCurrentModifier(modifier) {
        activateFlag();
        $scope.currentModifier = modifier;
    }

    $scope.makeSecondValue = setCurrentModifier;

    //Suorittaa laskutoimituksen muuttujien arvoille ja tallentaa tuloksen result-muuttujaan
    function evalMath() {
        if ($scope.firstValue != '' && $scope.secondValue != '') {
            var mathFormat = $scope.firstValue + $scope.currentModifier + $scope.secondValue;
            $scope.result = eval(mathFormat);
        }
    }
    $scope.doMath = evalMath;
    
    //Tyhjentää laskimen
    function clearScope() 
    {
        valueFlag = false;
        $scope.firstValue = '';
        $scope.secondValue = '';
        $scope.currentModifier = '';
        $scope.result = '';
    }

    $scope.clearNumbers = clearScope;

});