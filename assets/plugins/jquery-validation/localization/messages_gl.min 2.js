/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return function(a){a.extend(a.validator.messages,{required:"Este campo é obrigatorio.",remote:"Por favor, cubre este campo.",email:"Por favor, escribe unha dirección de correo válida.",url:"Por favor, escribe unha URL válida.",date:"Por favor, escribe unha data válida.",dateISO:"Por favor, escribe unha data (ISO) válida.",number:"Por favor, escribe un número válido.",digits:"Por favor, escribe só díxitos.",creditcard:"Por favor, escribe un número de tarxeta válido.",equalTo:"Por favor, escribe o mesmo valor de novo.",extension:"Por favor, escribe un valor cunha extensión aceptada.",maxlength:a.validator.format("Por favor, non escribas máis de {0} caracteres."),minlength:a.validator.format("Por favor, non escribas menos de {0} caracteres."),rangelength:a.validator.format("Por favor, escribe un valor entre {0} e {1} caracteres."),range:a.validator.format("Por favor, escribe un valor entre {0} e {1}."),max:a.validator.format("Por favor, escribe un valor menor ou igual a {0}."),min:a.validator.format("Por favor, escribe un valor maior ou igual a {0}."),nifES:"Por favor, escribe un NIF válido.",nieES:"Por favor, escribe un NIE válido.",cifES:"Por favor, escribe un CIF válido."})}(jQuery),a});