/*Task04
На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.*/

$(function() {
    let selectedCount = 0;
    $("input[type='checkbox']").on("change", function() {
        if(this.checked) {
            selectedCount++;
            if(selectedCount >= 3) {
                $("input[type='checkbox']").attr("disabled", true);
            }
        } else {
            selectedCount--;
            $("input[type='checkbox']").attr("disabled", false);
        }
    });

});