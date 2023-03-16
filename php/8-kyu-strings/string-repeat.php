<!-- Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times. -->
<?php
function repeatStr($n, $str)
{
return str_repeat($str, $n);
}
repeatStr(3, '@');