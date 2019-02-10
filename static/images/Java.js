function test()
    {
        var getname= document.getElementById('name').value;
        var getmob= document.getElementById('mob').value;
        var geteid= document.getElementById('eid').value;
        var getpass= document.getElementById('pass').value;
        var getcnpass= document.getElementById('cnpass').value;
        var getdob= document.getElementById('dob').value;
        var getgn= document.getElementById('gn').value;
        console.log(getname);
        console.log(getmob);
        console.log(geteid);
        console.log(getpass);
        console.log(getcnpass);
        console.log(getdob);
        console.log(getgn);
        if(getpass==getcnpass)
        {
            alert("Registed Successfully");
        }
        else
        {
            alert("Password not same")
        }
        
    }