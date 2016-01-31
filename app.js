$(document).ready(function() {
	var empArray = [];
	var totalMonthlySalary = 0;
	var recentSalary = 0;

	$('#employeeForm').on('submit', function(event) {
		event.preventDefault();

		var values = {};

		$.each($('#employeeForm').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		totalMonthlySalary += values.empYearlySalary / 12;  // The variable totalMonthlySalary exists outside the scope of this function, so I'm trying to figure out a better way to do this
		recentSalary = values.empYearlySalary;
		console.log(totalMonthlySalary);

		$('#employeeForm').find('input[type=text]').val('');
		$('#employeeForm').find('input[type=number]').val(0);

		appendDom(values);
	});

	// $('#removeFirst').on('click', function() {
	// 	$('#container').children().first().remove();
	// });

	$('body').on('click', '#button', function() {
		totalMonthlySalary -= recentSalary / 12;
		console.log('After removal' + totalMonthlySalary);
		$('#container').children().last().remove();
	});


	function appendDom(empInfo) {
		$('#container').append('<div></div>');
		var $el = $('#container').children().last();

		$el.append('<p>' + empInfo.empFirstName + '</p>');
		$el.append('<p>' + empInfo.empLastName + '</p>');
		$el.append('<p>' + empInfo.empID + '</p>');
		$el.append('<p>' + empInfo.empJobTitle + '</p>');
		$el.append('<p>' + empInfo.empYearlySalary + '</p>');
	}
});