function showalert(){
   
    //declear variable 
    const empname=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const salary=document.getElementById('salary').value;
    const hiredate=document.getElementById('hiredate').value;
 
    // Format salary as dollar 
    const formattedsalary= new Intl.NumberFormat
         ( 'en-US',
             { style: 'currency',
               currency:'USD'}
         ).format(salary);

    alert("1. EmpName: "+empname +"\n" +
          "2. Address: "+email+"\n" +
          "3. The Salary:"+formattedsalary+"\n" + 
          "4. The hiredate: " +hiredate

    );
}