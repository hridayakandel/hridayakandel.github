/**
 * lab.js
 * @author hridaya
 * @since 19 Nov 2022
 */
//console.log("test");
window.onload = function () {
    const patientForm = document.getElementById("patientForm");
    let patientArr = new Array();
    patientForm.onsubmit = function (event) {
        console.log(patientArr)
        event.preventDefault();



        //TODO using object literals 

        const patientIdNumber = document.getElementById('patientIdNumber');
        const firstName = document.getElementById('firstName');
        const middleInitials = document.getElementById('middleInitials');
        const lastName = document.getElementById('lastName');
        const dateOfBirth = document.getElementById('dateOfBirth');
        const ddlDepartment = document.getElementById('ddlDepartment')
        const patientOut = patientForm.elements["radioIsOutPatient"];

        const txtpatientIdNumber = patientIdNumber.value
        const txtfirstName = firstName.value;
        const txtmiddleInitials = middleInitials.value;
        const txtlastName = lastName.value;
        const txtdateOfBirth = dateOfBirth.value;
        const txtddlDepartment = ddlDepartment.value;
        const txtpatientOut = patientOut.value;


        // result = `
        // Patient Id : ${txtpatientIdNumber}
        // First Name : ${txtfirstName}
        // Middle initial(s): ${txtmiddleInitials}
        // Last Name: ${txtlastName}
        // Date of Birth:${txtdateOfBirth}
        // Department:${txtddlDepartment}
        // Is Patient Out: ${txtpatientOut}
        // `;



        const patient = {
            patientIdNumber: txtpatientIdNumber,
            firstName: txtfirstName,
            middleInitials: txtmiddleInitials,
            lastName: txtlastName,
            dateOfBirth: txtdateOfBirth,
            ddlDepartment: txtddlDepartment,
            patientOut: txtpatientOut
        }
        patientArr.push(patient);

        //TODO using object literals 

        const tbodyPatientsList = document.getElementById('tbodyPatientsList');
        tbodyPatientsList.innerHTML = `
         <tr>
            <td scope="col">${txtpatientIdNumber}</td>
            <td scope="col">${txtfirstName}</td>
            <td scope="col">${txtmiddleInitials}</td>
            <td scope="col">${txtlastName}</td>
            <td scope="col">${txtdateOfBirth}</td>
            <td scope="col">${txtddlDepartment}</td>
            <td scope="col">${txtpatientOut}</td>
        </tr>
        `;

        patientIdNumber.value = "";
        firstName.value = "";
        middleInitials.value = "";
        lastName.value = "";
        dateOfBirth.value = "";
        ddlDepartment.value = "";
        patientOut.value = "";

        console.log(patient);
        console.log("hello")
    };

};


