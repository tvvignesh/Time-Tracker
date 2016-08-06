//DEVICE IS CURRENTLY OFFLINE
function deviceoffline()
{
	if($("#logbtndisabled").length>0)
	{
		if($("#logbtndisabled").html()=="View Reports")
		{
			$("#msgdiv").html("<font color='red'>OOPS! Your device is currently not connected to the internet! Please switch on the internet connection to ensure proper working of the application!</font>");
			$("#logbtndisabled").html("Retry");
			$("#logbtndisabled").attr("id","logstart");
		}
		else
		{
			return;
		}
	}
	else
	{
		$("#msgdiv").html("<font color='red'>OOPS! Your device is currently not connected to the internet! Please switch on the internet connection to ensure proper working of the application!</font>");
	}
}

//SET A COOKIE
function createCookie(name,value,days) 
{
	if (days) 
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else 
	{var expires = "";}
	document.cookie = name+"="+value+expires+"; path=/";
}
//READ A COOKIE
function readCookie(name) 
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) 
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0)
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
//DELETE A COOKIE
function eraseCookie(name)
{
	createCookie(name,"",-1);
}
//NEW THEME CLICKED
function newthemefunc()
{
	do
	{
		window.thmname=prompt("Please Enter the name of your new theme");
		if(thmname=="")
		{
			if(alert("OOPS! You cannot leave the theme name empty! Try Again!"))
			{
				continue;
			}
		}
	}while(window.thmname=="");

	if(window.thmname==null)return;
	
	window.tvisibility=1;//private
	if(confirm("Do you want to make this theme public? If yes, Click OK else press Cancel. Public themes will be available for everyone to use."))
	{
		window.tvisibility=2;//public
	}
	else
	{
		window.tvisibility=1;//private
	}
					
	$("#msgdiv").html("Please Wait. Sending data. Please ensure if your internet connection is turned on!");
	var did = device.uuid;
	var dname=device.platform;
	var uname=checkuname();
	
	selectquery("SELECT * FROM THEMEDB WHERE themename='"+window.thmname+"'",dbobj,function(tx,results){
		if(results.rows.length!=0)
		{
			alert("Sorry! The theme already exists!");return;
		}
	},function(){alert("Error in accessing the database!");return;});
	var themeid=Math.floor((Math.random()*1000000)+1);
	var crtime = new Date();

dbquery="INSERT INTO THEMEDB (themeid,themename,did,createtime,dname,uname,presetthm,publicthm) VALUES ('"+themeid+"','"+window.thmname+"','"+did+"','"+crtime+"','"+dname+"','"+uname+"','0','"+window.tvisibility+"')";
sqlquery(dbquery,dbobj,function(){alert("Theme Created Successfully!");createCookie('tathmid',themeid,1);navpage("eventtype.html");},function(){alert("OOPS! There was an error in creating your account!");navpage("eventadd.html");});
}

function navpage(url)
{
	$.mobile.changePage(url, { transition: "slideup"});
}

//GET CURRENT THEME ID
function getthmid(thmname)
{
	var already=$("#msgdiv").html();
	$.ajax({
	url: weburl+"/themeid.php?thname="+thmname,
	success: function(data) 
	{
		if(window.tests==2)
		{
			window.theid=data;
			createCookie('tathmid', data,1);
			//window.location.assign('eventtype.html');
			navpage('eventtype.html');
		}
	},
	error:function(xhr,err){
		alert("Error State: "+xhr.readyState+"\nstatus: "+xhr.status);
		alert("Error Text: "+xhr.responseText);
	}
	});
	return window.theid;
}

//GET SESSION ID
function getsession()
{
	var session=readCookie('sessionid');var flag=0;
	if(session==""||session==null)
	{
		return "";
	}
	else
	{
		return session;
	}
}

function inputsToArray (inputs) {
   var arr = [];
   for (var i = 0; i < inputs.length; i++) {
       if (inputs[i].checked)
           arr.push(inputs[i].value);
   }
   return arr;
}

    
function serializeArray (array, name)
{
    var serialized = '';
    for(var i = 0, j = array.length; i < j; i++) {
        if(i>0) serialized += '&';
        serialized += name + '=' + array[i];
    }
    return serialized;
}

function getpreset()
{
	window.status11=readCookie('presetthm');
	if(window.status11!=""&&window.status11!=null&&window.status11==1)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}

//GET THEME ID
var status11;
function gettheme()
{
	window.status11=readCookie('tathmid');
	if(window.status11!=""&&window.status11!=null)
	{
		return window.status11;
	}
	else
	{
		return "";
	}
}
//GET USER NAME
function checkuname()
{
	var status=readCookie('loggedin');
	if(status==""&&status==null)
	{
		return "";
	}
	else
	{
		return status;
	}
}
//GET LOGIN STATUS
function checklogin()
{
	//2-not logged in 1-logged in
	var status=readCookie('loggedin');
	if(status==""||status==null)
	{
		return 2;
	}
	else
	{
		return 1;
	}
}
//HOME PAGE LOGIN
function submitfunc()
{
	unm=document.loginform.uname.value;
	passwd=document.loginform.pass.value;
	if(unm==""||passwd=="")
	{
		showalert("Please Enter a Non-empty user-id and password!","OOPS!","Try Again!");
	}
	else
	{
		document.loginform.submit();
	}
}
//DEVICE ALERT BOX
function showalert(message,title,button) 
{
	navigator.notification.alert(
		message,  // message
		alertDismissed,// callback
		title,// title
		button // buttonName
	);
}
//CALL BACK ON HOME PAGE ALERT DISMISSAL
function alertDismissed()
{
	document.getElementById('msgdiv').innerHTML="Please enter a non-empty Username and Password!";
}
//ADD EVENT
function addneweventfunc()
{
	if(evname=prompt("Please Enter the Name of the Event you want to create"))
	{
		if(evname==""||evname==null)
		{
			alert("OOPS! The Event Name cannot be empty! Please Try Again!");
			return;
		}
		$("#msgdiv").html("Please Wait.. Creating Event..");
		$("#addevt").attr("id","addevt1");
		
		var eid=Math.floor((Math.random()*1000000)+1);
		var evcrtime = new Date();
		var sessid=readCookie('sessionid');
		if(sessid==null||sessid=="")
		{
			sessid=Math.floor((Math.random()*1000000)+1);
			createCookie('sessionid',sessid);
		}
		dbquery="INSERT INTO EVTDB (eid,thmid,uname,evname,ecreatetime,sessionid) VALUES ('"+eid+"','"+gettheme()+"','"+checkuname()+"','"+evname+"','"+evcrtime+"','"+sessid+"')";
		sqlquery(dbquery,dbobj,function(){$("#msgdiv").html("Event Created Successfully!");},function(){alert("OOPS! There was an error in adding the event!");});
	}
}
var dbvar;
//CREATE DATABASE
function createdb(dbname,dbshowname)
{
	dbvar=window.openDatabase(dbname,"1.1",dbshowname,200000);
	if (!dbvar) 
	{
		alert("OOPS! Failed to connect to database.");return false;
	}
	return dbvar;
}

//CREATE TABLES
function createtables()
{
	dbobj=createdb("timetrackerdb","TIME TRACKER");
	dbquery="CREATE TABLE IF NOT EXISTS USERDB (uname,upass,uid,createtime,email,aggaccept,subscribe,loginid)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
	dbquery="CREATE TABLE IF NOT EXISTS THEMEDB (themeid,themename,did,createtime,dname,uname,presetthm,publicthm)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
	dbquery="CREATE TABLE IF NOT EXISTS EVTDB (eid,thmid,uname,evname,ecreatetime,sessionid)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
	dbquery="CREATE TABLE IF NOT EXISTS GPTABLE (eid1,eid2,gid,uname,etype,thmid)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
	dbquery="CREATE TABLE IF NOT EXISTS INTERVENTIONDB (ieid,gpid,uname,thmid)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
	dbquery="CREATE TABLE IF NOT EXISTS PRESSDB (eid,gpid,thmid,sid,uname,presstime,status)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
	dbquery="CREATE TABLE IF NOT EXISTS SIMULEVTDB (gpid,seid1,seid2,uname,thmid)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
	dbquery="CREATE TABLE IF NOT EXISTS SIMULINTDB (gpid,seid1,seid2,uname,thmid)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
	dbquery="CREATE TABLE IF NOT EXISTS STARTSTOPDB (thmid,sid,uname,presstime,status)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
	dbquery="CREATE TABLE IF NOT EXISTS CONTEVTDB (ceid,uname,thmid,ecreatetime,gpid)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
	dbquery="CREATE TABLE IF NOT EXISTS EVPRESS (eid,gpid,thmid,sid,uname,presstime,status)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
	dbquery="CREATE TABLE IF NOT EXISTS GPEND (thmid,sid,uname,presstime,status)";
	sqlquery(dbquery,dbobj,function(){},function(err){alert("OOPS! There was an error in creating the Tables for the Database! CODE:"+err.code);});
}

//SQL QUERY
function sqlquery(querystr,obj,successfunc,errorfunc)
{
	obj.transaction(function (tx) {tx.executeSql(querystr);},errorfunc,successfunc);
}
//SQL SELECT QUERY
function selectquery(querystr,obj,successfunc,errorfunc)
{
	obj.transaction(function (tx){tx.executeSql(querystr,[],successfunc,errorfunc);},function(){alert("There was an error in executing the query!");},function(){});
}
//ERROR IN LOGGING EVENT
function errorlogging(err) 
{
	alert("Error processing SQL: Main err"+err.code);
}
//SUCCESSFULLY LOGGED EVENT
function successlogging() 
{
	$("#msgdiv").html("Logged event");
}
//CONTINUOUS EVENT
function continuouspageload()
{
	var tid=gettheme();
	var uname=checkuname();
	var sessionid=getsession();
	dbquery="SELECT * FROM EVTDB WHERE sessionid='"+sessionid+"' AND thmid='"+tid+"' AND uname='"+uname+"'";
	selectquery(dbquery,dbobj,function(tx,results){
	if(results.rows.length==0)
	{
		alert("Sorry! There are no Events to show!");navpage('index.html');return;
	}
	else
	{
		var appendtext;
		appendtext='Please Check All the Continuous Events from the list below:<br><br><form name="contlist" id="contlist"><div id="contacts">';
		for(var i=0;i<results.rows.length;i++)
		{
			appendtext+='<input type="checkbox" name="cevtlist[]" value="'+results.rows.item(i).eid+'"> '+results.rows.item(i).evname+'<br><br>';
			$("#maincont").append(appendtext);
		}
		appendtext+='<br><br></div><div align="center"><input type="button" name="scontbtn" id="scontbtn" value=" Proceed "></div></form>';
		$("#mainconts").html(appendtext);
		$("#scontbtn").click(function(){
			var contacts=$("input:checked");
			var eid;
			var crtime = new Date();
			var dbquery1;
			contacts.each(function(index) {
				eid=$(this).val();
				dbquery1="INSERT INTO CONTEVTDB (ceid,uname,thmid,ecreatetime,gpid) VALUES ('"+eid+"','"+uname+"','"+tid+"','"+crtime+"','')";
				sqlquery(dbquery1,dbobj,function(){},function(){});
			});
			navpage('defineintevt.html');
	});
		
	}
	},function(){alert("Error in accessing the database!");return;});
}

function allevtfunc(elem,evttype,callbackfunc)
{
	elem.unbind(evttype,callbackfunc).bind(evttype,callbackfunc);
}

function simevtlist1(tx,results)
{
	var cureid,curenm,appendtext;
	appendtext='';
	if(results.rows.length==0)
	{
		alert("OOPS! There are no events currently!");navpage("definesimint.html");
	}
	else
	{
		appendtext+="<br><br><form name='simevtlist' id='contlist'><div id='contacts'>Event 1: <select name='sim1'>";
		for(var i=0;i<results.rows.length;i++)
		{
			cureid=results.rows.item(i).eid;
			curenm=results.rows.item(i).evname;
			appendtext+='<option value="'+cureid+'">'+curenm+'</option>';
		}
		appendtext+="</select>";
		$("#subcont").html(appendtext);
		dbquery1="SELECT * FROM EVTDB LEFT OUTER JOIN INTERVENTIONDB on EVTDB.eid=INTERVENTIONDB.ieid WHERE INTERVENTIONDB.ieid IS NULL AND EVTDB.thmid='"+tid+"' AND EVTDB.uname='"+uname+"'";
		selectquery(dbquery1,dbobj,simevtlist2,function(){alert("Error in accessing the database!");return;});
	}
}

function simevtlist2(tx,results)
{
	var cureid,curenm,appendtext;
	appendtext='';
	if(results.rows.length==0)
	{
		alert("OOPS! There are no events currently!");navpage("definesimint.html");
	}
	else
	{
		appendtext+="<br><br>Event 2: <select name='sim2'>";
		for(var i=0;i<results.rows.length;i++)
		{
			cureid=results.rows.item(i).eid;
			curenm=results.rows.item(i).evname;
			appendtext+='<option value="'+cureid+'">'+curenm+'</option>';
		}
		appendtext+="</select></div>";
		$("#subcont").append(appendtext);
		finishsimevtlist();
	}
}

function finishsimevtlist()
{
	$("#subcont").append("<br><br><div align='center'><input type='button' name='simcontbtn' id='simcontbtn' value=' Proceed '></div></form>");
	$("#simcontbtn").click(function(){
		var e1=$("select[name='sim1']").val();
		var e2=$("select[name='sim2']").val();
		console.log("E1:"+e1);
		console.log("E2:"+e2);
		if(e1==e2)
		{
			alert("OOPS! Both events you selected are the same! Try selecting different events/interventions!");
			return;
		}
		var gpid=Math.floor((Math.random()*1000000)+1);
		var dbquery3="INSERT INTO SIMULEVTDB (gpid,seid1,seid2,uname,thmid) VALUES ('"+gpid+"','"+e1+"','"+e2+"','"+checkuname()+"','"+gettheme()+"')";
		sqlquery(dbquery3,dbobj,function(){
			var dbquery4="INSERT INTO GPTABLE (eid1,eid2,gid,uname,etype,thmid) VALUES ('"+e1+"','"+e2+"','"+gpid+"','"+checkuname()+"','1','"+tid+"')";
			sqlquery(dbquery4,dbobj,function(){$("#msgdivsim1").html("Simultaneous Event Defined Successfully!");$("#subcont").html("");},function(){alert("OOPS! There was an error in defining simultaneous event!");});
		},function(){alert("OOPS! There was an error in defining simultaneous event!");});
	});
}

//SIMULTANEOUS INTERVENTIONS
function simintlist1(tx,results)
{
	var cureid,curenm,appendtext;
	appendtext='';
	if(results.rows.length==0)
	{
		alert("OOPS! There are no interventions currently!");navpage("final.html");
	}
	else
	{
		appendtext+="<br><br><form name='simevtlist' id='contlist'><div id='contacts'>Intervention 1: <select name='sim11'>";
		for(var i=0;i<results.rows.length;i++)
		{
			cureid=results.rows.item(i).eid;
			curenm=results.rows.item(i).evname;
			appendtext+='<option value="'+cureid+'">'+curenm+'</option>';
		}
		appendtext+="</select>";
		$("#subcont1").html(appendtext);
		dbquery1="SELECT * FROM EVTDB LEFT OUTER JOIN INTERVENTIONDB on EVTDB.eid=INTERVENTIONDB.ieid WHERE ((INTERVENTIONDB.ieid IS NOT NULL) AND EVTDB.thmid='"+tid+"' AND EVTDB.uname='"+uname+"')";
		selectquery(dbquery1,dbobj,simintlist2,function(){alert("Error in accessing the database!");return;});
	}
}

function simintlist2(tx,results)
{
	var cureid,curenm,appendtext;
	appendtext='';
	if(results.rows.length==0)
	{
		alert("OOPS! There are no events currently!");navpage("definesimint.html");
	}
	else
	{
		appendtext+="<br><br>Event 2: <select name='sim22'>";
		for(var i=0;i<results.rows.length;i++)
		{
			cureid=results.rows.item(i).eid;
			curenm=results.rows.item(i).evname;
			appendtext+='<option value="'+cureid+'">'+curenm+'</option>';
		}
		appendtext+="</select></div>";
		$("#subcont1").append(appendtext);
		finishsimintlist();
	}
}

function finishsimintlist()
{
	$("#subcont1").append("<br><br><div align='center'><input type='button' name='simcontbtn1' id='simcontbtn1' value=' Proceed '></div></form>");
	$("#simcontbtn1").click(function(){
		var e1=$("select[name='sim11']").val();
		var e2=$("select[name='sim22']").val();
		if(e1==e2)
		{
			alert("OOPS! Both interventions you selected are the same! Try selecting different interventions!");
			return;
		}
		var gpid=Math.floor((Math.random()*1000000)+1);
		var dbquery3="INSERT INTO SIMULINTDB (gpid,seid1,seid2,uname,thmid) VALUES ('"+gpid+"','"+e1+"','"+e2+"','"+checkuname()+"','"+gettheme()+"')";
		sqlquery(dbquery3,dbobj,function(){
			var dbquery4="INSERT INTO GPTABLE (eid1,eid2,gid,uname,etype,thmid) VALUES ('"+e1+"','"+e2+"','"+gpid+"','"+checkuname()+"','2','"+tid+"')";
			sqlquery(dbquery4,dbobj,function(){$("#msgdivsim1").html("Simultaneous Intervention Defined Successfully!");$("#subcont1").html("");},function(){alert("OOPS! There was an error in defining simultaneous intervention!");});
		},function(){alert("OOPS! There was an error in defining simultaneous intervention!");});
	});
}

function CreateTimer(TimerID, Time) 
{
	Timer = document.getElementById(TimerID);
	TotalSeconds = Time;
	UpdateTimer()
	timerstop=window.setTimeout("Tick()", 1000);
}

function Tick() 
{
	TotalSeconds += 1;
	UpdateTimer()
	timerstop1=window.setTimeout("Tick()", 1000);
}

function UpdateTimer() 
{
	var Seconds = TotalSeconds;
	var Days = Math.floor(Seconds / 86400);
	Seconds -= Days * 86400;
	var Hours = Math.floor(Seconds / 3600);
	Seconds -= Hours * (3600);
	var Minutes = Math.floor(Seconds / 60);
	Seconds -= Minutes * (60);
	var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Hours) + ":" + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)
	Timer.innerHTML = TimeStr;
}


function LeadingZero(Time) 
{
 return (Time < 10) ? "0" + Time : + Time;
}

//For Event Presses
function evquerySuccess(tx, results) {
	var sid=getsession();
	var	uname=checkuname();
	var	tid=gettheme();
	var len = results.rows.length;
	if(len!=0)
	{$("#msgdivfinal").html('<font color="red">Please wait.. Uploading data to server for permanent storage..</font>');}
	else
	{alert("There is no data to upload! No activities were recorded");return;}
	var row,cureid,curgpid,cur,curpresstime,curstatus,curuname,cursid,curthmid;
	//var resultSet=new Array();
	for(var i=0;i<len;i++)
	{
		row = results.rows.item(i);
		cureid=row.eid;curgpid=row.gpid;curpresstime=row.presstime;curuname=row.uname;cursid=row.sid;curthmid=row.thmid;curstatus=row.status;
		var dbquery10="INSERT INTO PRESSDB (eid,gpid,thmid,sid,uname,presstime,status) VALUES ('"+cureid+"','"+curgpid+"','"+curthmid+"','"+cursid+"','"+curuname+"','"+curpresstime+"','"+curstatus+"')";
		sqlquery(dbquery10,dbobj,function(){
			$("#msgdivfinal").html("Added Event ID:"+cureid);
			if(i==len-1)
			{
				$("#msgdivfinal").html("<font color='green'>Done Uploading Event Presses.. Uploading Final information..</font>");
				$("#msgdivfinal").html(msg);
			}
		},function(){$("#msgdivfinal").html("Error in ADDING EVENT");$("#logbtndisabled").html("Retry");$("#logbtndisabled").attr("id","logstart");$("#msgdiv").html('<font color="red">OOPS! An error occured in uploading.. Try Again..</font>');});
	}
}

//For GPEND
function gpquerySuccess(tx, results) {
	if($("#msgdivfinal").html()=="<font color='red'>OOPS! An error occured in uploading.. Try Again..</font>")
	{
	return;
	}
	var sid=getsession();
	var	uname=checkuname();
	var	tid=gettheme();
	var len = results.rows.length;
	if(len!=0)
	{$("#msgdivfinal").html('<font color="yellow">Please wait.. Uploading data to server for permanent storage..</font>');}
	else
	{alert("There is no data to upload! No activities were recorded");return;}
	var row,cureid,curgpid,cur,curpresstime,curstatus,curuname,cursid,curthmid;
	//var resultSet=new Array();
	for(var i=0;i<len;i++)
	{
		row = results.rows.item(i);
		//resultSet[i] = row;
	}
	for(var i=0;i<len;i++)
	{
		row = results.rows.item(i);
		curpresstime=row.presstime;curuname=row.uname;cursid=row.sid;curthmid=row.thmid;curstatus=row.status;
		//(thmid,sid,uname,presstime,status)
		//resultSet[i] = row;
		var dbquery10="INSERT INTO STARTSTOPDB (thmid,sid,uname,presstime,status) VALUES ('"+curthmid+"','"+cursid+"','"+curuname+"','"+curpresstime+"','"+curstatus+"')";
		sqlquery(dbquery10,dbobj,function(){
			$("#msgdivfinal").html("Done Adding Group Events");
			if(i==len-1)
			{
				$("#msgdivfinal").html("<font color='green'>Done Uploading Event Presses.. Uploading Final information..</font>");
				$("#msgdivfinal").html(msg);
				navpage('viewfinalreports.html');
			}
		},function(){$("#msgdivfinal").html("Error in ADDING EVENT");$("#logbtndisabled").html("Retry");$("#logbtndisabled").attr("id","logstart");$("#msgdivfinal").html('<font color="red">OOPS! An error occured in uploading.. Try Again..</font>');});
	}
}

function logstarted()
{
	if($(this).html()=="Stop"||$(this).html()=="Retry")
	{
		var presstime = new Date(); 
		window.clearTimeout(timerstop);
		window.clearTimeout(timerstop1);
		$("#timer").css("color","red");
		$("#timer").css("font-size","20px");
		if($(this).html()!="Retry")
		{
			var dbquery10="INSERT INTO GPEND (thmid,sid,uname,presstime,status) VALUES ('"+tid+"','"+sid+"','"+uname+"','"+presstime+"','2')";
			sqlquery(dbquery10,dbobj,function(){$("#msgdivfinal").html("Group Event Logged!");},function(){$("#msgdivfinal").html("Error in Group Event Logging!");});
		}
		
		var dbquery11="SELECT * FROM EVPRESS WHERE sid='"+sid+"' AND thmid='"+tid+"' AND uname='"+uname+"'";
		selectquery(dbquery11,dbobj,evquerySuccess,function(){alert("Error in accessing the database Event Press!");return;});
		var dbquery12="SELECT * FROM GPEND WHERE sid='"+sid+"' AND thmid='"+tid+"' AND uname='"+uname+"'";
		selectquery(dbquery12,dbobj,gpquerySuccess,function(){alert("Error in accessing the database Group Press!");return;});
		
		/*window.logdb.transaction(function (tx){
			var query2="SELECT * FROM EVPRESS WHERE sid='"+sid+"' AND thmid='"+tid+"' AND uname='"+uname+"'";
			tx.executeSql(query2, [], evquerySuccess, errorCB1);
			var query3="SELECT * FROM GPEND WHERE sid='"+sid+"' AND thmid='"+tid+"' AND uname='"+uname+"'";
			tx.executeSql(query3, [], gpquerySuccess, errorCB2);
		}, errorCB,successCB);*/
		
		$(this).html("View Reports");
		$(this).attr('id', 'logbtndisabled');
		$(this).unbind("click");
		$(this).bind("click",function(){
			navpage("viewfinalreports.html");
		});
		return;
	}
					
	$(this).html("Stop");
	var presstime = new Date(); 
	var querye="INSERT INTO GPEND (thmid,sid,uname,presstime,status) VALUES ('"+tid+"','"+sid+"','"+uname+"','"+presstime+"','1')";
	sqlquery(querye,dbobj,function(){$("#msgdivfinal").html("Group Start Event Logged!");},function(){$("#msgdivfinal").html("Error in Group Start Event Logging!");});
								
	//TIMER CALL
	var Timer;
	var TotalSeconds;
	CreateTimer("timer", 0);
}

function logtouchstart(event)
{
	$(this).css("background-color","blue");
	var presstime = new Date(); 
	eidp=event.target.id;
	var elembtn=$("#"+eidp);
	if(eidp=="")return;
	if(elembtn.attr("rel")!="eventbtn")return;//NOT A BUTTON							
	gclass="";
	cevt=elembtn.attr("contevt");
	if(cevt!="2")//NOT A CONTINUOUS EVENT
	{
		gclass=elembtn.attr("alt");
		$("#msgdivfinal").html(gclass);
		//MULTIPLE BUTTONS ARE PRESSED ALREADY
		if(window.pressindex!=-1)
		{
			var allowed=0;
			for(var i=0;i<window.pressedbtns.length;i++)
			{
				var thisarr=gclass.split(" ");
				var mainarrid=window.pressedbtns[i];
				var mainarrclass=$("#"+mainarrid).attr("alt");
				var mainarr=mainarrclass.split(" ");
				
				for(var j=0;j<thisarr.length;j++)
				{
					var thischar=thisarr[j];
					for(var k=0;k<mainarr.length;k++)
					{
						if(mainarr[i]==thischar)allowed=1;
					}
				}
			}								
			if(allowed!=1){$("#msgdivfinal").html("<font color='red'>You cannot press those buttons together!</font>");return;}
		}
		window.pressedbtns[++window.pressindex]=eidp;
		window.c++;
	}
	console.log("GPCLASS START:"+gclass);
	dbquery8="INSERT INTO EVPRESS (eid,gpid,thmid,sid,uname,presstime,status) VALUES ('"+eidp+"','"+gclass+"','"+tid+"','"+sid+"','"+uname+"','"+presstime+"','1')";
	sqlquery(dbquery8,dbobj,function(){$("#msgdivfinal").html("Event Logged!");},function(){$("#msgdivfinal").html("Error in Event Logging!");});
}

function logtouchend(event)
{
	$(this).css("background-color","");
	var presstime = new Date(); 
	eidp=event.target.id;
	var elembtn=$("#"+eidp);
	if(eidp=="")return;
	if(elembtn.attr("rel")!="eventbtn")return;//NOT A BUTTON

	gclass="";
	cevt=elembtn.attr("contevt");
	if(cevt!="2")//NOT A CONTINUOUS EVENT
	{
		gclass=elembtn.attr("alt");
		$("#msgdivfinal").html(gclass);
		for(var i=0;i<window.pressedbtns.length;i++)
		{
			if(window.pressedbtns[i]==eidp)
			{
				window.pressedbtns.splice(i,1);
			}
		}
		--window.pressindex;
		window.c--;

		var dbquery9="INSERT INTO EVPRESS (eid,gpid,thmid,sid,uname,presstime,status) VALUES ('"+eidp+"','"+gclass+"','"+tid+"','"+sid+"','"+uname+"','"+presstime+"','2')";
		sqlquery(dbquery9,dbobj,function(){$("#msgdivfinal").html("Event Logged!");},function(){$("#msgdivfinal").html("Error in Event Logging!");});
	}
	console.log("GPCLASS END:"+gclass);
}

function finalgptable(tx1,results1)
{
	var results=window.evloopresultsobj;
	var i=window.evloop;
	for(var j=0;j<results1.rows.length;j++)
	{
		gpclass+=results1.rows.item(j).gid+' ';
	}
	dbquery6="SELECT * FROM CONTEVTDB WHERE ceid='"+cureid+"'";
	selectquery(dbquery6,dbobj,function(tx2,results2){
		if(results2.rows.length!=0)
		{
			cevt=2;
		}
		else
		{
			cevt=1;
		}
		if(i==results.rows.length-1)
		{
			//last event
			appendtext+='<div class="selbtn evtbtn" id="'+cureid+'" alt="'+gpclass+'" style="" rel="eventbtn" contevt="'+cevt+'" gpclass="'+gpclass+'">'+curename+'</div>';
			appendtext+='</div>';
			$("#maincontfinal").html(appendtext);
			
			//TOUCH EVENT LISTENERS
			document.addEventListener('touchstart',logtouchstart);
			document.addEventListener('touchend',logtouchend);
		}
		else
		{
			appendtext+='<div class="selbtn evtbtn" id="'+cureid+'" alt="'+gpclass+'" style="" rel="eventbtn" contevt="'+cevt+'" gpclass="'+gpclass+'">'+curename+'</div>';
		}
		
			window.evloop++;
			if(window.evloop!=window.evloopresultsobj.rows.length)
			{
				finalevts(window.evlooptxobj,window.evloopresultsobj);
			}
			else
			{
				return;
			}
			
	});
}

function finalevts(tx,results)
{
	if(results.rows.length<=0){
		alert("OOPS! No events were recorded in the database! Please try starting over again!");
		navpage("index.html");
	}
	else
	{
		var rounded;
		i=window.evloop;
		if(i==0)
		{
			rflag=0;
			appendtext+='<div id="leftcont">';
		}
		window.evlooptxobj=tx;
		window.evloopresultsobj=results;
		
			gpclass='';
			cureid=results.rows.item(i).eid;
			curename=results.rows.item(i).evname;
			rounded=Math.round(results.rows.length/i);
			if(rounded==2&&rflag==0)
			{
				rflag=1;
				appendtext+='</div><div id="rightcont">';
			}
			dbquery5="SELECT * FROM GPTABLE WHERE (eid1='"+cureid+"' OR eid2='"+cureid+"' AND uname='"+uname+"' AND thmid='"+tid+"')";
			selectquery(dbquery5,dbobj,finalgptable,function(){alert("OOPS! An error occured in accessing the database!");});
		
	}
}

function colorgen()
{
	r=Math.floor((Math.random()*255));
	g=Math.floor((Math.random()*255));
	b=Math.floor((Math.random()*255));
    return "rgb("+r+","+g+","+b+");";
}

function getalldbdetails(tx,results)
{
	var dbquery;
		dbquery="SELECT * FROM STARTSTOPDB WHERE thmid='"+tid+"' AND sid='"+sid+"' AND uname='"+uname+"' LIMIT 0,2";
		selectquery(dbquery,dbobj,function(tx1,results1){
			window.db_startstop=results1.rows;
			dbquery="SELECT * FROM PRESSDB WHERE sid='"+getsession()+"' AND uname='"+checkuname()+"' AND thmid='"+gettheme()+"'";
			selectquery(dbquery,dbobj,function(tx2,results2){
				window.db_pressdb=results2.rows;
				dbquery="SELECT * FROM CONTEVTDB WHERE ceid='"+cureid+"' AND uname='"+checkuname()+"'";
				selectquery(dbquery,dbobj,function(tx3,results3){
					window.db_contevtdb=results3.rows;
					dbquery="SELECT * FROM EVTDB WHERE thmid='"+gettheme()+"' AND sessionid='"+getsession()+"'";
					selectquery(dbquery,dbobj,function(tx4,results4){
						window.db_evtdb=results4.rows;
						finishedfetching();
					});
				});
				
			});
		},function(){alert("OOPS! An error occured in accessing the database!");});
}

function finishedfetching()
{
	$("#maincontrep").html("");
	var tstart,tend;
	var scale=window.scales;
	window.cevtarray=[];
	window.evtarray=[];
	window.keyarray=[];
	for(var i=0;i<window.db_startstop.length;i++)
	{
		if(window.db_startstop.item(i).status=="1")
		{
			tstart=window.db_startstop.item(i).presstime;
		}
		else
		{
			tend=window.db_startstop.item(i).presstime;
		}
	}
	tstart1=Date.parse(tstart);
	tend1=Date.parse(tend);
	phasetime=Date.parse(tend)-Date.parse(tstart);
	if(phasetime==0)
	{
		alert("OOPS! No event was recorded in our database! Try Again!");return;
	}
	i=c3=0;
	for(var e=0;e<window.db_pressdb.length;e++)
	{
		eid=window.db_pressdb.item(e).eid;
		gpid=window.db_pressdb.item(e).gpid;
		thmid=window.db_pressdb.item(e).thmid;
		sessid=window.db_pressdb.item(e).sid;
		username=window.db_pressdb.item(e).uname;
		presstime=window.db_pressdb.item(e).presstime;
		status=window.db_pressdb.item(e).status;

		if(window.db_contevtdb.length!=0)
		{
			window.cevtarray[c3]={};
			window.cevtarray[c3]["evid"]=eid;
			window.cevtarray[c3]["presstime"]=presstime;
			window.cevtarray[c3]["status"]=status;
			c3++;
			continue;
		}
		window.evtarray[i]={};
		window.evtarray[i]["evid"]=eid;
		window.evtarray[i]["gpid"]=gpid;
		window.evtarray[i]["presstime"]=presstime;
		window.evtarray[i]["status"]=status;
		i++;
	}
	
	
	q=0;
//NORMAL EVENTS
for(var j=0;j<window.evtarray.length;j++)
{
	for(var k=j+1;k<window.evtarray.length;k++)
	{
		if(window.evtarray[k]["evid"]==window.evtarray[j]["evid"]&&window.evtarray[k]["status"]=="2")
		{
			t1=Date.parse(window.evtarray[k]["presstime"]);//end time
			t2=Date.parse(window.evtarray[j]["presstime"]);//start time
			timediff=t1-t2;//IN SECONDS
			timelinestart=t2-tstart1;
			timelineend=t1-tend1;
			unit=phasetime/scale;//HOW MANY SECONDS = 1PX
			timelinestartpx=timelinestart/unit;
			timelineendpx=timelineend/unit;
			timelinewidthpx=timelineendpx-timelinestartpx;
			timelinewidthpx=Math.abs(timelinewidthpx);

			bgcolors=colorgen();
			evvid=window.evtarray[k]["evid"];
			window.keyarray[q]={};
			window.keyarray[q]['bgcolors']=bgcolors;
			window.keyarray[q]['eid']=window.evtarray[k]["evid"];
			window.keyarray[q]['stime']=window.evtarray[j]["presstime"];
			window.keyarray[q]['etime']=window.evtarray[k]["presstime"];
			//$chk22=mysql_query("SELECT * FROM evtdb WHERE eid='$evvid' LIMIT 0,1");
			//$c22=@mysql_fetch_array($chk22);
			for(var g=0;g<window.db_evtdb.length;g++)
			{
				if(window.db_evtdb.item(g).eid==evvid)
				{
					evtsname=window.db_evtdb.item(g).evname;
					window.keyarray[q]['ename']=evtsname;
					break;
				}
			}
			
			curestart=t2-tstart1;//nth second
			cureend=t1-tstart1;
			curestart=Math.abs(curestart);
			cureend=Math.abs(cureend);
			
			$("#maincontrep").append('<div class="graphdiv" style="left:'+timelinestartpx+'px;width:'+timelinewidthpx+'px;background-color:'+bgcolors+';">'+curestart+' - '+cureend+'</div>');
			q++;
			break;
		}
	}
}

//CONTINUOUS EVENTS
for(var j=0;j<window.cevtarray.length;j++)
{
e=0;
	for(var k=j+1;k<window.cevtarray.length;k++)
	{
		if(window.cevtarray[k]["evid"]==window.cevtarray[j]["evid"]&&window.cevtarray[k]["status"]=="2")
		{
			e=1;
			t1=Date.parse(window.cevtarray[k]["presstime"]);//end time
			t2=Date.parse(window.cevtarray[j]["presstime"]);//start time
			timediff=t1-t2;//IN SECONDS
			timelinestart=t2-tstart1;
			timelineend=t1-tend1;
			unit=phasetime/scale;//HOW MANY SECONDS = 1PX
			timelinestartpx=timelinestart/unit;
			timelineendpx=timelineend/unit;
			timelinewidthpx=timelineendpx-timelinestartpx;
			timelinewidthpx=Math.abs(timelinewidthpx);

			bgcolors=colorgen();
			evvid=window.cevtarray[k]["evid"];
			window.keyarray[q]={}
			window.keyarray[q]['bgcolors']=bgcolors;
			window.keyarray[q]['eid']=window.cevtarray[k]["evid"];
			window.keyarray[q]['stime']=window.cevtarray[j]["presstime"];
			window.keyarray[q]['etime']=window.cevtarray[k]["presstime"];
			//$chk22=mysql_query("SELECT * FROM evtdb WHERE eid='$evvid' LIMIT 0,1");
			//$c22=@mysql_fetch_array($chk22);
			for(var g=0;g<window.db_evtdb.length;g++)
			{
				if(window.db_evtdb.item(g).eid==evvid)
				{
					evtsname=window.db_evtdb.item(g).evname;
					window.keyarray[q]['ename']=evtsname;
					break;
				}
			}
			
			curestart=t2-tstart1;//nth second
			cureend=t1-tstart1;
			curestart=Math.abs(curestart);
			cureend=Math.abs(cureend);
			
			$("#maincontrep").append('<div class="graphdiv1" style="left:'+timelinestartpx+'px;width:'+timelinewidthpx+'px;background-color:'+bgcolors+';">'+curestart+' - '+cureend+'</div>');
			q++;
			break;
		}
	}
	
	if(e!=1)
	{
			t1=tend;//END TIME IS PHASE'S END TIME
			t2=Date.parse(window.cevtarray[j]["presstime"]);//start time
			timediff=t1-t2;//IN SECONDS
			timelinestart=t2-tstart1;
			timelineend=t1-tend1;
			unit=phasetime/scale;//HOW MANY SECONDS = 1PX
			timelinestartpx=timelinestart/unit;
			timelineendpx=timelineend/unit;
			timelinewidthpx=timelineendpx-timelinestartpx;
			timelinewidthpx=Math.abs(timelinewidthpx);
			
			bgcolors=colorgen();
			evvid=window.cevtarray[k]["evid"];
			window.keyarray[q]={};
			window.keyarray[q]['bgcolors']=bgcolors;
			window.keyarray[q]['eid']=window.cevtarray[k]["evid"];
			window.keyarray[q]['stime']=window.cevtarray[j]["presstime"];
			window.keyarray[q]['etime']=tend;
			//$chk22=mysql_query("SELECT * FROM evtdb WHERE eid='$evvid' LIMIT 0,1");
			//$c22=@mysql_fetch_array($chk22);
			for(var e=0;e<window.db_evtdb.length;e++)
			{
				if(window.db_evtdb.item(e).eid==evvid)
				{
					evtsname=window.db_evtdb.item(e).evname;
					window.keyarray[q]['ename']=evtsname;
					break;
				}
			}
			
			curestart=t2-tstart1;//nth second
			cureend=t1-tstart1;
			curestart=Math.abs(curestart);
			cureend=Math.abs(cureend);
			
		$("#maincontrep").append('<div class="graphdiv1" style="left:'+timelinestartpx+'px;width:'+timelinewidthpx+'px;background-color:'+bgcolors+';">'+curestart+' - '+cureend+'</div>');
			q++;
		break;
	}	
}

$("#maincontrep").append('<hr><div id="keydetenclose"><div id="keybox"><div align="center"><font color="yellow">TOTAL EVENT TIME</font>:<br>'+phasetime+' seconds</div><br><div align="center"><font color="yellow">SCALE USED FOR GRAPH:</font>:<br> 1 second= '+scale+' pixels</div><br><div align="center"><font color="yellow">LOGGING START TIME</font>:<br>'+tstart+'</div><br><div align="center"><font color="yellow">LOGGING END TIME</font>:<br>'+tend+'</div><br><br>');
$("#keydetenclose").prepend('<form name="rescaleform"><input type="text" style="width:70px;" name="rescale"> <input type="button" value="Rescale" id="rescalebtn"><br> E-mail: <input type="text" name="usremail"> <input type="button" value="Send Report via E-mail" id="repmail"></form>');
$("#rescalebtn").click(function(){
	window.scales=document.rescaleform.rescale.value;
	var randval=(Math.random()*10000)+1;
	navpage("viewfinalreports.html?a="+randval);
	return;
});
$("#repmail").click(function(){
	$("#msgdivfinalrep").html("");
	$("#msgdivfinalrep").html("Please Wait.. Sending Email.. Make sure your internet connection is on!");
	var repemail=document.rescaleform.usremail.value;
	var reportcontent=$("#maincontrep").html();
	$.post("http://www.techahoy.com/tempdir/timetracker/exportreports.php", { sessid:getsession(),uname:checkuname(),tid:gettheme(),scales:window.scales,usremail:repemail,reporthtml:reportcontent })
	.done(function(data) {
		$("#msgdivfinalrep").html(data);
	});
});
		
var match,match1;
$("#maincontrep").append('<div style="clear:both;"></div><div style="height:500px;"></div><div align="center"><h2><u>KEY:</u></h2></div>');
for(var i=0;i<window.keyarray.length;i++)
{
	//match=window.keyarray[i]['stime'].match("[..:..:..]");
	//sttime=match[0];
	sttime=window.keyarray[i]['stime'];
	//match1=window.keyarray[i]['etime'].match("[..:..:..]");
	//entime=match1[0];
	entime=window.keyarray[i]['etime'];
	$("#maincontrep").append('<div style="width:100%;height:50px;background-color:'+window.keyarray[i]['bgcolors']+';"></div> &nbsp;&nbsp;&nbsp;&nbsp;<font color="white" size="18"><u>'+window.keyarray[i]['ename']+'</u></font><br>&nbsp;&nbsp;&nbsp;START: '+sttime+'<br>&nbsp;&nbsp;&nbsp;END: '+entime+'<hr><br>');
}

$("#maincontrep").append('<div style="clear:both;"><div class="selbtn" id="aexit" style="width:150px;margin:auto;">Exit</div><br></div></div></div>');

}

function finalrepstartstop(tx,results)
{
	var row,query2,i;
	window.tstart=0;
	window.tend=0;
	window.tstart1=0;
	window.tend1=0;
	window.phasetime=0;
	for(i=0;i<results.rows.length;i++)
	{
		row=results.rows.item(i);
		
		window.finalreptx=tx;
		window.finalrepres=results;
		
		if(row.status=="1")
		{
			window.tstart=row.presstime;
		}
		else
		if(row.status=="2")
		{
			window.tend=row.presstime;
		}
		
		if(i==results.rows.length-1)
		{
			
			
			window.tstart1=Date.parse(tstart);
			window.tend1=Date.parse(tend);
			window.phasetime=Date.parse(tend)-Date.parse(tstart);
			if(window.phasetime==0)
			{
				alert("OOPS! No event was recorded in our database! Try Again!");return;
			}
//mysql_query("SELECT * FROM pressdb WHERE sid='$sid' AND uname='$uname' AND thmid='$tid' ORDER BY sno ASC")
			window.curloop=0;
			query2="SELECT * FROM PRESSDB WHERE sid='"+getsession()+"' AND uname='"+checkuname()+"' AND thmid='"+gettheme()+"'";
			selectquery(query2,dbobj,getreparray,function(){alert("OOPS! An error occured in accessing the database!");});
		}
	}
}

function getreparray(tx1,results1)
{
	var row,cureid,curgpid,curthmid,cursid,curuname,curpresstime,curstatus,query3,i;
	i=window.curloop;
	if(i==results1.rows.length)
	{
		window.loopj=0;
		window.loopk=0;
		finalloopstart();
	}
	else
	{
		row=results1.rows.item(i);
		cureid=row.eid;
		curgpid=row.gpid;
		curthmid=row.thmid;
		cursid=row.sid;
		curuname=row.uname;
		curpresstime=row.presstime;
		curstatus=row.status;
		//mysql_query("SELECT * FROM contevtdb WHERE ceid='$eid' AND uname='$uname'")
		query3="SELECT * FROM CONTEVTDB WHERE ceid='"+cureid+"' AND uname='"+curuname+"'";
		selectquery(query3,dbobj,function(tx2,results2){
			if(results2.rows.length!=0)
			{
				window.cevtarr[window.cevtco]["evid"]=cureid;
				window.cevtarr[window.cevtco]["presstime"]=curpresstime;
				window.cevtarr[window.cevtco]["status"]=curstatus;
				window.cevtco++;
				getreparray(tx1,results1);
			}
			else
			{
				window.evtarr[window.evtco]["evid"]=cureid;
				window.evtarr[window.evtco]["gpid"]=curgpid;
				window.evtarr[window.evtco]["presstime"]=curpresstime;
				window.evtarr[window.evtco]["status"]=curstatus;
				window.evtco++;
				getreparray(tx1,results1);
			}
		},function(){alert("OOPS! An error occured in accessing the database!");});
	}
}

function finalloopstart()
{
	var q=0;
	var query3="SELECT * FROM EVTDB";
	selectquery(query3,dbobj,finalloops,function(){alert("OOPS! An error occured in accessing the database!");});
}

function finalloops(tx,results)
{
	var tid=gettheme();
	var uname=checkuname();
	window.eventsarray=new Array();
	if(results.rows.length==0)
	{
		alert("OOPS! There are no events in the database!");return;
	}
	else
	{
		for(var i=0;i<results.rows.length;i++)
		{
			window.eventsarray[i]=results.rows.item(i);
		}
		$("#maincontrep").html("");
		finalloopover();
	}
}

function finalloopover()
{
	var q=0;
	//NORMAL EVENTS
	for(var j=0;j<window.evtarr.length;j++)
	{
		for(var k=j+1;k<window.evtarr.length;k++)
		{
			if(window.evtarr[k]["evid"]==window.evtarr[j]["evid"]&&window.evtarr[k]["status"]=="2")
			{
				t1=Date.parse(window.evtarr[k]["presstime"]);
				t2=Date.parse(window.evtarr[j]["presstime"]);
				timediff=t1-t2;//IN SECONDS
				timelinestart=t2-window.tstart1;
				timelineend=t1-window.tend1;
				unit=window.phasetime/window.scales;//HOW MANY SECONDS = 1PX
				timelinestartpx=timelinestart/unit;
				timelineendpx=timelineend/unit;
				timelinewidthpx=timelineendpx-timelinestartpx;
				timelinewidthpx=Math.abs(timelinewidthpx);

				bgcolors=colorgen();
				evvid=window.evtarr[k]["evid"];
				window.keyarr[q]['bgcolors']=bgcolors;
				window.keyarr[q]['eid']=window.evtarr[k]["evid"];
				window.keyarr[q]['stime']=window.evtarr[j]["presstime"];
				window.keyarr[q]['etime']=window.evtarr[k]["presstime"];
				//$chk22=mysql_query("SELECT * FROM evtdb WHERE eid='$evvid' LIMIT 0,1");
				//query3="SELECT * FROM EVTDB WHERE eid='"+evvid+"' LIMIT 0,1";
				var evtsname;
				for(var p=0;p<window.eventsarray.length;p++)
				{
					if(window.eventsarray[p].eid==evvid)
					{
						evtsname=window.eventsarray[p].evname;
						break;
					}
				}
				window.keyarr[q]['ename']=evtsname;
				
				curestart=t2-window.tstart1;
				cureend=t1-window.tstart1;
				curestart=Math.abs(curestart);
				cureend=Math.abs(cureend);

				$("#maincontrep").append('<div class="graphdiv" style="left:'+timelinestartpx+'px;width:'+timelinewidthpx+'px;background-color:'+bgcolors+';">'+curestart+' - '+cureend+'</div>');
				q++;
				break;
			}
		}
	}
}