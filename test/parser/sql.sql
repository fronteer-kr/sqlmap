#select test.sql1:
    select * from user where 1=1
	and id=id?
	and userName=userName?
	and password=password?
	and email=email?
	and id in (ids?)
	#include test.sql

#insert test.sql2:
	insert into table user(id, userName, email, password)
	values(id?, userName?, email?, ?password)	

#sql test.sql:
	order by orderBy?? limit from?, to?

