var $width = $('#width'),
    $height = $('#height'),
    $btnCal = $('#calculate'),
    $perimeter = $('#perimeter'),
    $area = $("#area");
    /**calc button click event */
    $btnCal.click(function(){
    //get dom elem

    //get value
    var w =Number($width.val()) ,
        h =Number($height.val());
    //calculate
    var p = 2*(w+h),
        a=w*h;
    //output
    $perimeter.val(p);
    $area.val(a);
    });