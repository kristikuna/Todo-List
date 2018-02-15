(function() {
    function hoverState() {
        return {
            link: function($scope, $element, $attrs) {
                $element.on("mouseover", function() {
                    $element.css('border','1px solid black')

                });
                $element.on("mouseleave", function() {
                    $element.css('border','none')

                });
                $element.on("click", function() {
                    $element.css('color', '#ff0000')

                });
            }
        }
    }
    angular
        .module("app")
        .directive("hoverState", hoverState)
}());
