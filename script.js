function check()
{
    var check=true;
    nik=document.getElementById("nik").value;

    panjang=nik.length;
    if(panjang<16)
    {
        alert("Panjang NIK Harus 16 Karakter");
    }
    else if(panjang>16)
    {
        alert("Panjang NIK Harus 16 Karakter");
    }
    else
    {
        // alert("Test");
        var provinces_id = nik.substring(0, 2);
        var kabupaten = nik.substring(2, 4);
        var district = nik.substring(4, 6);
        var tanggal_entri = nik.substring(6, 12);
        var regis_num = nik.substring(12, 16);   


        $.getJSON('json/regencies.json', function(data) {

            //data is the JSON string
            var my_json = JSON.stringify(data);
            // console.log(my_json);
            var filtered_json = find_in_object(JSON.parse(my_json), {
                city_id: kabupaten,
                provinces_id: provinces_id
            });
            if (filtered_json.length == 0) {
                check = false;
            }
            else
            {
                
                // check_kecamatan(filtered_json,district);
                check_1(filtered_json);
            }
            // FIlter Function
            function find_in_object(my_object, my_criteria) {

                return my_object.filter(function(obj) {
                    return Object.keys(my_criteria).every(function(c) {
                        return obj[c] == my_criteria[c];
                    });
                });

            }

            // console.log(check);

            if (check == false) {
                alert("NIK Tidak Sesuai");

            } else {
                // alert("Provinsi, Kabupaten Sesuai");
                // check_kecamatan(provinces_id,kabupaten,district);s

            }

        });
    
    }

   

    
}



function check_1(jsonnya)
{
    console.log(jsonnya);
    console.log(jsonnya[0]['regencies_id']);
    var regencies_id=jsonnya[0]['regencies_id'];
    var check=true;
    nik=document.getElementById("nik").value;

    panjang=nik.length;
    if(panjang<16)
    {
        alert("Panjang NIK Harus 16 Karakter");
    }
    else if(panjang>16)
    {
        alert("Panjang NIK Harus 16 Karakter");
    }
    else
    {
        // alert("Test");
        var provinces_id = nik.substring(0, 2);
        var kabupaten = nik.substring(2, 4);
        var district = nik.substring(4, 6);
        var tanggal_entri = nik.substring(6, 12);
        var regis_num = nik.substring(12, 16);   


        $.getJSON('json/districts.json', function(data) {

            //data is the JSON string
            var my_json1 = JSON.stringify(data);
            // console.log(my_json);
            var filtered_json = find_in_object(JSON.parse(my_json1), {
                regencies: regencies_id,
                district_id: district
            });
            if (filtered_json.length == 0) {
                check = false;
                console.log(filtered_json);
            }
            else
            {
                console.log(filtered_json);
                // check_kecamatan(filtered_json,district);
            }
            // FIlter Function
            function find_in_object(my_object, my_criteria) {

                return my_object.filter(function(obj) {
                    return Object.keys(my_criteria).every(function(c) {
                        return obj[c] == my_criteria[c];
                    });
                });

            }

            // console.log(check);

            if (check == false) {
                alert("NIK Tidak Sesuai");

            } else {
                // alert("Provinsi, Kabupaten Sesuai");
                // check_kecamatan(provinces_id,kabupaten,district);s

            }

        });
    
    }

   

    
}



