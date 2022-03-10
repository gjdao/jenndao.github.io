/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return a.extend(a.validator.messages,{required:"Dette feltet er obligatorisk.",maxlength:a.validator.format("Maksimalt {0} tegn."),minlength:a.validator.format("Minimum {0} tegn."),rangelength:a.validator.format("Angi minimum {0} og maksimum {1} tegn."),email:"Oppgi en gyldig epostadresse.",url:"Angi en gyldig URL.",date:"Angi en gyldig dato.",dateISO:"Angi en gyldig dato (&ARING;&ARING;&ARING;&ARING;-MM-DD).",dateSE:"Angi en gyldig dato.",number:"Angi et gyldig nummer.",numberSE:"Angi et gyldig nummer.",digits:"Skriv kun tall.",equalTo:"Skriv samme verdi igjen.",range:a.validator.format("Angi en verdi mellom {0} og {1}."),max:a.validator.format("Angi en verdi som er mindre eller lik {0}."),min:a.validator.format("Angi en verdi som er st&oslash;rre eller lik {0}."),step:a.validator.format("Angi en verdi ganger {0}."),creditcard:"Angi et gyldig kredittkortnummer."}),a});