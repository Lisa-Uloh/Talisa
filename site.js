/*!
  * Page: Pulse Verification (/your-pulse/verify-me)
  * Author: DA
*/

// Next button click handler for each question.
function ShowNextPVQuestion(itemPosition, questionNumber) {
    var radioValue = $("input[name='Questions[" + questionNumber + "].SelectedOption']:checked").val();
    if (radioValue == null || radioValue == undefined || radioValue == '') {
        $("#PVQuestionDiv" + itemPosition).find('.field-validation').html('<span id="Questions[' + questionNumber + '].SelectedOption-error" class="error">Please make a selection</span>');
        $("#PVQuestionDiv" + itemPosition).find('.form-field').addClass("is-invalid");
    }
    else {
        $("#PVQuestionDiv" + itemPosition).hide();
        $("#PVQuestionDiv" + (itemPosition + 1)).show();
    }    
}


// handler for each option on individual question layout div.
function SelectPVOption(obj, questionID, itemPosition, questionNumber) {
    $("#PVQuestionDiv" + itemPosition).find('.pv-layout-question-option-selected').attr("class", "pv-layout-question-option");
    $(obj).attr("class", "pv-layout-question-option-selected");

    $("input[name='Questions[" + questionNumber + "].SelectedOption").prop('checked', false);
    $('input:radio[value="' + questionID + '"]').prop("checked", true);  

    $(obj).parent().parent().find('.field-validation').html('');
}