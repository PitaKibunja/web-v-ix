<template>
<div class="container">
      <v-simple-table>
    <template v-slot:default>
      <thead>
          <tr>
                <v-text-field placeholder="Search...">
    <v-icon
      slot="append"
      color="red"
    >
      mdi-plus
    </v-icon>
    <v-icon
      slot="prepend"
      color="green"
    >
      mdi-minus
    </v-icon>
  </v-text-field>
          </tr>
        <tr>
          <th class="text-left w">
            #
          </th>
          <th class="text-left">
           Reg.No
          </th>
        <th class="text-left">
                   Institute Name     
          </th>
        <th class="text-left">
            Town
          </th>      
        <th class="text-left">
            Status
          </th>
        <th class="text-left">
           Details
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.RegNo }}</td>
          <td>{{ item.Name }}</td>
          <td>{{ item.County }}</td>
          <td>{{ item.Type }}</td>
          <td> <router-link :to="'/sInst'+item.id">Details</router-link></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },
        {
            "id":2,
            "Name": "African Institute of Research and Development Studies, Kisumu ",
            "Contacts": "Box:19324  Code:40141  Town: KISUMU.",
            "PhoneNumber": "729323601",
            "Email": "airadskisumu@gmail.com  www.airads.ac.ke",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "KISUMU",
            "Reg Date": "1/0/00",
            "Exp Date": "1/0/00",
            "RegNo": "0",
            "Year": "2017",
            "Number": "1",
            "Location": "0",
            "Courses": "0"
        },
        {
            "id":3,
            "Name": "AFRICAN INTERNATIONAL COLLEGE – ELDORET EAST",
            "Contacts": "P.O BOX 8412 - 30100\r\nELDORET\r\n",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "UASIN GISHU",
            "Reg Date": "11/17/14",
            "Exp Date": "11/16/19",
            "RegNo": "0",
            "Year": "2016",
            "Number": "1",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "0"
        },
             {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },     {
            "id":1,
            "Name": "ADEPT COLLEGE OF PROFESSIONAL STUDIES",
            "Contacts": "P.O BOX 10101 - 20100NAKURUINFO@ADEPTCOLLEGEACKE",
            "Phone Number": "-",
            "Email": "-",
            "Category full": "VOCATIONAL TRAINING CENTER",
            "Category": "TVC",
            "Type": "PRIVATE",
            "County": "NAKURU",
            "RegDate": "1/28/16",
            "ExpDate": "1/27/21",
            "RegNo": "TVETA/PRIVATE/TVC/0003/2016",
            "Year": "2016",
            "Number": "6",
            "Location": "-",
            "Plot Number": "-",
            "Courses": "1. Professional in CPA (KASNEB) for a maximum of 100 Trainees\r\n2. Diploma in ATD (KASNEB) for a maximum of 30 Trainees \r\n3. Craft in Business Management (KNEC) for a maximum of 30 Trainees \r\n\r\n"
        },
        ],
      }
    },
  }
</script>