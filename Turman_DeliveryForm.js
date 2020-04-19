// ==UserScript==
// @name         Turman_DeliveryForm
// @namespace    sapozhnik@gmail.com
// @version      2020.04.19.002
// @description  Turman - filling out delivery form (Ukraine)
// @author       SapozhnikUA
// @match        http://base.turman.ua/db/send_create
// @updateURL    https://github.com/SapozhnikUA/Turman_DeliveryForm/raw/master/Turman_DeliveryForm
// @downloadURL  https://github.com/SapozhnikUA/Turman_DeliveryForm/raw/master/Turman_DeliveryForm
// @supportURL   https://github.com/SapozhnikUA/Turman_DeliveryForm/issues
// @grant        none
// ==/UserScript==


console.log('Start');
// Меняем ФИО отправителя
let my_form = document.getElementById('students-form');
let input_field = my_form.querySelectorAll('input');
input_field[8].value = 'Фоменко Андрій';

// Тип отправки Эконом-экспесс-ВИП
document.getElementsByName('T_SRV').value = "EC";
document.getElementsByName('T_SRV')[3].checked = "1";

// Обратный адрес
document.getElementsByName('S_Adr')[0].value = "вул. Сверстюка Євгена, буд. 2А / БЦ Лівобережний";


console.log ('Done');
