function gradingStudents(grades) {
    // Write your code here
    //Function for getting the next multiple of 5 of any number is defined

    function nextMultipleOf5(number) { 
        let divisionOf5 = number / 5;   
        let roundedUpInteger = Math.ceil(divisionOf5);  //This rounds the division up to the next integer
        let nextMultipleOf5 = roundedUpInteger * 5;

        return nextMultipleOf5;
    }

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) { 
            grades[i] = grades[i];
        } 
        else if ((nextMultipleOf5(grades[i]) - grades[i]) < 3) {
            grades[i] = nextMultipleOf5(grades[i]);
        }
    }

    return grades;
}
