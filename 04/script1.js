/**
 * Created by JULIOENRIQUE on 15/04/2015.
 */
angular.module('app', []).controller("AlumnosController", AlumnosController);
function AlumnosController($scope){
    $scope.alumnos=[
        {nombre:"Esteban Caceres",telefono:"431789",curso:"implantologia"},
        {nombre:"carmen Canevaro",telefono:"258741",curso:"Obstetircia"},
        {nombre:"Wilfredo Tapia",telefono:"478954",curso:"Apicultura"},
        {nombre:"Juan Carlos Cornejo",telefono:"258741",curso:"Biologia"}
    ];
$scope.Save=function(){
    $scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono:$scope.nuevoAlumno.telefono,
                         curso:$scope.nuevoAlumno.curso});
    $scope.formVisibility=false;
    console.log($scope.formVisibility);
}
$scope.formVisibility=false;
$scope.ShowForm=function(){
    $scope.formVisibility=true;
    console.log($scope.formVisibility);

}
}