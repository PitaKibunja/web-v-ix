<template>
    <div class="container">
		<table class="table table-bordered center">
            <thead><tr>Institution Details</tr>
            </thead>
			<thead class="theade">
                <tr><th> <p>Institution Name</p> <td>TVET Authority Institute</td> </th></tr>
                <tr>
                    <th>
                        <h5>Registration Details.</h5>
                      <td>Reg No. </td>
                    <td>Registration Date: 1/1/2016</td>
                    <td>Registration Expiry Date: 1/1/2021</td>
                    </th>

                </tr>
                
                <tr>
                    <th>
                      <h5>Geographical</h5>
                    <td>County</td>
                    <td>Location</td>
                    <td>Land Mark</td>
                    </th>
                    </tr>
                <tr>
                    <th>
                        <h5>Contacts</h5> 
                    <td>Email:{{ email }}</td>
                    <td>Phone:{{ phone }}</td>
                    <td>Website:</td>
                         </th>
           
                </tr>
                <tr></tr>
                <tr></tr>
			</thead>
		</table>
       <div class="container">
		<table class="table table-bordered">
             <thead><tr>Programmes offered by Institution
</tr></thead>
			<thead>
				<tr>
					<th>Serial No.</th>
					<th>Course</th>
					<th>Level</th>
					<th>Enrollment</th>
				</tr>
			</thead>
		</table>
       </div>
	</div>
</template>