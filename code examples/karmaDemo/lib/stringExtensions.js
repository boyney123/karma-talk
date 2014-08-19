// extend the string prototype object to abstract generic functionality
String.prototype.isNumeric = function(){
    return !isNaN(parseFloat(this)) && isFinite(this);
}

String.prototype.getNumbers = function(delimeter){
    return this.split(delimeter);
}